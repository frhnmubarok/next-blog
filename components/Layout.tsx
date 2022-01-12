import Header from './Header';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <div className='max-w-4xl mx-auto scroll-smooth py-8 px-4 selection:bg-cyan-300 selection:text-cyan-900 font-sans'>
        <Header />
        <main className='pt-4 pb-12 flex flex-col'>{children}</main>
      </div>
    </>
  );
};

export default Layout;
