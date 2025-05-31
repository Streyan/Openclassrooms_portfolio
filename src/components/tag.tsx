interface Props {
  value?: string;
}

function Tag({ value }: Props) {
  return (
    <div className="tag">
      <p className="text black">{value}</p>
    </div>
  );
}

export default Tag;
