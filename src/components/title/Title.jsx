import {Helmet} from "react-helmet-async";

const Title = ({title}) => {
  return (
    <Helmet>
      <title>Ajker Deal | {title}</title>
      <link rel="canonical" href="https://i.ibb.co/GQcCJRP/logo.png" />
    </Helmet>
  );
};

export default Title;
