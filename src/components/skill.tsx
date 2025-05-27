interface Props {
  title: string;
  xp: string;
}

function Skill({ title, xp }: Props) {
  return (
    <div className="flex-column skill">
      <p className="dropdown_skill_title headingL">{title}</p>
      <p className="dropdown_skill_subtitle text">{xp} ans d'expérience</p>
    </div>
  );
}

export default Skill;
