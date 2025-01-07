import { Hono } from 'hono';

import { COMPANY } from '../../../constants/company';
import { CONTACT } from '../../../constants/contact';
import { OVERVIEW } from '../../../constants/overview';
import { QUESTION } from '../../../constants/question';
import { TERM } from '../../../constants/term';

const app = new Hono();

app.get('/api/v1/consts/company', (c) => c.text(COMPANY));
app.get('/api/v1/consts/contact', (c) => c.text(CONTACT));
app.get('/api/v1/consts/overview', (c) => c.text(OVERVIEW));
app.get('/api/v1/consts/question', (c) => c.text(QUESTION));
app.get('/api/v1/consts/term', (c) => c.text(TERM));

export { app as constantApp };
