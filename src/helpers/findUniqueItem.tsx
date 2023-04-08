


export const findUniqueItems = (acc:any[], i:any) => {
            if (acc.find(el => el.props.label === i.props.label)) {
              acc.push(i);
            }
            return acc;
          }

