import HeaderComponet from '@/components/HeaderComponet';
import FooterComponet from '@/components/FooterComponet';
import ModalComponent from '@/components/ModalComponent';
import ProviderComponent from "@/app/ProviderComponent";
import './css/style.css';

export const metadata = {  // index.html  헤드 영역()
  viewport: "width=device-width, initial-scale=1.0",
  title: '푸른마을',
  description: '푸른마을 NextJS 제작',
  keywords: ['푸른마을', '푸른', '마을', '쇼핑몰', 'Fashion', '의류'],
  iconst: {
    icon: "/images/logo192.png",
    shortcut: "/images/logo192.png",
    apple: "/images/logo192.png",
  },
  publisher: "문선종",
  robots: "index, follow"
}

export default function RootLayout({ children }) {  // children Main 컴포넌트 교체 Sub1 교체
  return (
    <html lang="ko">
     
      <body>
        <div id='wrap'>
          <ProviderComponent>
            <HeaderComponet />
            <main id='main'>{children}</main>
            <FooterComponet />
            <ModalComponent />
          </ProviderComponent>
        </div>        
      </body>
    </html>
  )
}
