interface Props {
  title: string;
  xp: string;
}

function Skill({ title, xp }: Props) {
  return (
    <div className="flex-column skill">
      <p className="headingL black">{title}</p>
      <p className="text black">{xp} ans d'expérience</p>
    </div>
  );
}

export default Skill;
