import AboutMe from "./AboutMe";

const SideContent = () => {
  const text =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente asperiores unde quia veniam vero, quasi iusto, nihil officia fugiat praesentium nesciunt debitis sint fugit culpa perferendis harum non doloremque blanditiis?";

  return (
    <div className="side-content">
      <AboutMe
        title="A Propos de Moi"
        picture="https://avatars.githubusercontent.com/u/185430264?v=4&size=64"
        description={text}
      />
    </div>
  );
};

export default SideContent;
