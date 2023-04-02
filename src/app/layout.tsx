import 'bootstrap/dist/css/bootstrap.css'
import './globals.sass'
export const metadata = {
  title: 'TrackMaster',
  description: 'Rastreie seu pacote com facilidade, chega de dor de cabeça!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt_BR">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
