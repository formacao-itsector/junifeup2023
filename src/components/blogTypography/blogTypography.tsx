import React from 'react';

interface SharedTypographyProps {
  content: string | React.ReactNode;
  style?: string;
}

export const Title = ({ content, style }: SharedTypographyProps) => {
  return <h1 className={style ? style : 'text-3xl font-bold pt-6'}>{content}</h1>;
};

export const Text = ({ content, style }: SharedTypographyProps) => {
  return <p className={style ? style : 'leading-snug text-zinc-400 indent-1 py-3'}>{content}</p>;
};

export const Date = ({ content, style }: SharedTypographyProps) => {
  return <p className={style ? style : 'text-sm text-zinc-400'}>{content}</p>;
};
