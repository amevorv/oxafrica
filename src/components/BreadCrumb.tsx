import { Breadcrumb } from "react-bootstrap"
import { Link } from "react-router-dom"

export const BreadCrumb = (props: { target: string }) => {
  return (
    <Breadcrumb id="breadcrumb">
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{props.target}</Breadcrumb.Item>
    </Breadcrumb>
  )
}