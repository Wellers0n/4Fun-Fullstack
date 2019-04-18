import * as React  from 'react'
import {company_company} from './__generated__/company_company.graphql'
import {createFragmentContainer, graphql} from 'react-relay'

type companyProps = {
    company: company_company,
}

const Company = ({ company }: companyProps) => (
    <div>
      <span>{company.name}</span>
    </div>
  );
  
  const PostFragmentContainer = createFragmentContainer(
    Company, {
    company: graphql`
      fragment company_company on Company {
        name
      },
    `,
  });