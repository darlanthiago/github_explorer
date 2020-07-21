import React from 'react';
import { useRouteMatch } from 'react-router-dom';

// import { Container } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <h1>Repositorio: </h1>
      <h4>{params.repository}</h4>
    </>
  );
};

export default Repository;
