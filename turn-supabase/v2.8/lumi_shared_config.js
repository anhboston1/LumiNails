/* Lumi Shared Config v2
   Keep this file in the same folder as Admin, Front Desk, and Lumi Grid.
   This file owns Supabase connection + shared business constants. */
(function () {
  const cfg = {
    APP: {
      BRAND: 'Lumi Nails',
      TIMEZONE: 'America/New_York'
    },

    SUPABASE: {
      URL: 'https://fvnfyimfdhlxkkuicdlc.supabase.co',
      ANON_KEY: 'sb_publishable_wbIl0R3YcMCmmlbbc1uX7A_AyF5huy2'
    },

    TABLES: {
      USERS: 'app_users',
      TECHNICIANS: 'technicians',
      SERVICE_GROUPS: 'service_groups',
      SERVICES: 'services',
      QUEUE: 'queue_entries',
      TURN_TRANSACTIONS: 'turn_transactions',
      TURN_SETTINGS: 'turn_settings',
      STAFF_DAILY_STATUS: 'staff_daily_status',
      APP_SETTINGS: 'app_settings',
      AUDIT_LOG: 'audit_log'
    },

    ROLES: {
      OWNER: 'owner',
      MANAGER: 'manager',
      STAFF: 'staff',
      RECEPTIONIST: 'receptionist',
      FRONTDESK: 'frontdesk',
      FRONT_DESK: 'front_desk'
    },

    STAFF_STATUS: {
      READY: 'ready',
      BUSY: 'busy',
      COOLDOWN: 'cooldown',
      BREAK: 'break',
      OFF: 'off'
    },

    STAFF_STATUS_LABELS: {
      ready: 'Available',
      busy: 'Serving',
      cooldown: 'Refreshing',
      break: 'Break',
      off: 'Off'
    },

    STAFF_STATUS_CLASSES: {
      ready: 'available',
      busy: 'serving',
      cooldown: 'refreshing',
      break: 'break',
      off: 'off'
    },

    QUEUE_STATUS: {
      WAITING: 'waiting',
      ASSIGNED: 'assigned',
      SERVING: 'serving',
      STARTED: 'started',
      IN_SERVICE: 'in_service',
      COMPLETED: 'completed',
      CANCELLED: 'cancelled',
      NO_SHOW: 'no_show'
    },

    VISIT_TYPE: {
      WALK_IN: 'walk_in',
      WALKIN: 'walkin',
      APPOINTMENT: 'appointment',
      APPT: 'appt'
    },

    REQUEST_TYPE: {
      ANY_TECH: 'walkin',
      REQUESTED: 'requested'
    },

    PRIORITY_TAGS: {
      NONE: 'none',
      VIP: 'vip',
      OWNER: 'owner',
      FIX: 'fix',
      REDO: 'redo'
    },

    SKILLS: {
      ALL_SERVICES: 'all_services'
    },

    COMBO: {
      GROUP_KEY: '__combo__',
      GROUP_NAME: 'Combo / Multiple Services',
      DISPLAY_ORDER: 999999
    },



    AUTO_ASSIGN: {
      APPOINTMENT_ON_TIME_WINDOW_MIN: 10,
      APPOINTMENT_EARLY_GRACE_MIN: 15,
      APPOINTMENT_LATE_GRACE_MIN: 15,
      REQUESTED_AUTO_FLEX_AFTER_MIN: 15,
      SCORES: {
        VIP: 100,
        OWNER: 100,
        FIX: 100,
        REDO: 100,
        APPOINTMENT_ON_TIME: 60,
        REQUESTED: 30,
        WAIT_30: 40,
        WAIT_20: 25,
        WAIT_15: 15,
        REQUESTED_FLEXIBLE: 10,
        LATE_APPOINTMENT: -5
      }
    },
    DEFAULT_TURN_SETTINGS: {
      simple_mode: true,
      requested_threshold: 65,
      requested_below_turn: 0.5,
      requested_at_or_above_turn: 1,
      walk_in_turn: 1
    },

    TIMING: {
      SMART_READY_DELAY_MS: 8000
    },

    STORAGE_KEYS: {
      FRONT_DESK_AUTO_FLOW: 'lumi-frontdesk-auto-flow',
      FRONT_DESK_SESSION: 'lumi-frontdesk-session-supabase',
      GRID_NEXT_HERO_VISIBLE: 'lumi-grid-show-next-hero',
      GRID_TURN_TOTALS: 'lumi-grid-turn-totals'
    },

    FRONT_DESK_ALLOWED_ROLES: ['owner', 'manager', 'receptionist', 'frontdesk', 'front_desk'],

    // Temporary migration support only. New records should use service_group_id/service_id from DB.
    LEGACY_SERVICE_GROUPS: [
      { key: 'mani', label: 'Mani' },
      { key: 'dip_powder', label: 'Dip Powder' },
      { key: 'g_hybrid_gel', label: 'G-Hybrid Gel' },
      { key: 'gel_x', label: 'Gel-X' },
      { key: 'pedi', label: 'Pedi' },
      { key: 'gel_pedi', label: 'Gel Pedi' },
      { key: 'combo', label: 'Combo' }
    ],

    staffStatusLabel(status) {
      return this.STAFF_STATUS_LABELS[String(status || '').toLowerCase()] || status || '';
    },

    staffStatusClass(status) {
      return this.STAFF_STATUS_CLASSES[String(status || '').toLowerCase()] || 'unknown';
    },

    serviceLabelFromLegacyKey(key) {
      return this.LEGACY_SERVICE_GROUPS.find(g => g.key === key)?.label || key;
    },

    isFrontDeskRole(role) {
      return this.FRONT_DESK_ALLOWED_ROLES.includes(String(role || '').toLowerCase());
    },

    isActiveQueueStatus(status) {
      return [this.QUEUE_STATUS.ASSIGNED, this.QUEUE_STATUS.SERVING, this.QUEUE_STATUS.STARTED, this.QUEUE_STATUS.IN_SERVICE].includes(status);
    }
  };

  window.LUMI_CONFIG = Object.freeze(cfg);

  if (!window.supabase) {
    throw new Error('Supabase library is not loaded. Load @supabase/supabase-js before lumi_shared_config.js.');
  }

  window.supabaseClient = window.supabase.createClient(
    cfg.SUPABASE.URL,
    cfg.SUPABASE.ANON_KEY
  );
})();
