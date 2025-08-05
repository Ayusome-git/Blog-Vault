-- CreateTable
CREATE TABLE "public"."user" (
    "userId" SERIAL NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("userId")
);
