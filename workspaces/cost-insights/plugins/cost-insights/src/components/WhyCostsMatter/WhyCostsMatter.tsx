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

import { Text } from '@backstage/ui';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

export const WhyCostsMatter = () => {
  return (
    <Box mt={10} mb={4}>
      <Container maxWidth="md">
        <Box mt={2} mb={2}>
          <Text as="h5" variant="title-small" style={{ textAlign: 'center' }}>
            Why cloud costs matter
          </Text>
        </Box>
        <Grid container alignContent="space-around" spacing={3} wrap="nowrap">
          <Grid item>
            <Text as="h6" variant="title-x-small">
              Sustainability{' '}
              <Text role="img" aria-label="globe">
                🌎
              </Text>
            </Text>
            <Text>Reducing cloud usage improves our carbon footprint.</Text>
          </Grid>
          <Grid item>
            <Divider orientation="vertical" />
          </Grid>
          <Grid item>
            <Text as="h6" variant="title-x-small">
              Revenue{' '}
              <Text role="img" aria-label="money-with-wings">
                💸
              </Text>
            </Text>
            <Text>
              Keeping cloud costs well-tuned prevents infrastructure from eating
              into revenue.
            </Text>
          </Grid>
          <Grid item>
            <Divider orientation="vertical" />
          </Grid>
          <Grid item>
            <Text as="h6" variant="title-x-small">
              Innovation{' '}
              <Text role="img" aria-label="medal">
                🥇
              </Text>
            </Text>
            <Text>
              The more we save, the more we can reinvest in speed and
              innovation.
            </Text>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
