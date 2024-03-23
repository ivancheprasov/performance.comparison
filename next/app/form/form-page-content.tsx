'use client';

import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
import Api from 'shared-module/src/api/api';
import SignInForm from "shared-module/src/components/sign-in-form";
import { NotificationTypes } from 'shared-module/src/types/notification';
import { UserFormValues } from "shared-module/src/types/user";
import { capitalizeFirstLetter } from 'shared-module/src/utils/string';

export default function FormPageContent() {
  const [api, contextHolder] = notification.useNotification();

  function openNotification(type: NotificationTypes) {
    api[type]({ message: capitalizeFirstLetter(type) });
  }

  const { mutate: signIn, isPending: isSigningIn } = useMutation({
    mutationKey: ['signIn'],
    mutationFn: Api.signIn,
    onSuccess: () => openNotification(NotificationTypes.Success),
    onError: () => openNotification(NotificationTypes.Error),
  });

  function handleSubmit(values: UserFormValues) {
    signIn(values);
  }

  return (
    <main>
      {contextHolder}
      <SignInForm onSubmit={handleSubmit} isSubmitting={isSigningIn}/>
    </main>
  );
}
