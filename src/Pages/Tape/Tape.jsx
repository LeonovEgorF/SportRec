import LiveBroadCast from "../../Components/LiveBroadCast/LiveBroadCast";
import OrganizationDescription from "../../Components/OraganizationDesription/OrganizationDescription";
import org from "../../mock/organization.json";
import "./Tape.scss";

export default function Tape() {
  const { liveBroadcast } = org;

  return (
    <div className="tape">
      <div className="tape__container-boxLive">
        {liveBroadcast && <LiveBroadCast />}
      </div>

      <div className="wrapperContetnt">
        <div className="content">
          <OrganizationDescription {...org} />
        </div>

        <div className="asside"></div>
      </div>
    </div>
  );
}
