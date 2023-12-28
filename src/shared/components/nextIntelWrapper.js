import { NextIntlClientProvider } from 'next-intl';
export default function nextIntlWrapper(Component) {
    return (
      <NextIntlClientProvider locale="en">
        <Component />
      </NextIntlClientProvider>
    );
  };
