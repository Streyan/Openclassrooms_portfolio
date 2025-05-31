interface Props {
  title: string;
  url: string;
}

function Link({ title, url }: Props) {
  return (
    <div className="">
      <a href={url} className="link text black button-underline">
        {title}
      </a>
    </div>
  );
}

export default Link;
