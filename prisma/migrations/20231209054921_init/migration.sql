-- CreateTable
CREATE TABLE "Story" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "likes" INTEGER NOT NULL,
    "tag" TEXT NOT NULL,
    "liked" BOOLEAN NOT NULL,
    "author" TEXT NOT NULL DEFAULT 'arya',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
