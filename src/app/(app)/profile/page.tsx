"use client"
import type React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Lock, CheckCircle2, XCircle, Camera } from "lucide-react"
import { useAdminAuth } from "@/hooks/user-admin-auth"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { passwordSchema, profileSchema } from "@/validation/validation"

type ProfileFormData = z.infer<typeof profileSchema>
type PasswordFormData = z.infer<typeof passwordSchema>

const AdminProfilePage = () => {
  const { admin, updateProfile, changePassword } = useAdminAuth()
  const [avatar, setAvatar] = useState(admin?.avatar || "")
  const [profileMessage, setProfileMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [passwordMessage, setPasswordMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  // Profile Form
  const { register: registerProfile, handleSubmit: handleSubmitProfile, formState: { errors: profileErrors }, setValue: setProfileValue,} = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema)
  })
  // Password Form
  const { register: registerPassword, handleSubmit: handleSubmitPassword, formState: { errors: passwordErrors }, reset: resetPasswordForm,} = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
  })

  // Set profile values when admin data is available
  useEffect(() => {
    if (admin) {
      setProfileValue("name", admin.name || "")
      setProfileValue("email", admin.email || "")
      setProfileValue("phone", admin.phone || "")
    }
  }, [admin, setProfileValue])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setAvatar(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const onProfileSubmit = (data: ProfileFormData) => {
    updateProfile({ ...data, avatar })
    console.log(data, avatar)
    setProfileMessage({ type: "success", text: "Profile updated successfully!" })
    setTimeout(() => setProfileMessage(null), 3000)
  }

  const onPasswordSubmit = async (data: PasswordFormData) => {
    setPasswordMessage(null)
    const success = await changePassword(data.currentPassword, data.newPassword)
    if (success) {
      setPasswordMessage({ type: "success", text: "Password changed successfully!" })
      resetPasswordForm()
    } else {
      setPasswordMessage({ type: "error", text: "Current password is incorrect" })
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Admin Profile</h2>
        <p className="text-muted-foreground">Manage your admin account settings</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile">
            <User className="h-4 w-4 mr-2" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="password">
            <Lock className="h-4 w-4 mr-2" />
            Password
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your admin profile details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {profileMessage && (
                <Alert variant={profileMessage.type === "success" ? "default" : "destructive"}>
                  {profileMessage.type === "success" ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <XCircle className="h-4 w-4" />
                  )}
                  <AlertDescription>{profileMessage.text}</AlertDescription>
                </Alert>
              )}

              <div className="flex items-center gap-6">
                <div className="relative">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={avatar || "/placeholder.svg"} />
                    <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                      {admin?.name && admin.name.length > 0 ? admin.name.substring(0, 2).toUpperCase() : "AD"}
                    </AvatarFallback>
                  </Avatar>
                  <label
                    htmlFor="avatar-upload"
                    className="absolute bottom-0 right-0 bg-primary text-primary-foreground rounded-full p-2 cursor-pointer hover:bg-primary/90 transition-colors shadow-lg"
                  >
                    <Camera className="h-4 w-4" />
                    <input
                      id="avatar-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </label>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{admin?.name || "Admin"}</h3>
                  <p className="text-sm text-muted-foreground">{admin?.role || "Administrator"}</p>
                  <p className="text-xs text-muted-foreground mt-1">Click camera icon to upload profile picture</p>
                </div>
              </div>

              <form onSubmit={handleSubmitProfile(onProfileSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    {...registerProfile("name")}
                  />
                  {profileErrors.name && (
                    <p className="text-xs text-red-500">{profileErrors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    {...registerProfile("email")}
                  />
                  {profileErrors.email && (
                    <p className="text-xs text-red-500">{profileErrors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    {...registerProfile("phone")}
                  />
                  {profileErrors.phone && (
                    <p className="text-xs text-red-500">{profileErrors.phone.message}</p>
                  )}
                </div>

                <Button type="submit">Save Changes</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>Update your admin password</CardDescription>
            </CardHeader>
            <CardContent>
              {passwordMessage && (
                <Alert variant={passwordMessage.type === "success" ? "default" : "destructive"} className="mb-6">
                  {passwordMessage.type === "success" ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <XCircle className="h-4 w-4" />
                  )}
                  <AlertDescription>{passwordMessage.text}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmitPassword(onPasswordSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input
                    id="current-password"
                    type="password"
                    placeholder="Enter current password"
                    {...registerPassword("currentPassword")}
                  />
                  {passwordErrors.currentPassword && (
                    <p className="text-xs text-red-500">{passwordErrors.currentPassword.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input
                    id="new-password"
                    type="password"
                    placeholder="Enter new password"
                    {...registerPassword("newPassword")}
                  />
                  {passwordErrors.newPassword && (
                    <p className="text-xs text-red-500">{passwordErrors.newPassword.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="Confirm new password"
                    {...registerPassword("confirmPassword")}
                  />
                  {passwordErrors.confirmPassword && (
                    <p className="text-xs text-red-500">{passwordErrors.confirmPassword.message}</p>
                  )}
                </div>

                <Button type="submit">Change Password</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default AdminProfilePage