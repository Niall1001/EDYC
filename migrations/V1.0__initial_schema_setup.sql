CREATE TABLE IF NOT EXISTS public.News(
    id          serial
            primary key,
    name        VARCHAR(255),
    date        VARCHAR(255),
    description VARCHAR(255),
    imageSource VARCHAR(255),
    text        TEXT
);