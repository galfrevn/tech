export const setupRedirectsTable = `
  CREATE TABLE redirects (
    id SERIAL PRIMARY KEY,
    source VARCHAR(255) NOT NULL,
    destination VARCHAR(255) NOT NULL,
    permanent BOOLEAN NOT NULL
  );
`;

export const setupGuestbookTable = ` 
  CREATE TABLE guestbook (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    created_by VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP
  );
`;

export const setupViewsTable = `
  CREATE TABLE views (
    slug VARCHAR(255) PRIMARY KEY,
    count INT NOT NULL
  );
`;

export interface View {
  slug: string;
  count: number;
}

export interface Blog {
  slug: string;
  content: string;
}
