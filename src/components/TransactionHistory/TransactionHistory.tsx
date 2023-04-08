import { ITransactionsProps } from "types/appTypes";
import { TransactionHistoryItem } from "../TransactionHistoryItem/TransactionHistoryItem";
import { Table, Head, HeadRow } from "./TransactionHistory.styled";

export const TransactionHistory:React.FC<ITransactionsProps> = ({items})=> {
    return <Table>
  <Head>
    <tr>
      <HeadRow>Type</HeadRow>
      <HeadRow>Amount</HeadRow>
      <HeadRow>Currency</HeadRow>
    </tr>
  </Head>
        {
            items.map(item => <TransactionHistoryItem key={item.id} type={item.type} amount={ item.amount} currency ={item.currency} />)
    }
  
</Table>
}

