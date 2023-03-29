const Card: React.FC<{
  title: string;
  body: string;
  image: string;
  url: string;
  className?: string;
}> = ({ image, title, body, className, url }) => {
  return (
    <div
      className={`${className}  transition-all ease-linear duration-300 hover: items-center flex flex-col justify-center w-full h-full`}
    >
      <a target="_blank" href={url}>
        <div className="flex flex-col md:flex-row border-2 border-zm-400 w-full h-full bg-zm-600 rounded ">
          <div className="h-full">
            <img src={image} alt={image} className="rounded" />
          </div>
          <div className="flex flex-col  w-full ">
            <div className="px-4 py-2 border-b-2 md:border-l-2  border-zm-400 w-full">
              <h1 className="text-xl font-bold text-zm-light-100">{title}</h1>
            </div>
            <div className="px-4 py-2 md:border-l-2 border-zm-400 w-full  leading-3 h-full">
              <span className="text-sm text-zm-light-200">{body}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
