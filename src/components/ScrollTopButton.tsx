import { useEffect, useState } from 'react';

const ScrollToTop: React.FC = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    const toggleVis = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    setTimeout(() => {
      setFirstLoad(false);
    }, 150);

    window.addEventListener('scroll', toggleVis);

    return () => window.removeEventListener('scroll', toggleVis);
  }, []);

  return (
    <div
      className={`fixed z-50 inset-x-0 mx-auto bottom-6 w-fit h-fit items-center justify-center flex ${
        firstLoad ? 'invisible' : 'visible'
      } ${showScrollButton ? 'animate-enter' : 'animate-leave '}`}
    >
      <button
        className=' flex fill-zm-light-900 rounded-full hover:fill-zm-light-400'
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className=''
          width={36}
          height={36}
          viewBox='0 0 24 24'
          strokeWidth={1}
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <title>Goto top of page</title>
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path
            d='M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-4.98 3.66l-.163 .01l-.086 .016l-.142 .045l-.113 .054l-.07 .043l-.095 .071l-.058 .054l-4 4l-.083 .094a1 1 0 0 0 1.497 1.32l2.293 -2.293v5.586l.007 .117a1 1 0 0 0 1.993 -.117v-5.585l2.293 2.292l.094 .083a1 1 0 0 0 1.32 -1.497l-4 -4l-.082 -.073l-.089 -.064l-.113 -.062l-.081 -.034l-.113 -.034l-.112 -.02l-.098 -.006z'
            strokeWidth={0}
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default ScrollToTop;

