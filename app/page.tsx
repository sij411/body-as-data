import Link from 'next/link';


export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
        <div id="button-container" className="flex items-center justify-center flex-col gap-4">
        <Link href="/webcam">
        <svg width="100" height="70" viewBox="0 0 53 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.35117 8.92188C9.35117 9.79427 9.22747 10.556 8.98008 11.207C8.73919 11.8581 8.40391 12.3984 7.97422 12.8281C7.54453 13.2578 7.03672 13.5801 6.45078 13.7949C5.86484 14.0098 5.23008 14.1172 4.54648 14.1172C4.23398 14.1172 3.92148 14.1009 3.60898 14.0684C3.30299 14.0358 2.99049 13.9805 2.67148 13.9023V18.0039H0.972265V4.19531H2.48594L2.59336 5.83594C3.08164 5.16536 3.60247 4.69661 4.15586 4.42969C4.70924 4.15625 5.3082 4.01953 5.95273 4.01953C6.51263 4.01953 7.00417 4.13672 7.42734 4.37109C7.85052 4.60547 8.20534 4.9375 8.4918 5.36719C8.77825 5.79036 8.9931 6.30469 9.13633 6.91016C9.27956 7.50911 9.35117 8.17969 9.35117 8.92188ZM7.61289 9C7.61289 8.48568 7.57383 8.01367 7.4957 7.58398C7.42409 7.1543 7.3069 6.78646 7.14414 6.48047C6.98138 6.17448 6.77305 5.93685 6.51914 5.76758C6.26523 5.5918 5.9625 5.50391 5.61094 5.50391C5.39609 5.50391 5.17799 5.53971 4.95664 5.61133C4.73529 5.67643 4.50417 5.79036 4.26328 5.95312C4.02891 6.10938 3.77825 6.32096 3.51133 6.58789C3.25091 6.84831 2.97096 7.17383 2.67148 7.56445V12.3203C2.98398 12.4505 3.31276 12.5547 3.65781 12.6328C4.00286 12.7044 4.34141 12.7402 4.67344 12.7402C5.59141 12.7402 6.31081 12.431 6.83164 11.8125C7.35247 11.1875 7.61289 10.25 7.61289 9ZM19.6492 14H17.95V7.74023C17.95 6.98503 17.8068 6.42188 17.5203 6.05078C17.2404 5.67318 16.8367 5.48438 16.3094 5.48438C16.0815 5.48438 15.8667 5.51693 15.6648 5.58203C15.4695 5.64062 15.2645 5.74805 15.0496 5.9043C14.8348 6.05404 14.6004 6.25911 14.3465 6.51953C14.0926 6.77995 13.7996 7.10547 13.4676 7.49609V14H11.7684V0.201172H13.4676V4.19531L13.409 5.73828C13.6759 5.41927 13.9363 5.15234 14.1902 4.9375C14.4507 4.71615 14.7078 4.53711 14.9617 4.40039C15.2221 4.26367 15.4858 4.16602 15.7527 4.10742C16.0197 4.04883 16.2964 4.01953 16.5828 4.01953C17.5594 4.01953 18.3146 4.31901 18.8484 4.91797C19.3823 5.51042 19.6492 6.4056 19.6492 7.60352V14ZM31.0996 9.01953C31.0996 9.78125 30.9922 10.4811 30.7773 11.1191C30.5625 11.7507 30.2533 12.2943 29.8496 12.75C29.446 13.1992 28.9544 13.5508 28.375 13.8047C27.7956 14.0521 27.138 14.1758 26.4023 14.1758C25.6992 14.1758 25.0677 14.0684 24.5078 13.8535C23.9544 13.6322 23.4824 13.3099 23.0918 12.8867C22.7077 12.4635 22.4115 11.9395 22.2031 11.3145C22.0013 10.6895 21.9004 9.97005 21.9004 9.15625C21.9004 8.39453 22.0078 7.70117 22.2227 7.07617C22.4375 6.44466 22.7467 5.9043 23.1504 5.45508C23.554 4.99935 24.0456 4.64779 24.625 4.40039C25.2044 4.14648 25.862 4.01953 26.5977 4.01953C27.3008 4.01953 27.929 4.13021 28.4824 4.35156C29.0423 4.56641 29.5143 4.88542 29.8984 5.30859C30.2891 5.72526 30.5853 6.24609 30.7871 6.87109C30.9954 7.49609 31.0996 8.21224 31.0996 9.01953ZM29.3613 9.09766C29.3613 8.49219 29.293 7.96484 29.1562 7.51562C29.026 7.0599 28.8372 6.68229 28.5898 6.38281C28.3424 6.07682 28.0397 5.84896 27.6816 5.69922C27.3301 5.54297 26.9362 5.46484 26.5 5.46484C25.9922 5.46484 25.556 5.56576 25.1914 5.76758C24.8333 5.96289 24.5371 6.22656 24.3027 6.55859C24.0749 6.89062 23.9056 7.27799 23.7949 7.7207C23.6908 8.1569 23.6387 8.61589 23.6387 9.09766C23.6387 9.70312 23.7038 10.2337 23.834 10.6895C23.9707 11.1452 24.1628 11.526 24.4102 11.832C24.6576 12.1315 24.957 12.3594 25.3086 12.5156C25.6602 12.6654 26.0573 12.7402 26.5 12.7402C27.0078 12.7402 27.4408 12.6426 27.7988 12.4473C28.1634 12.2454 28.4596 11.9785 28.6875 11.6465C28.9219 11.3145 29.0911 10.9303 29.1953 10.4941C29.306 10.0514 29.3613 9.58594 29.3613 9.09766ZM41.2609 13.8633C40.8768 13.9609 40.4797 14.0293 40.0695 14.0684C39.6594 14.1139 39.2427 14.1367 38.8195 14.1367C37.5891 14.1367 36.6711 13.86 36.0656 13.3066C35.4602 12.7467 35.1574 11.8906 35.1574 10.7383V5.62109H32.4133V4.19531H35.1574V1.5L36.8566 1.06055V4.19531H41.2609V5.62109H36.8566V10.6016C36.8566 11.3047 37.0422 11.832 37.4133 12.1836C37.7909 12.5286 38.3443 12.7012 39.0734 12.7012C39.3859 12.7012 39.7277 12.6784 40.0988 12.6328C40.4699 12.5807 40.8573 12.5026 41.2609 12.3984V13.8633ZM52.6918 9.01953C52.6918 9.78125 52.5844 10.4811 52.3695 11.1191C52.1547 11.7507 51.8454 12.2943 51.4418 12.75C51.0381 13.1992 50.5466 13.5508 49.9672 13.8047C49.3878 14.0521 48.7302 14.1758 47.9945 14.1758C47.2914 14.1758 46.6599 14.0684 46.1 13.8535C45.5466 13.6322 45.0746 13.3099 44.684 12.8867C44.2999 12.4635 44.0036 11.9395 43.7953 11.3145C43.5935 10.6895 43.4926 9.97005 43.4926 9.15625C43.4926 8.39453 43.6 7.70117 43.8148 7.07617C44.0297 6.44466 44.3389 5.9043 44.7426 5.45508C45.1462 4.99935 45.6378 4.64779 46.2172 4.40039C46.7966 4.14648 47.4542 4.01953 48.1898 4.01953C48.893 4.01953 49.5212 4.13021 50.0746 4.35156C50.6345 4.56641 51.1065 4.88542 51.4906 5.30859C51.8812 5.72526 52.1775 6.24609 52.3793 6.87109C52.5876 7.49609 52.6918 8.21224 52.6918 9.01953ZM50.9535 9.09766C50.9535 8.49219 50.8852 7.96484 50.7484 7.51562C50.6182 7.0599 50.4294 6.68229 50.182 6.38281C49.9346 6.07682 49.6319 5.84896 49.2738 5.69922C48.9223 5.54297 48.5284 5.46484 48.0922 5.46484C47.5844 5.46484 47.1482 5.56576 46.7836 5.76758C46.4255 5.96289 46.1293 6.22656 45.8949 6.55859C45.6671 6.89062 45.4978 7.27799 45.3871 7.7207C45.2829 8.1569 45.2309 8.61589 45.2309 9.09766C45.2309 9.70312 45.296 10.2337 45.4262 10.6895C45.5629 11.1452 45.7549 11.526 46.0023 11.832C46.2497 12.1315 46.5492 12.3594 46.9008 12.5156C47.2523 12.6654 47.6495 12.7402 48.0922 12.7402C48.6 12.7402 49.0329 12.6426 49.391 12.4473C49.7556 12.2454 50.0518 11.9785 50.2797 11.6465C50.5141 11.3145 50.6833 10.9303 50.7875 10.4941C50.8982 10.0514 50.9535 9.58594 50.9535 9.09766Z" fill="black"/>
  </svg>
        </Link>
        </div>
    </main>
  );
}
