import { Fragment } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

const TableSkeleton = () => {
  return (
    <Fragment>
      <tr>
        <td>
          <Skeleton width={100} />
        </td>
        <td>
          <Skeleton width={100} />
        </td>
        <td>
          <Skeleton width={100} />
        </td>
        <td>
          <Skeleton width={100} />
        </td>
        <td>
          <Skeleton width={100} />
        </td>
        <td>
          <Skeleton width={100} />
        </td>
        <td>
          <Skeleton width={100} />
        </td>
      </tr>
      <tr>
        <td>
          <Skeleton width={100} />
        </td>
        <td>
          <Skeleton width={100} />
        </td>
        <td>
          <Skeleton width={100} />
        </td>
        <td>
          <Skeleton width={100} />
        </td>
        <td>
          <Skeleton width={100} />
        </td>
        <td>
          <Skeleton width={100} />
        </td>
        <td>
          <Skeleton width={100} />
        </td>
      </tr>
    </Fragment>
  );
};

export default TableSkeleton;
