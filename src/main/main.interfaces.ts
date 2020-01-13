import { RouteComponentProps } from 'react-router-dom';
import { History } from 'history';

export interface MainListProps extends RouteComponentProps<any> {
    item: mainPageData,
    // history: any,
    // location: any,
    // match: any
     
}
export interface mainPageData {
    title: string,
    imageUrl: string,
    id: number,
    linkUrl: string,
    size?: string
}  


// interface ChildComponentProps extends RouteComponentProps<any> {
//   /* other props for ChildComponent */
// }
// const ChildComponent : React.SFC<ChildComponentProps> = ({ history }) => (
  
// );