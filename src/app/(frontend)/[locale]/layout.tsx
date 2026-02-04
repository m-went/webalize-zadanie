import { Footer } from '@/components/Footer/index'
import { Header } from '@/components/Header'

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <html lang={locale}>
      <body>
        <Header locale={locale} />
        <main>{children}</main>

        <Footer locale={locale} />
      </body>
    </html>
  )
}
