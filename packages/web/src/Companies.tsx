import * as React from 'react'
import {createFragmentContainer, graphql} from 'react-relay'
import { Companies_companies } from './__generated__/Companies_companies.graphql'

type companiesProps = {
    companies: Companies_companies,
  }

const Companies = ({ companies }: companiesProps) => (
    <div>
      <span>{companies.companies.map((company:any, index:number) => <div key={index}>{company.name}</div>)}</span>
    </div>
)

const CompaniesFragmentContainer = createFragmentContainer(
    Companies,{
    companies: graphql`
        fragment Companies_companies on Companies {
            companies{
                name
            }
        }
    `
    }
)

export default CompaniesFragmentContainer