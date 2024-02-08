const FooterLegal = () => {
  return (
    <div className='text-center sm:flex sm:justify-between sm:text-left'>
      <p className='text-sm text-gray-400'>
        <span className='block sm:inline'>Todos os direitos reservados.</span>
        <a className='inline-block text-teal-500 underline transition hover:text-teal-500/75' href='/'>
          termos e condições
        </a>
        <span>&middot;</span>
        <a className='inline-block text-teal-500 underline transition hover:text-teal-500/75' href='/'>
          Política de privacidade
        </a>
      </p>
      <p className='mt-4 text-sm text-gray-500 sm:order-first sm:mt-0'>
        &copy; 2024 Unimake Software
      </p>
    </div>
  );
};

export default FooterLegal;
