export const UserRoles = {
  USER: "USER",
  ADMIN: "ADMIN",
} as const;

export type UserRole = keyof typeof UserRoles;
