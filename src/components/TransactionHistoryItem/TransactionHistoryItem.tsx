import { ITransaction } from "types/appTypes";
import { TableData } from "./TransactionHistoryItem.styled";

export const TransactionHistoryItem:React.FC<Pick<ITransaction, 'type'|'amount'|'currency'>> = ({type, amount, currency})=> {
    return <tbody>
    <tr>
        <TableData>{ type}</TableData>
        <TableData>{ amount}</TableData>
        <TableData>{ currency}</TableData>
    </tr>
  </tbody>
}

