import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  docsRoute(this, function () {
    this.route('getting-started', { path: '/' }, function () {
      this.route('overview');
      this.route('runtime-requirements');
      this.route('quickstart');
    });
    this.route('guide', function () {
      this.route('asynchronously-loading-translations');
      this.route('service-api');
      this.route('missing-translations');
      this.route('testing');
      this.route('translating-text');
    });
    this.route('helpers', function () {
      this.route('t');
      this.route('format-date');
      this.route('format-message');
      this.route('format-number');
      this.route('format-relative');
      this.route('format-time');
    });
    this.route('cookbook', function () {
      this.route('migration-4-0-to-5-0');
      this.route('common-errors');
    });
    this.route('advanced', function () {
      this.route('addon-support');
      this.route('engine-support');
    });
    this.route('integrations', function () {
      this.route('ember-cp-validation');
      this.route('visual-studio-code');
    });
    this.route('legacy', function () {
      this.route('migration-3-0-to-4-0');
      this.route('migration-2-0-to-3-0');
      this.route('v2');
    });
  });
  this.route('smoke');
});

export default Router;
