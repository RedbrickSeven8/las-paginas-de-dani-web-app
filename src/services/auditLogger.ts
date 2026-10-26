import type { ConsentRecord } from '../types';

const AUDIT_STORAGE_KEY = 'las_paginas_dani_consent_audit_log_internal';

export const logConsentAudit = (record: Omit<ConsentRecord, 'id' | 'timestamp' | 'isoDate' | 'userAgent'>): ConsentRecord => {
  const now = new Date();
  
  const pad = (n: number) => n.toString().padStart(2, '0');
  const formattedDate = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  
  const completeRecord: ConsentRecord = {
    id: `audit_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
    timestamp: formattedDate,
    isoDate: now.toISOString(),
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown',
    ...record,
  };

  try {
    const existing = getConsentAuditLogs();
    existing.push(completeRecord);
    localStorage.setItem(AUDIT_STORAGE_KEY, JSON.stringify(existing));
    
    if (typeof window !== 'undefined') {
      (window as unknown as { __DANI_CONSENT_AUDIT__: ConsentRecord[] }).__DANI_CONSENT_AUDIT__ = existing;
    }
  } catch {
    // Non-blocking fallback
  }

  return completeRecord;
};

export const getConsentAuditLogs = (): ConsentRecord[] => {
  try {
    const data = localStorage.getItem(AUDIT_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};
