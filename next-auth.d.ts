import NextAuth from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      access_token: string;
      id: number;
      email: string;
    };
  }

  interface User {
    access_token: string;
    id: number;
    email: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    access_token: string;
    id: number;
    email: string;
  }
}
