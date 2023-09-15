interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = ({ children, onClick, disabled }: Props) => {
  return (
    <button
      className="rounded-md bg-base-100 px-4 py-1 transition-colors hover:bg-base-300 disabled:cursor-not-allowed disabled:opacity-50"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
