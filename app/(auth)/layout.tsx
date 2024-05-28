type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <main className="min-h-screen mx-auto">
      {children}
    </main>
  )
}

export default AuthLayout;