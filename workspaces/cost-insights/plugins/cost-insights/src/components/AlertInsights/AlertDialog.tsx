/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useEffect, useRef, useState } from 'react';
import { capitalize } from '@material-ui/core/utils';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import DialogContent from '@material-ui/core/DialogContent';
import { Text } from '@backstage/ui';
import { RiCloseLine } from '@remixicon/react';
import { useAlertDialogStyles as useStyles } from '../../utils/styles';
import { AlertItem, AlertStatus } from '../../types';
import { Maybe } from '@backstage-community/plugin-cost-insights-common';
import { choose, formOf } from '../../utils/alerts';

const DEFAULT_FORM_ID = 'alert-form';

type AlertDialogProps = {
  open: boolean;
  group: string;
  alert: Maybe<AlertItem>;
  status: Maybe<AlertStatus>;
  onClose: () => void;
  onSubmit: (data: any) => void;
};

export const AlertDialog = ({
  open,
  group,
  alert,
  status,
  onClose,
  onSubmit,
}: AlertDialogProps) => {
  const classes = useStyles();
  const [isSubmitDisabled, setSubmitDisabled] = useState(true);
  const formRef = useRef<Maybe<HTMLFormElement>>(null);

  useEffect(() => {
    setSubmitDisabled(open);
  }, [open]);

  function disableSubmit(isDisabled: boolean) {
    setSubmitDisabled(isDisabled);
  }

  function onDialogClose() {
    onClose();
    setSubmitDisabled(true);
  }

  const [action, actioned] = choose(
    status,
    [
      ['snooze', 'snoozed'],
      ['accept', 'accepted'],
      ['dismiss', 'dismissed'],
    ],
    ['', ''],
  );

  const TransitionProps = {
    mountOnEnter: true,
    unmountOnExit: true,
    onEntered() {
      if (formRef.current) {
        formRef.current.id = DEFAULT_FORM_ID;
      }
    },
  };

  const Form = formOf(alert, status);

  return (
    <Dialog
      open={open}
      onClose={onDialogClose}
      scroll="body"
      maxWidth="lg"
      TransitionProps={TransitionProps}
    >
      <Box display="flex" justifyContent="flex-end">
        <IconButton
          className={classes.icon}
          disableRipple
          aria-label="Close"
          onClick={onDialogClose}
        >
          <RiCloseLine />
        </IconButton>
      </Box>
      <DialogContent className={classes.content}>
        <Box mb={1.5}>
          <Text as="h5" variant="title-small">
            <b>{capitalize(action)} this action item?</b>
          </Text>
          <Text as="h6" variant="title-x-small" color="secondary">
            <b>
              This action item will be {actioned} for all of {group}.
            </b>
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          bgcolor="alertBackground"
          p={2}
          mb={1.5}
          borderRadius={4}
        >
          <Text>
            <b>{alert?.title}</b>
          </Text>
          <Text color="secondary">{alert?.subtitle}</Text>
        </Box>
        {Form && (
          <Form
            ref={formRef}
            alert={alert}
            onSubmit={onSubmit}
            disableSubmit={disableSubmit}
          />
        )}
      </DialogContent>
      <Divider />
      <DialogActions className={classes.actions} disableSpacing>
        {Form ? (
          <Button
            type="submit"
            color="primary"
            variant="contained"
            aria-label={action}
            form={DEFAULT_FORM_ID}
            disabled={isSubmitDisabled}
          >
            {capitalize(action)}
          </Button>
        ) : (
          <Button
            type="button"
            color="primary"
            variant="contained"
            aria-label={action}
            onClick={() => onSubmit(null)}
          >
            {capitalize(action)}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};
