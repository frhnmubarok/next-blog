import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from 'next-themes';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <motion.main
            key={router.route}
            className='flex flex-col h-full flex-grow'
            animate='enter'
            exit='exit'
            initial='initial'
            variants={{
              initial: { opacity: 0, y: 5 },
              enter: { opacity: 1, y: 0, transition: { duration: 0.2 } },
              exit: { opacity: 0, transition: { duration: 0.1 } },
            }}>
            <Component {...pageProps} />
          </motion.main>
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
