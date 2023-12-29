import React from "react";
import { useNavigate } from "react-router-dom";
import { FadeIn } from "../animations/fadeIn";
import { Button } from "../button/button";
import { Header } from "../header/header";
import { Title } from "../title/title";
import "./invitation.scss";

export const Invitation = () => {
    const navigate = useNavigate();
    
    return (
        <>
        <Header />
        <FadeIn>
            <div className="invitation">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="236"
                    height="39"
                    viewBox="0 0 236 39"
                    fill="none"
                >
                    <path
                    d="M4.67078 31.7942C4.84671 31.8332 4.98848 31.9364 5.0961 32.1038C5.18577 32.2434 5.24604 32.4051 5.2769 32.5891L5.70689 36.5762L6.98208 38.5606L6.27581 39L5.119 37.1998L0.807617 34.1978L1.5309 33.7478L5.58276 36.5128L5.17479 32.6526C5.14752 32.4743 5.08545 32.3097 4.9886 32.159C4.89176 32.0083 4.77388 31.9175 4.63498 31.8867L4.67078 31.7942Z"
                    fill="black"
                    />
                    <path
                    d="M8.27488 33.8717C7.65785 32.8343 7.44487 31.901 7.63592 31.0716C7.82938 30.2332 8.32869 29.5822 9.13385 29.1185C9.939 28.6548 10.7181 28.5199 11.4711 28.7137C12.2298 28.9042 12.9144 29.5124 13.5246 30.5384C14.1349 31.5643 14.3411 32.4863 14.1432 33.3042C13.9454 34.1222 13.4207 34.7764 12.5692 35.2668C11.8336 35.6904 11.1074 35.8293 10.3907 35.6835C10.0186 35.607 9.64947 35.4178 9.2833 35.116C8.91954 34.8051 8.5834 34.3904 8.27488 33.8717ZM9.15863 29.219C8.57359 29.5559 8.24538 30.0893 8.17399 30.8191C8.10839 31.5456 8.37054 32.4048 8.96045 33.3965C9.55036 34.3883 10.1576 35.0104 10.7822 35.2629C11.4067 35.5154 12.0115 35.4732 12.5966 35.1362C13.1874 34.796 13.5156 34.2626 13.5812 33.5361C13.6492 32.8006 13.3917 31.9426 12.8085 30.9623C12.222 29.9762 11.6119 29.3557 10.9781 29.1009C10.3502 28.8427 9.74368 28.8821 9.15863 29.219Z"
                    fill="black"
                    />
                    <path
                    d="M18.1617 24.2298L18.277 24.1689L20.1822 27.6599C20.6807 28.5734 20.8642 29.3423 20.7326 29.9665C20.5978 30.585 20.2347 31.0505 19.6434 31.3629C19.2709 31.5598 18.9371 31.6949 18.642 31.7684C18.3437 31.8361 18.03 31.8406 17.701 31.7821C17.0311 31.6714 16.3976 31.069 15.8007 29.9752L13.8954 26.4841L14.6316 26.0951L16.5321 29.5774C17.11 30.6364 17.6584 31.2574 18.1773 31.4405C18.4381 31.5275 18.6747 31.5562 18.887 31.5265C19.1053 31.4936 19.3415 31.41 19.5958 31.2757C20.1634 30.9757 20.5046 30.533 20.6194 29.9476C20.7369 29.3533 20.5512 28.6081 20.0621 27.7121L18.1617 24.2298Z"
                    fill="black"
                    />
                    <path
                    d="M26.7564 27.7211L26.6471 27.7718L26.3678 20.2362L26.4465 20.1449L31.7658 25.3997L30.9916 25.7584L29.3375 24.116L26.678 25.3485L26.7564 27.7211ZM26.5487 21.3349L26.6715 25.2419L29.2673 24.039L26.5487 21.3349Z"
                    fill="black"
                    />
                    <path
                    d="M30.7701 18.3304C31.4641 17.9791 32.0854 17.6874 32.6342 17.4551C34.1571 16.8105 35.1373 16.9888 35.5749 17.9898C35.7605 18.4145 35.8215 18.838 35.7577 19.2604C35.694 19.6828 35.4301 20.0569 34.9661 20.3827L38.1564 22.6666L37.2963 23.0306L34.1669 20.7857L32.9738 21.2907L34.2906 24.3028L33.523 24.6277L30.7701 18.3304ZM32.674 17.5461C32.3164 17.6975 31.9495 17.8779 31.5735 18.0874L32.934 21.1997L34.3028 20.6203C35.1562 20.216 35.3363 19.4496 34.843 18.3211C34.6414 17.8601 34.3581 17.563 33.9931 17.4299C33.6254 17.2908 33.1857 17.3295 32.674 17.5461Z"
                    fill="black"
                    />
                    <path
                    d="M41.132 14.0415L41.1688 14.1337L38.2176 15.2758L39.323 18.0415L42.0587 16.9828L42.0956 17.075L39.3598 18.1337L40.7231 21.5448L43.8805 20.3229L43.9173 20.4151L39.9823 21.9379L37.4031 15.4845L41.132 14.0415Z"
                    fill="black"
                    />
                    <path
                    d="M47.1011 12.0058L47.0683 11.9121L48.7627 11.338L48.7955 11.4317L48.329 11.5897L50.5578 17.9591L51.0242 17.8011L51.057 17.8947L49.3626 18.4688L49.3298 18.3751L49.7677 18.2268L47.5389 11.8574L47.1011 12.0058Z"
                    fill="black"
                    />
                    <path
                    d="M53.3834 17.121L53.2586 17.1597L51.1405 10.5458L51.467 10.4446L57.4191 15.3191L55.4615 9.20597L55.5863 9.16727L57.7043 15.7812L57.0034 15.9985L51.6284 11.6409L53.3834 17.121Z"
                    fill="black"
                    />
                    <path
                    d="M62.5159 7.22018C62.6731 7.30726 62.7787 7.4462 62.8329 7.63701C62.8781 7.79603 62.8886 7.968 62.8645 8.15293L62.0083 14.56L61.9152 14.6371L57.5613 8.58284L58.3854 8.35618L62.0162 13.447L62.7481 8.18493C62.7741 8.00636 62.7627 7.83121 62.7139 7.65947C62.6651 7.48774 62.5787 7.3675 62.4546 7.29876L62.5159 7.22018Z"
                    fill="black"
                    />
                    <path
                    d="M64.764 6.75516L64.7395 6.65908L66.4775 6.2293L66.502 6.32538L66.0236 6.44369L67.6922 12.9769L68.1706 12.8586L68.1951 12.9547L66.4571 13.3845L66.4326 13.2884L66.8817 13.1773L65.2132 6.64409L64.764 6.75516Z"
                    fill="black"
                    />
                    <path
                    d="M72.6263 11.9284L71.8113 12.1096L70.2799 5.44235L68.5811 5.82014L68.5589 5.72352L72.7815 4.78449L72.8037 4.88112L71.095 5.2611L72.6263 11.9284Z"
                    fill="black"
                    />
                    <path
                    d="M78.7871 3.59794L78.8065 3.69516L75.6944 4.29533L76.2753 7.21177L79.1601 6.65542L79.1795 6.75263L76.2946 7.30898L77.0111 10.9059L80.3405 10.2638L80.3598 10.3611L76.2104 11.1613L74.855 4.35625L78.7871 3.59794Z"
                    fill="black"
                    />
                    <path
                    d="M81.9375 3.05695C82.2268 2.99716 82.5106 2.94494 82.7888 2.90031C83.0736 2.85462 83.3766 2.83613 83.6976 2.84484C84.0253 2.8525 84.355 2.91336 84.6867 3.02743C85.024 3.13392 85.3197 3.29727 85.5738 3.51748C85.8334 3.7301 86.0635 4.03111 86.264 4.4205C86.4645 4.8099 86.6134 5.29791 86.7106 5.88455C86.8078 6.47119 86.7959 7.01511 86.6749 7.5163C86.5595 8.00991 86.3534 8.40766 86.0566 8.70955C85.4807 9.29711 84.7291 9.66527 83.8017 9.81405C83.4771 9.86612 83.1338 9.90781 82.7718 9.93913L82.275 10.0188L81.1426 3.18448L81.9375 3.05695ZM83.0867 9.8083C83.228 9.79902 83.4046 9.77738 83.6166 9.74337C83.8286 9.70937 83.987 9.6806 84.0919 9.65708C84.1968 9.63356 84.3382 9.58411 84.5162 9.50873C84.693 9.42683 84.8539 9.33076 84.9988 9.22051C85.1438 9.11027 85.2888 8.95986 85.4341 8.76927C85.5849 8.57111 85.7043 8.34786 85.7923 8.09953C85.9886 7.51934 86.0155 6.79904 85.8729 5.93864C85.7714 5.32593 85.6077 4.81017 85.382 4.39138C85.1551 3.96606 84.9245 3.66179 84.6901 3.47857C84.4623 3.29429 84.1991 3.16254 83.9004 3.08333C83.6005 2.9976 83.3662 2.95824 83.1974 2.96525C83.0285 2.97226 82.8348 2.9933 82.6162 3.02837C82.3976 3.06344 82.1872 3.10722 81.9851 3.15972L83.0867 9.8083Z"
                    fill="black"
                    />
                    <path
                    d="M95.3389 8.19635L94.5085 8.28836L93.7312 1.49586L92.0005 1.68763L91.9892 1.58918L96.2911 1.11253L96.3023 1.21098L94.5616 1.40385L95.3389 8.19635Z"
                    fill="black"
                    />
                    <path
                    d="M98.5173 4.53686C98.4213 3.33859 98.643 2.4072 99.1823 1.74267C99.7277 1.07105 100.465 0.699186 101.395 0.627096C102.326 0.555005 103.086 0.767635 103.678 1.26499C104.277 1.76182 104.624 2.60278 104.719 3.78788C104.813 4.97298 104.591 5.89121 104.05 6.54256C103.51 7.19392 102.748 7.55772 101.765 7.63396C100.915 7.69983 100.2 7.51345 99.6192 7.07484C99.3182 6.84643 99.0697 6.5179 98.8738 6.08922C98.6841 5.65345 98.5652 5.13599 98.5173 4.53686ZM101.373 0.728188C100.697 0.78057 100.166 1.11989 99.7784 1.74615C99.3976 2.37189 99.2531 3.25756 99.3448 4.40316C99.4365 5.54875 99.7075 6.36909 100.158 6.86416C100.608 7.35924 101.171 7.58058 101.847 7.5282C102.529 7.4753 103.061 7.13598 103.442 6.51023C103.829 5.87739 103.977 4.99475 103.886 3.86233C103.795 2.72332 103.521 1.90324 103.063 1.4021C102.612 0.900443 102.049 0.675806 101.373 0.728188Z"
                    fill="black"
                    />
                    <path
                    d="M114.291 7.0211C113.036 7.05018 112.099 6.72178 111.478 6.03591C111.257 5.78999 111.075 5.46061 110.931 5.04777C110.787 4.63492 110.707 4.13139 110.693 3.53717C110.679 2.94295 110.764 2.4092 110.947 1.93592C111.137 1.45588 111.4 1.08314 111.736 0.817719C112.389 0.320348 113.185 0.0607798 114.124 0.0390135C114.392 0.0327946 114.655 0.0498398 114.911 0.0901491C115.167 0.123856 115.359 0.16234 115.488 0.205603L115.67 0.270732L115.643 0.370468C115.182 0.202774 114.677 0.125301 114.126 0.13805C113.415 0.15453 112.827 0.396074 112.361 0.862682C112.007 1.2078 111.764 1.70889 111.632 2.36596C111.554 2.73771 111.521 3.19099 111.534 3.72579C111.546 4.26059 111.635 4.75398 111.801 5.20598C111.966 5.65137 112.148 5.98075 112.348 6.19412C112.554 6.40734 112.8 6.57671 113.085 6.70222C113.37 6.82114 113.596 6.88856 113.765 6.90448C113.933 6.9204 114.134 6.92564 114.369 6.9202C114.611 6.9146 114.882 6.8852 115.183 6.83198C115.484 6.77877 115.711 6.73057 115.864 6.68738L116.094 6.61269L116.127 6.71102C115.621 6.90111 115.009 7.00447 114.291 7.0211Z"
                    fill="black"
                    />
                    <path
                    d="M122.225 0.0330394L122.224 0.1321L119.053 0.105951L119.028 3.07777L121.967 3.10201L121.966 3.20107L119.027 3.17683L118.995 6.84208L122.388 6.87005L122.387 6.96911L118.159 6.93425L118.218 0L122.225 0.0330394Z"
                    fill="black"
                    />
                    <path
                    d="M128.16 7.15774L124.337 7.01957L124.595 0.0897541L125.43 0.119933L125.175 6.95075L128.164 7.05874L128.16 7.15774Z"
                    fill="black"
                    />
                    <path
                    d="M134.464 0.588693L134.457 0.687547L131.293 0.48472L131.097 3.45036L134.03 3.63838L134.023 3.73723L131.09 3.54921L130.848 7.20684L134.233 7.42383L134.227 7.52269L130.007 7.25225L130.466 0.332422L134.464 0.588693Z"
                    fill="black"
                    />
                    <path
                    d="M136.834 0.853154C137.614 0.873819 138.302 0.912254 138.896 0.96846C140.547 1.12445 141.319 1.7448 141.213 2.82951C141.173 3.2371 141.018 3.57744 140.749 3.85054C140.48 4.11706 140.077 4.27797 139.539 4.33326C140.041 4.44042 140.427 4.62951 140.697 4.90054C140.967 5.17157 141.073 5.60948 141.014 6.21429C140.89 7.48308 140.003 8.03948 138.353 7.88349L136.168 7.67698L136.834 0.853154ZM137.01 7.657L138.362 7.78488C138.957 7.84108 139.393 7.72967 139.669 7.45063C139.953 7.16565 140.126 6.70761 140.188 6.0765C140.25 5.4454 140.164 5.01266 139.93 4.77829C139.697 4.54393 139.33 4.39649 138.831 4.33598L137.347 4.19578L137.01 7.657ZM138.887 1.06707C138.499 1.03044 138.09 1.01493 137.657 1.02053L137.357 4.09717L138.84 4.23737C139.786 4.28697 140.309 3.79899 140.409 2.77345C140.458 2.27382 140.355 1.87927 140.1 1.58978C139.846 1.29372 139.441 1.11949 138.887 1.06707Z"
                    fill="black"
                    />
                    <path
                    d="M143.704 1.53898C144.483 1.58475 145.168 1.64529 145.761 1.72061C147.405 1.92964 148.156 2.57451 148.014 3.65524C147.954 4.11372 147.787 4.5087 147.513 4.84017C147.24 5.17164 146.819 5.3612 146.251 5.40886L147.813 8.97368L146.885 8.85562L145.355 5.35483L144.067 5.19108L143.64 8.44307L142.811 8.33771L143.704 1.53898ZM145.748 1.81886C145.362 1.76978 144.953 1.74108 144.521 1.73277L144.08 5.09283L145.557 5.2807C146.501 5.36073 147.053 4.7916 147.213 3.57333C147.278 3.07555 147.188 2.67788 146.943 2.38035C146.699 2.07626 146.3 1.8891 145.748 1.81886Z"
                    fill="black"
                    />
                    <path
                    d="M149.482 9.21231L149.363 9.19308L153.473 2.8288L153.59 2.79754L154.946 10.0933L154.102 9.95716L153.685 7.68149L150.784 7.21375L149.482 9.21231ZM152.989 3.83495L150.84 7.1224L153.672 7.57892L152.989 3.83495Z"
                    fill="black"
                    />
                    <path
                    d="M158.974 10.8547L158.154 10.6966L159.49 3.98877L157.781 3.65916L157.801 3.56194L162.049 4.38122L162.029 4.47844L160.31 4.14691L158.974 10.8547Z"
                    fill="black"
                    />
                    <path
                    d="M168.03 5.68302L168.008 5.77965L164.914 5.09176L164.249 7.99058L167.116 8.62824L167.094 8.72487L164.226 8.0872L163.405 11.6624L166.715 12.3983L166.692 12.495L162.568 11.5778L164.122 4.81388L168.03 5.68302Z"
                    fill="black"
                    />
                    <path
                    d="M174.402 14.4605L173.597 14.2417L175.445 7.65277L173.766 7.19671L173.793 7.10122L177.966 8.23477L177.939 8.33027L176.251 7.87157L174.402 14.4605Z"
                    fill="black"
                    />
                    <path
                    d="M178.535 15.6292L177.737 15.3865L179.817 8.76105L180.616 9.00379L179.659 12.0515L182.785 13.002L183.742 9.95426L184.54 10.197L182.46 16.8224L181.661 16.5797L182.755 13.0966L179.629 12.1461L178.535 15.6292Z"
                    fill="black"
                    />
                    <path
                    d="M190.537 12.1932L190.504 12.2869L187.505 11.2733L186.524 14.0841L189.304 15.0237L189.272 15.1173L186.491 14.1778L185.281 17.6444L188.49 18.7288L188.458 18.8225L184.458 17.4711L186.747 10.9126L190.537 12.1932Z"
                    fill="black"
                    />
                    <path
                    d="M197.441 22.1968L193.884 20.8093L196.482 14.3631L197.259 14.6661L194.698 21.0203L197.478 22.1048L197.441 22.1968Z"
                    fill="black"
                    />
                    <path
                    d="M200.303 19.7769C200.791 18.6748 201.431 17.9552 202.224 17.618C203.027 17.2774 203.855 17.2903 204.711 17.6567C205.566 18.0232 206.136 18.5627 206.421 19.2754C206.712 19.9908 206.617 20.8934 206.134 21.9834C205.652 23.0733 205.017 23.7809 204.229 24.106C203.441 24.4311 202.595 24.3998 201.69 24.0123C200.909 23.6775 200.366 23.1823 200.064 22.5267C199.907 22.1859 199.844 21.781 199.876 21.312C199.917 20.8397 200.059 20.3279 200.303 19.7769ZM204.643 17.7357C204.021 17.4694 203.39 17.5231 202.749 17.8967C202.114 18.273 201.563 18.9879 201.097 20.0415C200.631 21.0952 200.478 21.9446 200.64 22.5898C200.801 23.2351 201.192 23.6908 201.813 23.9571C202.441 24.226 203.072 24.1723 203.707 23.796C204.351 23.4164 204.903 22.7058 205.364 21.6642C205.828 20.6167 205.977 19.7659 205.813 19.112C205.654 18.4607 205.264 18.0019 204.643 17.7357Z"
                    fill="black"
                    />
                    <path
                    d="M213.952 21.9019C214.012 22.0693 213.999 22.2423 213.912 22.421C213.839 22.57 213.732 22.7062 213.59 22.8297L208.657 27.0956L208.536 27.0932L209.312 19.7159L210.084 20.0795L209.408 26.2632L213.481 22.7783C213.62 22.6608 213.729 22.5216 213.807 22.3608C213.886 22.1999 213.901 22.0534 213.854 21.9213L213.952 21.9019Z"
                    fill="black"
                    />
                    <path
                    d="M219.589 24.7406L219.542 24.8285L216.726 23.394L215.338 26.0333L217.948 27.3631L217.902 27.4511L215.291 26.1213L213.579 29.3764L216.592 30.9111L216.546 30.9991L212.791 29.0864L216.03 22.9281L219.589 24.7406Z"
                    fill="black"
                    />
                    <path
                    d="M223.142 30.7848C223.76 29.7479 224.483 29.1087 225.311 28.8671C226.149 28.6232 226.971 28.7334 227.775 29.1977C228.58 29.6621 229.081 30.2648 229.277 31.0059C229.479 31.7503 229.275 32.6353 228.664 33.6607C228.053 34.6862 227.336 35.3141 226.514 35.5442C225.693 35.7744 224.856 35.6439 224.005 35.1529C223.27 34.7286 222.791 34.1733 222.57 33.4868C222.456 33.13 222.443 32.7207 222.532 32.2588C222.629 31.7945 222.833 31.3032 223.142 30.7848ZM227.698 29.2682C227.114 28.9308 226.48 28.9099 225.798 29.2055C225.122 29.5044 224.489 30.1495 223.898 31.1408C223.307 32.1321 223.053 32.9576 223.135 33.6171C223.216 34.2767 223.549 34.7751 224.134 35.1125C224.725 35.4533 225.358 35.4742 226.034 35.1752C226.719 34.8739 227.354 34.2333 227.938 33.2534C228.525 32.2678 228.777 31.4407 228.693 30.7721C228.615 30.1069 228.283 29.6056 227.698 29.2682Z"
                    fill="black"
                    />
                    <path
                    d="M235.808 34.1016L235.754 34.1853L233.074 32.5165L231.351 35.1951L233.835 36.7421L233.781 36.8258L231.297 35.2789L229.359 38.2924L228.653 37.8526L232.422 31.9931L235.808 34.1016Z"
                    fill="black"
                    />
                </svg>
                <Title title={'Jéremie & Hodaya'} size={24} />
                <div className='invitation_content'>
                    <p>
                        <span className='invitation_preposition'>on</span>
                        {' '}
                        <span className='invitation_date'>Tuesday</span>
                    </p>
                    <p className='invitation_day'>
                        <span className='invitation_number'>9</span>
                        <span className='invitation_preposition'>th</span>
                    </p>
                    <p>
                        <span className='invitation_date'>April</span>
                        {' '}
                        <span className='invitation_number'>2024</span>
                    </p>
                    <p>
                        <span className='invitation_preposition'>at</span>
                        {' '}
                        <span className='invitation_number'>17</span>
                        <span className='invitation_preposition'>h</span>
                        <span className='invitation_number'>00</span>
                    </p>
                </div>
                <h4 className='invitation_subtitle'>Destination of love</h4>
                <h6 className='invitation_address'>HaGiva, Givat Brenner, Israël</h6>
                <p className='invitation_note'>Please confirm your presence</p>
                <Button text={'RSVP'} onClick={() => navigate('/form')} />
            </div>
        </FadeIn>
        </>
    );
};
