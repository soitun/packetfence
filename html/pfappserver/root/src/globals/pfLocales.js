export const pfLocales = [
  'en_US',
  'de_DE',
  'es_ES',
  'fr_CA',
  'fr_FR',
  'he_IL',
  'it_IT',
  'nb_NO',
  'nl_NL',
  'pl_PL',
  'pt_BR'
]

export const pfLocalesList = pfLocales.map(locale => { return { text: locale, value: locale } })

export const localeStrings = {
  SERVICES_DISABLED_SUCCESS: 'Disabled services {services}.', // i18n defer
  SERVICES_DISABLED_ERROR: 'Failed to disable services {services}. See the server error logs for more information.', // i18n defer
  SERVICES_PROTECTED_DISABLED_ERROR: 'Failed to disable services {services}. This service is required for this page to function and CLI access may be required to remediate any issues caused by the failure. See the server error logs for more information.', // i18n defer

  SERVICES_ENABLED_SUCCESS: 'Enabled services {services}.', // i18n defer
  SERVICES_ENABLED_ERROR: 'Failed to enable services {services}. See the server error logs for more information.', // i18n defer
  SERVICES_PROTECTED_ENABLED_ERROR: 'Failed to enable services {services}. This service is required for this page to function and CLI access may be required to remediate any issues caused by the failure. See the server error logs for more information.', // i18n defer

  SERVICES_RESTARTED_SUCCESS: 'Restarted services {services}.', // i18n defer
  SERVICES_RESTARTED_ERROR: 'Failed to restart services {services}. See the server error logs for more information.', // i18n defer
  SERVICES_PROTECTED_RESTARTED_ERROR: 'Failed to restart services {services}. This service is required for this page to function and CLI access may be required to remediate any issues caused by the failure. See the server error logs for more information.', // i18n defer

  SERVICES_STARTED_SUCCESS: 'Started services {services}.', // i18n defer
  SERVICES_STARTED_ERROR: 'Failed to start services {services}. See the server error logs for more information.', // i18n defer

  SERVICES_STOPPED_SUCCESS: 'Stopped services {services}.', // i18n defer
  SERVICES_STOPPED_ERROR: 'Failed to stop services {services}. See the server error logs for more information.', // i18n defer

  SYSTEMD_UPDATED_SUCCESS: 'Updated systemd for {service}.', // i18n defer
  SYSTEMD_UPDATED_ERROR: 'Failed to update systemd for {service}. See the server error logs for more information.', // i18n defer

  SERVICES_K8S_RESTARTED_SUCCESS: 'Restarted services {services}.', // i18n defer
  SERVICES_K8S_RESTARTED_ERROR: 'Failed to restart services {services}. See the server error logs for more information.', // i18n defer
}
