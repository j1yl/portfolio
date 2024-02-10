import clsx from 'clsx';
import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Panel({ children, className }: Props) {
  return <div className={clsx('h-max w-full border border-black p-4', className)}>{children}</div>;
}
