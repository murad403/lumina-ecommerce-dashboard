"use client"
import StoreInformation from "./StoreInformation"
import Notifications from "./Notifications"
import StoreSettings from "./StoreSettings"
import DangerZone from "./DangerZone"

const AdminSettings = () => {
  return (
    <div className="space-y-6">
      <StoreInformation></StoreInformation>

      <Notifications></Notifications>

      <StoreSettings></StoreSettings>

      <DangerZone></DangerZone>
    </div>
  )
}

export default AdminSettings;  