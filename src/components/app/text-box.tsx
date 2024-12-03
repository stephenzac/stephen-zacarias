interface TextBoxProps {
  children?: React.ReactNode;
}

export const TextBox: React.FC<TextBoxProps> = ({ children }) => (
  <div className='w-60 h-14 rounded-md border-4 border-double border-accent bg-zinc-700 text-slate-100'>
    {children}
  </div>
);
