const ProjectCard = ({ imgUrl, title, tags, source, demo }) => {
  return (
    <div className="h-full bg-white rounded-xl overflow-hidden shadow-md mx-2">
      <img src={imgUrl} alt={title} className="w-full h-72 md:h-80 object-cover" />

      <div className="px-4 py-5 ">
        <h3 className="text-base font-semibold line-clamp-2 overflow-hidden text-ellipsis">{title}</h3>
        <div className="my-4 flex gap-3 ">
          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className=" flex items-center justify-center text-xs text-white bg-gradient-primary px-2 py-1 rounded-[71px] btn-scale-aim "
          >
            Source
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className=" text-xs text-primary px-5 py-1 rounded-[71px] border-2 border-primary btn-scale-aim "
          >
            Live
          </a>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs text-secondary bg-orange-100 px-3 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
