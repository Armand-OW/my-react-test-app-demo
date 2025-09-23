export type UserRole = 'admin' | 'editor' | 'viewer' | 'guest';

export function getUserAccessLevel(role: UserRole, isActive: boolean, isVerified: boolean): string {
  if (!isActive) {
    return 'no-access';
  }

  if (isVerified) {
    if (role === 'admin') {
    return 'full-access';
    } else {
        return 'edit-access';
    }
  }

  if (role === 'viewer') {
    return 'read-only';
  }

  if (role === 'guest') {
    return 'limited-access';
  }

  return 'unknown';
} 