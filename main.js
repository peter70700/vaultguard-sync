/*
  VaultGuard Plugin
  Enterprise vault security with permission-aware encrypted cloud sync.
  THIS IS A GENERATED FILE - DO NOT EDIT DIRECTLY
*/
"use strict";var It=Object.defineProperty;var ai=Object.getOwnPropertyDescriptor;var ni=Object.getOwnPropertyNames;var oi=Object.prototype.hasOwnProperty;var li=(h,i)=>()=>(h&&(i=h(h=0)),i);var dr=(h,i)=>{for(var e in i)It(h,e,{get:i[e],enumerable:!0})},ci=(h,i,e,t)=>{if(i&&typeof i=="object"||typeof i=="function")for(let r of ni(i))!oi.call(h,r)&&r!==e&&It(h,r,{get:()=>i[r],enumerable:!(t=ai(i,r))||t.enumerable});return h};var di=h=>ci(It({},"__esModule",{value:!0}),h);var Zr={};dr(Zr,{VaultPickerModal:()=>ar});var ye,ar,ei=li(()=>{"use strict";ye=require("obsidian"),ar=class extends ye.Modal{constructor(e,t,r,s){super(e);this.listEl=null;this.errorEl=null;this.busy=!1;this.apiClient=t,this.options=r,this.onPick=s}onOpen(){let{contentEl:e}=this;if(e.empty(),this.modalEl.addClass("vaultguard-vault-picker-modal"),e.addClass("vaultguard-vault-picker-content"),e.createEl("h2",{text:"Bind to a VaultGuard vault",cls:"vaultguard-modal-title"}),e.createEl("p",{text:"This Obsidian folder needs to be linked to a server-side vault. Pick one you already belong to, or create a new one.",cls:"vaultguard-modal-description"}),this.errorEl=e.createDiv({cls:"vaultguard-vault-picker-error"}),this.errorEl.style.display="none",e.createEl("h3",{text:"Pick an existing vault",cls:"vaultguard-modal-section-title"}),this.listEl=e.createDiv({cls:"vaultguard-vault-picker-list"}),this.listEl.createEl("p",{text:"Loading...",cls:"setting-item-description"}),this.loadVaults(),this.options.canCreateVaults){e.createEl("hr",{cls:"vaultguard-modal-divider"}),e.createEl("h3",{text:"Or create a new vault",cls:"vaultguard-modal-section-title"});let t=e.createDiv({cls:"vaultguard-vault-picker-create"});t.createEl("label",{text:"Name",cls:"vaultguard-field-label"});let r=t.createEl("input",{cls:"vaultguard-field-input",attr:{type:"text",placeholder:this.options.suggestedName}});r.value=this.options.suggestedName,t.createEl("label",{text:"Description (optional)",cls:"vaultguard-field-label"});let s=t.createEl("textarea",{cls:"vaultguard-field-input vaultguard-vault-picker-textarea",attr:{rows:"2",placeholder:"e.g. Engineering team handbook"}});t.createEl("label",{text:"Kind",cls:"vaultguard-field-label"});let a=t.createEl("select",{cls:"vaultguard-field-input"});for(let[l,c]of[["team","Team"],["personal","Personal"],["shared","Shared"]])a.createEl("option",{text:c,value:l});a.value="team",t.createEl("label",{text:"Default role for new members",cls:"vaultguard-field-label"});let n=t.createEl("select",{cls:"vaultguard-field-input"});for(let[l,c]of[["viewer","Viewer (read only)"],["editor","Editor (read + write)"],["admin","Admin (full control)"]])n.createEl("option",{text:c,value:l});n.value="editor";let o=t.createDiv({cls:"vaultguard-vault-picker-create-actions"});new ye.ButtonComponent(o).setButtonText("Create vault").setCta().onClick(async()=>{let l=r.value.trim();if(!l){this.showError("Vault name is required.");return}this.showError(""),await this.createVault(l,s.value.trim(),a.value,n.value)})}else e.createEl("p",{text:"Need a new vault? Ask an organization admin to create one and add you as a member.",cls:"vaultguard-modal-note"})}onClose(){this.modalEl.removeClass("vaultguard-vault-picker-modal"),this.contentEl.removeClass("vaultguard-vault-picker-content"),this.contentEl.empty()}showError(e){this.errorEl&&(e?(this.errorEl.setText(e),this.errorEl.style.display=""):this.errorEl.style.display="none")}async loadVaults(){if(this.listEl)try{let e=await this.apiClient.listVaults();this.renderVaultList(e)}catch(e){let t=e instanceof Error?e.message:"Failed to load vaults";this.listEl.empty(),this.listEl.createEl("p",{text:`Could not load your vaults: ${t}`,cls:"setting-item-description"})}}renderVaultList(e){if(!this.listEl)return;this.listEl.empty();let t=e.filter(r=>!r.archived);if(t.length===0){this.listEl.createEl("p",{text:"You don't belong to any vaults yet.",cls:"setting-item-description"});return}for(let r of t){let s=this.listEl.createDiv({cls:"vaultguard-vault-picker-row"}),a=s.createDiv({cls:"vaultguard-vault-picker-info"});a.createEl("strong",{text:r.name,cls:"vaultguard-vault-picker-name"}),a.createEl("div",{text:`${r.kind} - ${r.slug}`,cls:"vaultguard-vault-picker-meta"}),new ye.ButtonComponent(s).setButtonText("Select").onClick(async()=>{await this.pick({vaultId:r.vaultId,name:r.name,slug:r.slug})})}}async pick(e){if(!this.busy){this.busy=!0;try{await this.onPick(e),new ye.Notice(`VaultGuard: bound to "${e.name}"`),this.close()}catch(t){this.showError(t instanceof Error?t.message:"Could not bind to vault")}finally{this.busy=!1}}}async createVault(e,t,r,s){if(!this.busy){this.busy=!0;try{let a=await this.apiClient.createVault({name:e,...t?{description:t}:{},kind:r,defaultRole:s});await this.onPick({vaultId:a.vaultId,name:a.name,slug:a.slug}),new ye.Notice(`VaultGuard: created and bound to "${a.name}"`),this.close()}catch(a){this.showError(a instanceof Error?a.message:"Could not create vault")}finally{this.busy=!1}}}}});var Ts={};dr(Ts,{default:()=>Lt});module.exports=di(Ts);var b=require("obsidian");var Mt=`/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   VaultGuard \u2014 Plugin Styles
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

/* \u2500\u2500\u2500 Shared Modal Reset \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* All vaultguard modals apply their class to modalEl (the outer .modal).
   This reset overrides Obsidian's default padding so we have full control. */

.modal.vaultguard-admin-modal,
.modal.vaultguard-at-rest-recovery-modal,
.modal.vaultguard-at-rest-restore-modal,
.modal.vaultguard-dialog-modal,
.modal.vaultguard-login-modal,
.modal.vaultguard-mfa-setup-modal,
.modal.vaultguard-permission-rule-modal,
.modal.vaultguard-reconciliation-modal,
.modal.vaultguard-vault-picker-modal,
.modal.vaultguard-revoke-modal {
  padding: 0 !important;
  margin: 0 !important;
}

.modal.vaultguard-admin-modal .modal-content,
.modal.vaultguard-at-rest-recovery-modal .modal-content,
.modal.vaultguard-at-rest-restore-modal .modal-content,
.modal.vaultguard-dialog-modal .modal-content,
.modal.vaultguard-login-modal .modal-content,
.modal.vaultguard-mfa-setup-modal .modal-content,
.modal.vaultguard-permission-rule-modal .modal-content,
.modal.vaultguard-reconciliation-modal .modal-content,
.modal.vaultguard-vault-picker-modal .modal-content,
.modal.vaultguard-revoke-modal .modal-content,
.vaultguard-admin-modal-content,
.vaultguard-dialog-content,
.vaultguard-mfa-setup-content,
.vaultguard-reconciliation-content,
.vaultguard-vault-picker-content,
.vaultguard-login-modal-content {
  width: 100% !important;
  max-width: 100% !important;
  box-sizing: border-box;
  margin: 0 !important;
}

.vaultguard-modal-title {
  margin: 0 0 6px;
  font-size: 1.25em;
  font-weight: 700;
  line-height: 1.25;
  color: var(--text-normal);
}

.vaultguard-modal-description,
.vaultguard-modal-note {
  margin: 0 0 18px;
  color: var(--text-muted);
  font-size: 0.9em;
  line-height: 1.45;
}

.vaultguard-modal-section-title {
  margin: 18px 0 10px;
  font-size: 0.98em;
  font-weight: 700;
  color: var(--text-normal);
}

.vaultguard-modal-divider {
  margin: 18px 0 0;
  border: 0;
  border-top: 1px solid var(--background-modifier-border);
}

.modal.vaultguard-dialog-modal {
  width: 560px !important;
  max-width: calc(100vw - 32px) !important;
  max-height: calc(100vh - 48px) !important;
}

.modal.vaultguard-dialog-modal .modal-content,
.vaultguard-dialog-content {
  padding: 22px 24px 18px !important;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: calc(100vh - 64px);
}

/* \u2500\u2500\u2500 Admin Modal \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.modal.vaultguard-admin-modal {
  width: 820px !important;
  max-width: 92vw !important;
  max-height: 85vh;
}

.modal.vaultguard-admin-modal .modal-content,
.vaultguard-admin-modal-content {
  padding: 24px 28px 20px !important;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.vaultguard-admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  flex-shrink: 0;
}

.vaultguard-admin-header h2 {
  margin: 0;
  font-size: 1.25em;
  font-weight: 700;
}

/* \u2500\u2500\u2500 Connection Status \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-connection-status {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.82em;
  padding: 4px 10px;
  border-radius: 12px;
  background-color: var(--background-secondary);
}

.vaultguard-status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}

.vaultguard-status-online {
  background-color: var(--color-green);
  box-shadow: 0 0 4px var(--color-green);
}

.vaultguard-status-offline {
  background-color: var(--color-red);
}

.vaultguard-status-text {
  color: var(--text-muted);
}

/* \u2500\u2500\u2500 Tab Navigation \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-tab-nav {
  display: flex;
  gap: 2px;
  border-bottom: 1px solid var(--background-modifier-border);
  margin-bottom: 16px;
  padding-bottom: 0;
  flex-shrink: 0;
}

.vaultguard-tab {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  color: var(--text-muted);
  font-size: 0.88em;
  font-weight: 500;
  transition: color 0.15s, border-color 0.15s, background-color 0.15s;
  border-radius: 4px 4px 0 0;
  user-select: none;
}

.vaultguard-tab:hover {
  color: var(--text-normal);
  background-color: var(--background-modifier-hover);
}

.vaultguard-tab-active {
  color: var(--interactive-accent);
  border-bottom-color: var(--interactive-accent);
  font-weight: 600;
}

.vaultguard-tab-icon {
  display: flex;
  align-items: center;
}

.vaultguard-tab-icon svg {
  width: 15px;
  height: 15px;
}

.vaultguard-tab-content {
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
  min-height: 0;
  padding-right: 4px;
}

/* Scrollbar styling for tab content */
.vaultguard-tab-content::-webkit-scrollbar {
  width: 6px;
}

.vaultguard-tab-content::-webkit-scrollbar-thumb {
  background-color: var(--background-modifier-border);
  border-radius: 3px;
}

.vaultguard-tab-content::-webkit-scrollbar-thumb:hover {
  background-color: var(--text-faint);
}

/* \u2500\u2500\u2500 Toolbar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.vaultguard-search-input {
  min-width: 200px;
}

.vaultguard-date-input {
  max-width: 150px;
}

/* \u2500\u2500\u2500 Loading / Empty / Error States \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 16px;
  color: var(--text-muted);
  font-size: 0.9em;
}

.vaultguard-empty-state {
  text-align: center;
  padding: 40px 16px;
  color: var(--text-muted);
  font-size: 0.9em;
  line-height: 1.5;
}

.vaultguard-info-callout {
  margin: 0 0 16px;
  padding: 10px 12px;
  border-radius: 6px;
  background-color: var(--background-secondary);
  border-left: 3px solid var(--interactive-accent);
  color: var(--text-muted);
  font-size: 0.86em;
  line-height: 1.5;
}

.vaultguard-admin-tab-description {
  margin: -4px 0 14px;
}

/* Error: visible text on translucent red \u2014 works in light and dark themes */
.vaultguard-error {
  padding: 12px 16px;
  color: var(--text-normal);
  background-color: rgba(255, 50, 50, 0.1);
  border-radius: 6px;
  border-left: 3px solid var(--color-red, #e03e3e);
  font-size: 0.9em;
  line-height: 1.4;
}

/* \u2500\u2500\u2500 User List \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-user-summary {
  display: flex;
  gap: 16px;
  margin-bottom: 14px;
  padding: 10px 14px;
  background-color: var(--background-secondary);
  border-radius: 6px;
  font-size: 0.84em;
  font-weight: 500;
}

.vaultguard-summary-stat {
  color: var(--text-muted);
}

.vaultguard-stat-active {
  color: var(--color-green);
}

.vaultguard-stat-suspended {
  color: var(--color-orange);
}

.vaultguard-stat-pending {
  color: var(--color-blue);
}

.vaultguard-user-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-bottom: 1px solid var(--background-modifier-border);
  transition: background-color 0.1s;
}

.vaultguard-user-item:last-child {
  border-bottom: none;
}

.vaultguard-user-item:hover {
  background-color: var(--background-modifier-hover);
  border-radius: 4px;
}

.vaultguard-user-info {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  min-width: 0;
}

.vaultguard-user-avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: var(--interactive-accent);
  color: var(--text-on-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75em;
  font-weight: 600;
  flex-shrink: 0;
  letter-spacing: 0.02em;
}

.vaultguard-user-details {
  min-width: 0;
}

.vaultguard-user-name {
  font-weight: 600;
  font-size: 0.93em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.vaultguard-user-email {
  font-size: 0.82em;
  color: var(--text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.vaultguard-user-badges {
  display: flex;
  gap: 5px;
  flex-shrink: 0;
  flex-wrap: wrap;
}

.vaultguard-user-meta {
  font-size: 0.78em;
  color: var(--text-muted);
  text-align: right;
  flex-shrink: 0;
  line-height: 1.5;
}

.vaultguard-user-actions {
  display: flex;
  gap: 2px;
  flex-shrink: 0;
}

/* \u2500\u2500\u2500 Badge Styles \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-status-badge,
.vaultguard-role-badge,
.vaultguard-mfa-badge,
.vaultguard-permission-badge,
.vaultguard-action-badge {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 0.72em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
}

.vaultguard-status-active {
  background-color: rgba(var(--color-green-rgb), 0.15);
  color: var(--color-green);
}

.vaultguard-status-suspended {
  background-color: rgba(var(--color-orange-rgb), 0.15);
  color: var(--color-orange);
}

.vaultguard-status-revoked {
  background-color: rgba(var(--color-red-rgb), 0.15);
  color: var(--color-red);
}

.vaultguard-status-pending {
  background-color: rgba(var(--color-blue-rgb), 0.15);
  color: var(--color-blue);
}

.vaultguard-role-admin {
  background-color: rgba(var(--color-purple-rgb), 0.15);
  color: var(--color-purple);
}

.vaultguard-role-editor {
  background-color: rgba(var(--color-blue-rgb), 0.15);
  color: var(--color-blue);
}

.vaultguard-role-viewer {
  background-color: rgba(var(--color-green-rgb), 0.15);
  color: var(--color-green);
}

.vaultguard-mfa-badge {
  background-color: rgba(var(--color-green-rgb), 0.1);
  color: var(--color-green);
}

.vaultguard-mfa-badge svg {
  width: 11px;
  height: 11px;
}

/* \u2500\u2500\u2500 Permission Levels \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-level-none {
  background-color: rgba(var(--color-red-rgb), 0.15);
  color: var(--color-red);
}

.vaultguard-level-read {
  background-color: rgba(var(--color-green-rgb), 0.15);
  color: var(--color-green);
}

.vaultguard-level-write {
  background-color: rgba(var(--color-blue-rgb), 0.15);
  color: var(--color-blue);
}

.vaultguard-level-admin {
  background-color: rgba(var(--color-purple-rgb), 0.15);
  color: var(--color-purple);
}

/* \u2500\u2500\u2500 Action Badges \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-action-read {
  background-color: rgba(var(--color-green-rgb), 0.12);
  color: var(--color-green);
}

.vaultguard-action-write {
  background-color: rgba(var(--color-blue-rgb), 0.12);
  color: var(--color-blue);
}

.vaultguard-action-delete {
  background-color: rgba(var(--color-red-rgb), 0.12);
  color: var(--color-red);
}

.vaultguard-action-share {
  background-color: rgba(var(--color-purple-rgb), 0.12);
  color: var(--color-purple);
}

.vaultguard-action-permission_change {
  background-color: rgba(var(--color-orange-rgb), 0.12);
  color: var(--color-orange);
}

/* \u2500\u2500\u2500 Icon Buttons \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  border-radius: 4px;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.1s, background-color 0.1s;
}

.vaultguard-icon-btn:hover {
  color: var(--text-normal);
  background-color: var(--background-modifier-hover);
}

.vaultguard-icon-btn.vaultguard-danger:hover {
  color: var(--color-red, #e03e3e);
  background-color: rgba(255, 50, 50, 0.1);
}

.vaultguard-icon-btn.vaultguard-success:hover {
  color: var(--color-green);
  background-color: rgba(var(--color-green-rgb), 0.1);
}

.vaultguard-icon-btn svg {
  width: 15px;
  height: 15px;
}

/* \u2500\u2500\u2500 Permission Tree \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-permission-tree {
  margin-top: 4px;
}

.vaultguard-tree-node {
  border-bottom: 1px solid var(--background-modifier-border);
}

.vaultguard-tree-node:last-child {
  border-bottom: none;
}

.vaultguard-tree-node-header {
  display: grid;
  grid-template-columns: 20px minmax(0, 1fr) auto;
  grid-template-areas:
    "icon path actions"
    ". badges actions";
  align-items: start;
  gap: 5px 8px;
  padding: 10px 8px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.1s;
}

.vaultguard-tree-node-header:hover {
  background-color: var(--background-modifier-hover);
}

.vaultguard-tree-icon {
  display: flex;
  align-items: center;
  grid-area: icon;
  padding-top: 2px;
  color: var(--text-muted);
  flex-shrink: 0;
}

.vaultguard-tree-icon svg {
  width: 15px;
  height: 15px;
}

.vaultguard-tree-path {
  grid-area: path;
  font-family: var(--font-monospace);
  font-size: 0.88em;
  line-height: 1.45;
  min-width: 0;
  overflow: visible;
  overflow-wrap: anywhere;
  text-overflow: clip;
  white-space: normal;
  word-break: break-word;
}

.vaultguard-tree-badges {
  display: flex;
  grid-area: badges;
  gap: 5px;
  flex-shrink: 0;
  flex-wrap: wrap;
}

.vaultguard-tree-actions {
  display: flex;
  grid-area: actions;
  justify-self: end;
  gap: 2px;
  flex-shrink: 0;
  opacity: 0;
  transition: opacity 0.15s;
}

.vaultguard-tree-node-header:hover .vaultguard-tree-actions {
  opacity: 1;
}

.vaultguard-tree-node-header:focus-within .vaultguard-tree-actions {
  opacity: 1;
}

/* \u2500\u2500\u2500 Tables (Audit, Permissions, Activity) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-audit-table,
.vaultguard-permissions-table,
.vaultguard-activity-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.84em;
}

.vaultguard-audit-table th,
.vaultguard-permissions-table th,
.vaultguard-activity-table th {
  text-align: left;
  padding: 8px 10px;
  border-bottom: 2px solid var(--background-modifier-border);
  color: var(--text-muted);
  font-weight: 600;
  font-size: 0.85em;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
}

.vaultguard-audit-table td,
.vaultguard-permissions-table td,
.vaultguard-activity-table td {
  padding: 8px 10px;
  border-bottom: 1px solid var(--background-modifier-border);
  vertical-align: middle;
}

.vaultguard-audit-table tbody tr:hover,
.vaultguard-permissions-table tbody tr:hover,
.vaultguard-activity-table tbody tr:hover {
  background-color: var(--background-modifier-hover);
}

.vaultguard-monospace {
  font-family: var(--font-monospace);
  font-size: 0.88em;
  word-break: break-all;
}

/* \u2500\u2500\u2500 Audit Filters \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-audit-filters {
  gap: 6px;
}

.vaultguard-audit-vault-context {
  margin: 0 0 14px;
  padding: 10px 12px;
  border: 1px solid var(--background-modifier-border);
  border-left-width: 3px;
  border-left-color: var(--interactive-accent);
  border-radius: 6px;
  background: var(--background-secondary);
}

.vaultguard-audit-vault-title {
  font-size: 0.92em;
  font-weight: 700;
  color: var(--text-normal);
}

.vaultguard-audit-vault-meta {
  margin-top: 3px;
  color: var(--text-muted);
}

.vaultguard-audit-entry-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.vaultguard-audit-entry {
  padding: 12px;
  border: 1px solid var(--background-modifier-border);
  border-radius: 6px;
  background: var(--background-primary);
}

.vaultguard-audit-entry-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
}

.vaultguard-audit-entry-main {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  flex-wrap: wrap;
}

.vaultguard-audit-entry-time {
  color: var(--text-muted);
  font-size: 0.78em;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.vaultguard-audit-outcome {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 0.72em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
}

.vaultguard-audit-outcome-success {
  color: var(--color-green);
  background: rgba(var(--color-green-rgb), 0.14);
}

.vaultguard-audit-outcome-denied {
  color: var(--color-red);
  background: rgba(var(--color-red-rgb), 0.14);
}

.vaultguard-audit-outcome-error {
  color: var(--color-orange);
  background: rgba(var(--color-orange-rgb), 0.14);
}

.vaultguard-audit-detail-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 9px 14px;
  margin-top: 10px;
}

.vaultguard-audit-detail {
  min-width: 0;
}

.vaultguard-audit-detail-label,
.vaultguard-audit-metadata-label {
  margin-bottom: 2px;
  color: var(--text-muted);
  font-size: 0.72em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.vaultguard-audit-detail-value {
  color: var(--text-normal);
  font-size: 0.84em;
  line-height: 1.35;
  overflow-wrap: anywhere;
}

.vaultguard-audit-metadata,
.vaultguard-audit-raw {
  margin-top: 10px;
}

.vaultguard-audit-raw summary {
  cursor: pointer;
  color: var(--text-muted);
  font-size: 0.78em;
  font-weight: 600;
}

.vaultguard-audit-json {
  margin: 4px 0 0;
  max-height: 220px;
  overflow: auto;
  padding: 8px;
  border-radius: 5px;
  background: var(--background-secondary);
  color: var(--text-normal);
  font-family: var(--font-monospace);
  font-size: 0.78em;
  line-height: 1.4;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

@media (max-width: 700px) {
  .vaultguard-audit-entry-header {
    flex-direction: column;
  }

  .vaultguard-audit-entry-time {
    white-space: normal;
  }

  .vaultguard-audit-detail-grid {
    grid-template-columns: 1fr;
  }
}

/* \u2500\u2500\u2500 Pagination \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-pagination {
  display: flex;
  justify-content: center;
  padding: 16px 0 4px;
}

/* \u2500\u2500\u2500 Permission Rule Modal \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.modal.vaultguard-permission-rule-modal {
  width: 600px !important;
  max-width: 88vw !important;
}

.modal.vaultguard-permission-rule-modal .modal-content {
  padding: 24px 24px 20px !important;
}

.vaultguard-path-input {
  width: 100%;
}

.vaultguard-path-suggestions {
  position: absolute;
  z-index: 100;
  background-color: var(--background-primary);
  border: 1px solid var(--background-modifier-border);
  border-radius: 6px;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.vaultguard-suggestion-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 0.88em;
}

.vaultguard-suggestion-item:hover {
  background-color: var(--background-modifier-hover);
}

.vaultguard-suggestion-icon {
  display: flex;
  color: var(--text-muted);
}

.vaultguard-suggestion-icon svg {
  width: 14px;
  height: 14px;
}

.vaultguard-rule-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px solid var(--background-modifier-border);
  flex-wrap: wrap;
}

/* \u2500\u2500\u2500 Conflict Check \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-conflicts {
  margin-top: 12px;
}

.vaultguard-no-conflicts {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  color: var(--color-green);
  font-size: 0.88em;
  background-color: rgba(var(--color-green-rgb), 0.06);
  border-radius: 6px;
}

.vaultguard-check-icon svg {
  width: 16px;
  height: 16px;
}

.vaultguard-conflict {
  padding: 10px 14px;
  margin-bottom: 6px;
  border-radius: 6px;
  font-size: 0.85em;
  line-height: 1.4;
}

.vaultguard-conflict-override {
  background-color: rgba(var(--color-orange-rgb), 0.08);
  border-left: 3px solid var(--color-orange);
}

.vaultguard-conflict-contradiction {
  background-color: rgba(255, 50, 50, 0.08);
  border-left: 3px solid var(--color-red, #e03e3e);
}

.vaultguard-conflict-redundant {
  background-color: rgba(var(--color-blue-rgb), 0.08);
  border-left: 3px solid var(--color-blue);
}

.vaultguard-conflict-type {
  font-weight: 700;
  font-size: 0.78em;
  letter-spacing: 0.04em;
}

.vaultguard-conflict-detail {
  margin-top: 4px;
  font-family: var(--font-monospace);
  font-size: 0.85em;
  color: var(--text-muted);
}

/* \u2500\u2500\u2500 Effective Permission Preview \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-effective-preview {
  margin-top: 12px;
}

.vaultguard-effective-entry {
  padding: 8px 12px;
  border-bottom: 1px solid var(--background-modifier-border);
}

.vaultguard-effective-source {
  color: var(--text-muted);
  font-size: 0.85em;
}

.vaultguard-inheritance-chain {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
  font-size: 0.8em;
  color: var(--text-muted);
  flex-wrap: wrap;
}

.vaultguard-chain-label {
  font-weight: 600;
}

.vaultguard-chain-arrow svg {
  width: 12px;
  height: 12px;
}

.vaultguard-chain-path {
  font-family: var(--font-monospace);
  padding: 1px 5px;
  background-color: var(--background-secondary);
  border-radius: 3px;
  font-size: 0.95em;
}

/* \u2500\u2500\u2500 Modal Actions / Confirm Buttons \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-modal-actions,
.vaultguard-confirm-buttons {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  margin-top: 20px;
  padding-top: 14px;
  border-top: 1px solid var(--background-modifier-border);
  flex-wrap: wrap;
}

.vaultguard-modal-actions button,
.vaultguard-confirm-buttons button {
  min-height: 34px;
  white-space: nowrap;
}

/* \u2500\u2500\u2500 Vault Picker Modal \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.modal.vaultguard-vault-picker-modal {
  width: 640px !important;
  max-width: calc(100vw - 32px) !important;
  max-height: calc(100vh - 48px) !important;
}

.modal.vaultguard-vault-picker-modal .modal-content,
.vaultguard-vault-picker-content {
  padding: 24px 28px 22px !important;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: calc(100vh - 64px);
}

.vaultguard-vault-picker-error {
  margin: 0 0 12px;
  padding: 10px 12px;
  border-left: 3px solid var(--color-red, #e03e3e);
  border-radius: 6px;
  background-color: rgba(255, 50, 50, 0.12);
  color: var(--text-normal);
  font-size: 0.88em;
  line-height: 1.4;
}

.vaultguard-vault-picker-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 260px;
  overflow-y: auto;
  padding-right: 4px;
}

.vaultguard-vault-picker-row {
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 58px;
  padding: 10px 12px;
  border: 1px solid var(--background-modifier-border);
  border-radius: 8px;
  background-color: var(--background-secondary);
}

.vaultguard-vault-picker-info {
  flex: 1;
  min-width: 0;
}

.vaultguard-vault-picker-name {
  display: block;
  margin-bottom: 2px;
  overflow: hidden;
  color: var(--text-normal);
  font-size: 0.95em;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.vaultguard-vault-picker-meta {
  overflow: hidden;
  color: var(--text-muted);
  font-size: 0.82em;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.vaultguard-vault-picker-row button {
  flex-shrink: 0;
  min-height: 32px;
}

.vaultguard-vault-picker-create {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.vaultguard-vault-picker-textarea {
  min-height: 72px;
  resize: vertical;
}

.vaultguard-vault-picker-create-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
}

/* \u2500\u2500\u2500 Binding Reconciliation Modal \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.modal.vaultguard-reconciliation-modal {
  width: 640px !important;
  max-width: calc(100vw - 32px) !important;
  max-height: calc(100vh - 48px) !important;
}

.modal.vaultguard-reconciliation-modal .modal-content,
.vaultguard-reconciliation-content {
  padding: 24px 28px 22px !important;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: calc(100vh - 64px);
}

.vaultguard-reconciliation-summary {
  display: grid;
  grid-template-columns: minmax(36px, auto) minmax(0, 1fr);
  gap: 8px 16px;
  margin: 14px 0 18px;
  padding: 14px 0;
  border-top: 1px solid var(--background-modifier-border);
  border-bottom: 1px solid var(--background-modifier-border);
}

.vaultguard-reconciliation-count {
  color: var(--text-normal);
  font-size: 1.05em;
  text-align: right;
}

.vaultguard-reconciliation-row-text {
  min-width: 0;
}

.vaultguard-reconciliation-row-label {
  color: var(--text-normal);
  font-weight: 600;
}

.vaultguard-reconciliation-details {
  margin-bottom: 16px;
}

.vaultguard-reconciliation-details summary {
  cursor: pointer;
  font-weight: 600;
}

.vaultguard-reconciliation-details ul {
  max-height: 180px;
  overflow-y: auto;
  margin: 10px 0 0;
  padding-left: 20px;
}

.vaultguard-reconciliation-details li {
  word-break: break-word;
}

/* \u2500\u2500\u2500 MFA Setup Modal \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.modal.vaultguard-mfa-setup-modal {
  width: 520px !important;
  max-width: calc(100vw - 32px) !important;
  max-height: calc(100vh - 48px) !important;
}

.modal.vaultguard-mfa-setup-modal .modal-content,
.vaultguard-mfa-setup-content {
  padding: 24px 28px 22px !important;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: calc(100vh - 64px);
}

.vaultguard-mfa-qr-container {
  display: flex;
  justify-content: center;
  margin: 14px 0;
}

.vaultguard-mfa-qr {
  width: 200px;
  height: 200px;
  max-width: 100%;
  border: 1px solid var(--background-modifier-border);
  border-radius: 8px;
  background-color: #ffffff;
  padding: 10px;
  box-sizing: border-box;
}

.vaultguard-mfa-manual {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
  margin: 12px 0 16px;
  padding: 12px;
  border: 1px solid var(--background-modifier-border);
  border-radius: 8px;
  background-color: var(--background-secondary);
}

.vaultguard-mfa-manual-label {
  grid-column: 1 / -1;
  margin: 0;
  color: var(--text-muted);
  font-size: 0.82em;
}

.vaultguard-mfa-secret {
  min-width: 0;
  overflow-wrap: anywhere;
  padding: 6px 8px;
  border-radius: 4px;
  background-color: var(--background-primary);
  color: var(--text-normal);
  font-size: 0.82em;
}

.vaultguard-mfa-copy-btn,
.vaultguard-mfa-copy-all-btn {
  min-height: 32px;
  white-space: nowrap;
}

.vaultguard-mfa-recovery-warning,
.vaultguard-mfa-recovery-note {
  color: var(--text-muted);
  font-size: 0.9em;
  line-height: 1.45;
}

.vaultguard-mfa-recovery-codes {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
  margin: 14px 0;
}

.vaultguard-mfa-recovery-code {
  padding: 8px 10px;
  border: 1px solid var(--background-modifier-border);
  border-radius: 6px;
  background-color: var(--background-secondary);
  color: var(--text-normal);
  font-size: 0.86em;
  text-align: center;
}

.vaultguard-mfa-ack-row {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-top: 12px;
  color: var(--text-normal);
  font-size: 0.9em;
}

.vaultguard-mfa-ack-checkbox {
  margin-top: 2px;
  flex-shrink: 0;
}

@media (max-width: 520px) {
  .modal.vaultguard-vault-picker-modal .modal-content,
  .vaultguard-vault-picker-content,
  .modal.vaultguard-reconciliation-modal .modal-content,
  .vaultguard-reconciliation-content,
  .modal.vaultguard-mfa-setup-modal .modal-content,
  .vaultguard-mfa-setup-content,
  .modal.vaultguard-dialog-modal .modal-content,
  .vaultguard-dialog-content {
    padding: 20px 18px 18px !important;
  }

  .vaultguard-vault-picker-row {
    align-items: stretch;
    flex-direction: column;
  }

  .vaultguard-vault-picker-row button,
  .vaultguard-vault-picker-create-actions button {
    width: 100%;
  }

  .vaultguard-mfa-manual,
  .vaultguard-mfa-recovery-codes {
    grid-template-columns: 1fr;
  }
}

/* \u2500\u2500\u2500 Settings Tab \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-settings-tab h3 {
  margin-top: 24px;
  margin-bottom: 8px;
  font-size: 1em;
  font-weight: 700;
  color: var(--text-normal);
}

.vaultguard-settings-tab h3:first-child {
  margin-top: 0;
}

.vaultguard-settings-actions {
  margin-top: 16px;
}

.vaultguard-number-setting input[type="number"] {
  width: 96px;
}

.vaultguard-admin-textarea-setting {
  align-items: stretch;
  flex-direction: column;
}

.vaultguard-admin-textarea-setting .setting-item-info,
.vaultguard-admin-textarea-setting .setting-item-control {
  width: 100%;
}

.vaultguard-admin-textarea-setting .setting-item-control {
  margin-top: 10px;
  margin-left: 0;
}

.vaultguard-admin-textarea-setting textarea {
  box-sizing: border-box;
  min-height: 84px;
  resize: vertical;
  width: 100%;
}

.vaultguard-excluded-paths-setting {
  align-items: stretch;
  flex-direction: column;
}

.vaultguard-excluded-paths-setting .setting-item-info,
.vaultguard-excluded-paths-setting .setting-item-control {
  width: 100%;
}

.vaultguard-excluded-paths-setting .setting-item-control {
  margin-top: 10px;
  margin-left: 0;
}

.vaultguard-excluded-paths-setting textarea {
  box-sizing: border-box;
  min-height: 132px;
  resize: vertical;
  width: 100%;
}

.vaultguard-current-vault-settings {
  margin-bottom: 20px;
}

.vaultguard-current-vault-loading {
  padding: 8px 0;
}

.vaultguard-current-vault-description {
  margin: -6px 0 8px;
  line-height: 1.45;
}

.vaultguard-current-vault-id {
  font-family: var(--font-monospace);
  font-size: 0.82em;
  user-select: text;
}

.vaultguard-current-vault-heading {
  margin: 16px 0 4px;
  font-size: 0.95em;
}

/* \u2500\u2500\u2500 Revoke Access Modal \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.modal.vaultguard-revoke-modal {
  width: 520px !important;
  max-width: 88vw !important;
}

.modal.vaultguard-revoke-modal .modal-content {
  padding: 24px 24px 20px !important;
}

.vaultguard-danger-title {
  color: var(--color-red, #e03e3e);
  margin: 0 0 12px;
}

.vaultguard-revoke-consequences {
  padding-left: 20px;
  font-size: 0.88em;
  line-height: 1.5;
  color: var(--text-muted);
}

.vaultguard-revoke-consequences li {
  margin-bottom: 4px;
}

.vaultguard-warning-text {
  color: var(--color-red, #e03e3e);
  font-weight: 600;
  font-size: 0.88em;
  line-height: 1.4;
}

.vaultguard-recovery-key-output {
  box-sizing: border-box;
  width: 100%;
  min-height: 96px;
  margin: 8px 0 10px;
  padding: 10px 12px;
  resize: vertical;
  border: 1px solid var(--background-modifier-border);
  border-radius: 6px;
  background: var(--background-modifier-form-field);
  color: var(--text-normal);
  font-family: var(--font-monospace);
  font-size: 12px;
  line-height: 1.45;
}

.vaultguard-recovery-actions {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 8px;
}

.vaultguard-current-role {
  color: var(--text-muted);
  font-style: italic;
  font-size: 0.9em;
}

/* \u2500\u2500\u2500 Expiry Input \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-expiry-input {
  max-width: 200px;
}

/* \u2500\u2500\u2500 Login Modal \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.modal.vaultguard-login-modal {
  width: 420px !important;
  max-width: calc(100vw - 32px) !important;
  max-height: calc(100vh - 48px) !important;
  display: flex;
  flex-direction: column;
}

.modal.vaultguard-login-modal .modal-close-button {
  top: 8px;
  right: 8px;
  z-index: 10;
}

.modal.vaultguard-login-modal .modal-content,
.vaultguard-login-modal-content {
  padding: 32px 28px 24px !important;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.modal.vaultguard-login-modal .modal-content::-webkit-scrollbar,
.vaultguard-login-modal-content::-webkit-scrollbar {
  width: 6px;
}

.modal.vaultguard-login-modal .modal-content::-webkit-scrollbar-thumb,
.vaultguard-login-modal-content::-webkit-scrollbar-thumb {
  background-color: var(--background-modifier-border);
  border-radius: 3px;
}

.vaultguard-login-icon {
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
  color: var(--interactive-accent);
  line-height: 1;
}

.vaultguard-login-icon svg {
  display: block;
  width: 48px;
  height: 48px;
}

.vaultguard-login-title {
  text-align: center;
  margin: 0 0 4px;
  font-size: 1.35em;
  font-weight: 700;
  line-height: 1.25;
}

.vaultguard-login-subtitle {
  text-align: center;
  color: var(--text-muted);
  font-size: 0.88em;
  margin: 0 0 24px;
  line-height: 1.4;
}

.vaultguard-login-error {
  padding: 10px 14px;
  margin-bottom: 16px;
  background-color: rgba(255, 50, 50, 0.12);
  color: var(--text-normal);
  border-radius: 6px;
  border-left: 3px solid var(--color-red, #e03e3e);
  font-size: 0.88em;
  text-align: left;
  line-height: 1.4;
}

.vaultguard-login-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
}

.vaultguard-field-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.vaultguard-field-label {
  font-size: 0.85em;
  font-weight: 600;
  color: var(--text-normal);
}

.vaultguard-field-hint {
  font-size: 0.78em;
  color: var(--text-muted);
  margin-bottom: 2px;
  line-height: 1.3;
}

.vaultguard-field-input {
  width: 100% !important;
  min-height: 38px;
  padding: 9px 12px;
  border: 1px solid var(--background-modifier-border);
  border-radius: 6px;
  background-color: var(--background-primary);
  color: var(--text-normal);
  font-size: 0.95em;
  line-height: 1.3;
  outline: none;
  transition: border-color 0.15s, box-shadow 0.15s;
  box-sizing: border-box;
  box-shadow: none;
}

.vaultguard-field-input:focus {
  border-color: var(--interactive-accent);
  box-shadow: 0 0 0 2px rgba(var(--interactive-accent-rgb, 124, 58, 237), 0.18);
}

.vaultguard-field-input::placeholder {
  color: var(--text-faint);
}

.vaultguard-mfa-container {
  border-top: 1px solid var(--background-modifier-border);
  padding-top: 16px;
  margin-top: 2px;
}

.vaultguard-mfa-input {
  max-width: 180px !important;
  text-align: center;
  font-size: 1.3em;
  letter-spacing: 0.35em;
  font-family: var(--font-monospace);
  padding: 10px 12px;
}

.vaultguard-login-actions {
  display: flex;
  gap: 10px;
  margin-top: 24px;
  padding-top: 18px;
  border-top: 1px solid var(--background-modifier-border);
  flex-shrink: 0;
}

.vaultguard-login-actions button {
  flex: 1;
  min-width: 0;
  min-height: 36px;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.92em;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.15s, opacity 0.15s;
  white-space: nowrap;
}

.vaultguard-login-actions .mod-cta {
  font-weight: 600;
}

.vaultguard-login-actions button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* \u2500\u2500\u2500 ZK Passphrase Warning \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-zk-warning {
  padding: 12px 14px;
  margin-bottom: 12px;
  background-color: rgba(255, 170, 0, 0.1);
  border-left: 3px solid var(--color-orange, #e8a838);
  border-radius: 6px;
  font-size: 0.84em;
  line-height: 1.5;
  color: var(--text-normal);
}

.vaultguard-zk-warning strong {
  color: var(--text-normal);
}

/* \u2500\u2500\u2500 Forgot Password / Reset \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-forgot-link {
  text-align: right;
  margin-top: -8px;
}

.vaultguard-forgot-link a {
  font-size: 0.82em;
  color: var(--interactive-accent);
  text-decoration: none;
  cursor: pointer;
}

.vaultguard-forgot-link a:hover {
  text-decoration: underline;
}

.vaultguard-reset-success {
  padding: 10px 14px;
  margin-bottom: 16px;
  background-color: rgba(50, 200, 100, 0.12);
  color: var(--text-normal);
  border-radius: 6px;
  border-left: 3px solid var(--color-green, #2ea043);
  font-size: 0.88em;
  text-align: left;
  line-height: 1.4;
}

.vaultguard-reset-send-row {
  margin-top: 4px;
}

.vaultguard-reset-send-row button {
  width: 100%;
  min-height: 36px;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.92em;
  font-weight: 500;
  cursor: pointer;
  white-space: normal;
}

.vaultguard-reset-confirm-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-top: 1px solid var(--background-modifier-border);
  padding-top: 16px;
  margin-top: 4px;
}

@media (max-width: 420px) {
  .modal.vaultguard-login-modal .modal-content,
  .vaultguard-login-modal-content {
    padding: 28px 20px 20px !important;
  }

  .vaultguard-login-actions {
    flex-direction: column-reverse;
  }

  .vaultguard-login-actions button {
    width: 100%;
  }
}

/* \u2500\u2500\u2500 Revocation Notice \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-revocation-notice {
  padding: 20px;
  text-align: center;
  background-color: rgba(255, 50, 50, 0.08);
  border: 1px solid rgba(255, 50, 50, 0.2);
  border-radius: 8px;
  margin: 16px;
}

.vaultguard-revocation-notice h3 {
  color: var(--color-red, #e03e3e);
  margin-bottom: 8px;
}

.vaultguard-revocation-notice p {
  font-size: 0.9em;
  line-height: 1.5;
  color: var(--text-muted);
  margin-bottom: 6px;
}

/* \u2500\u2500\u2500 Lease Expiry Warning \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-lease-warning {
  padding: 8px 12px;
  background-color: rgba(255, 170, 0, 0.1);
  border-radius: 6px;
  font-size: 0.82em;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 6px;
}

.vaultguard-lease-warning.mod-critical {
  background-color: rgba(255, 50, 50, 0.1);
  color: var(--color-red, #e03e3e);
}

/* \u2500\u2500\u2500 Confirmation Dialog \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-confirm-input {
  width: 100%;
  padding: 8px 12px;
  margin-top: 8px;
  border: 1px solid var(--background-modifier-border);
  border-radius: 6px;
  background-color: var(--background-primary);
  color: var(--text-normal);
  font-size: 0.9em;
}

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   Read-only banner \u2014 shown when the editor is locked because the user has
   below-WRITE access to the active file.
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

.vaultguard-readonly-banner {
  position: relative;
  z-index: 9;
  flex-shrink: 0;
  padding: 6px 14px;
  font-size: 0.78em;
  font-weight: 600;
  color: var(--color-orange);
  background-color: rgba(var(--color-orange-rgb), 0.10);
  border-bottom: 1px solid rgba(var(--color-orange-rgb), 0.25);
}

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   No-Access Overlay \u2014 covers the editor when the user has zero permission
   on the open file. The file's content is still in the local cache (so
   that sync works) but must never be shown to a user who has been denied.
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

.vaultguard-noaccess-overlay {
  position: absolute;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background-primary);
  padding: 24px;
}

.vaultguard-noaccess-card {
  max-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  padding: 28px 32px;
  border-radius: 10px;
  background-color: var(--background-secondary);
  border: 1px solid var(--background-modifier-border);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.vaultguard-noaccess-title {
  font-size: 1.05em;
  font-weight: 700;
  color: var(--text-normal);
}

.vaultguard-noaccess-body {
  font-size: 0.88em;
  color: var(--text-muted);
  line-height: 1.5;
}

.vaultguard-noaccess-close {
  margin-top: 4px;
  padding: 6px 14px;
  font-size: 0.85em;
  font-weight: 600;
  color: var(--text-on-accent);
  background-color: var(--interactive-accent);
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.vaultguard-noaccess-close:hover {
  background-color: var(--interactive-accent-hover);
}

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   File Permission Header \u2014 per-file access bar above the editor
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

/* \u2500\u2500\u2500 Header Bar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-file-header {
  position: relative;
  z-index: 10;
  border-bottom: 1px solid var(--background-modifier-border);
  background-color: var(--background-secondary);
  padding: 0;
  flex-shrink: 0;
}

.vaultguard-fh-inner {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 14px;
  min-height: 34px;
}

/* Background-refresh indicator: small spinner that appears beside the
   header content while a refetch is in flight after stale cached data
   has already been rendered. */
.vaultguard-fh-refresh-indicator {
  display: inline-flex;
  align-items: center;
  margin-left: auto;
  margin-right: 4px;
  color: var(--text-muted);
  opacity: 0.7;
}

.vaultguard-fh-popover-spinner {
  display: inline-flex;
  align-items: center;
  margin-left: 6px;
  color: var(--text-muted);
}

/* \u2500\u2500\u2500 Permission Level Section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-fh-level {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}

.vaultguard-fh-lock-icon {
  display: flex;
  align-items: center;
  color: var(--text-muted);
}

.vaultguard-fh-lock-icon svg {
  width: 14px;
  height: 14px;
}

.vaultguard-fh-badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 10px;
  border-radius: 10px;
  font-size: 0.72em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
}

.vaultguard-fh-badge-loading {
  background-color: var(--background-modifier-hover);
  color: var(--text-muted);
  overflow: hidden;
  position: relative;
}

.vaultguard-fh-badge-admin {
  background-color: rgba(var(--color-purple-rgb), 0.15);
  color: var(--color-purple);
}

.vaultguard-fh-badge-write {
  background-color: rgba(var(--color-blue-rgb), 0.15);
  color: var(--color-blue);
}

.vaultguard-fh-badge-read {
  background-color: rgba(var(--color-green-rgb), 0.15);
  color: var(--color-green);
}

.vaultguard-fh-badge-none {
  background-color: rgba(var(--color-red-rgb), 0.15);
  color: var(--color-red);
}

.vaultguard-fh-badge-unknown {
  background-color: var(--background-modifier-hover);
  color: var(--text-muted);
}

/* \u2500\u2500\u2500 Skeleton / Shimmer \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-fh-shimmer {
  display: inline-block;
}

@keyframes vaultguard-shimmer {
  0%   { opacity: 0.5; }
  50%  { opacity: 1; }
  100% { opacity: 0.5; }
}

.vaultguard-fh-badge-loading .vaultguard-fh-shimmer {
  animation: vaultguard-shimmer 1.4s ease-in-out infinite;
}

.vaultguard-fh-chip-skeleton {
  width: 60px;
  height: 22px;
  border-radius: 12px;
  background-color: var(--background-modifier-hover);
  animation: vaultguard-shimmer 1.4s ease-in-out infinite;
}

.vaultguard-fh-chip-skeleton:nth-child(2) {
  animation-delay: 0.15s;
  width: 50px;
}

.vaultguard-fh-chip-skeleton:nth-child(3) {
  animation-delay: 0.3s;
  width: 44px;
}

/* \u2500\u2500\u2500 Separator \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-fh-separator {
  width: 1px;
  height: 18px;
  background-color: var(--background-modifier-border);
  flex-shrink: 0;
}

/* \u2500\u2500\u2500 Shared Count \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-fh-shared-count {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-size: 0.72em;
  font-weight: 600;
  color: var(--text-muted);
  flex-shrink: 0;
  margin-right: 2px;
}

.vaultguard-fh-shared-count-icon {
  display: flex;
  align-items: center;
  color: var(--text-faint);
}

.vaultguard-fh-shared-count-icon svg {
  width: 12px;
  height: 12px;
}

/* \u2500\u2500\u2500 Access List Section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-fh-access {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 6px;
}

.vaultguard-fh-no-access {
  font-size: 0.8em;
  color: var(--text-faint);
  font-style: italic;
}

.vaultguard-fh-avatar-group {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: nowrap;
  overflow: hidden;
}

.vaultguard-fh-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px 2px 4px;
  border-radius: 12px;
  font-size: 0.75em;
  white-space: nowrap;
  background-color: var(--background-modifier-hover);
  transition: background-color 0.12s, box-shadow 0.12s, transform 0.12s;
  max-width: 160px;
  overflow: hidden;
  border: 1px solid transparent;
}

.vaultguard-fh-chip:hover {
  background-color: var(--background-modifier-border);
}

.vaultguard-fh-chip-clickable {
  cursor: pointer;
}

.vaultguard-fh-chip-clickable:hover {
  border-color: var(--background-modifier-border-hover, var(--background-modifier-border));
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  transform: translateY(-1px);
}

.vaultguard-fh-chip-clickable:active {
  transform: translateY(0);
  box-shadow: none;
}

.vaultguard-fh-chip-icon {
  display: flex;
  align-items: center;
  color: var(--text-muted);
  flex-shrink: 0;
}

.vaultguard-fh-chip-icon svg {
  width: 12px;
  height: 12px;
}

.vaultguard-fh-chip-initials {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: var(--interactive-accent);
  color: var(--text-on-accent);
  font-size: 0.7em;
  font-weight: 700;
  flex-shrink: 0;
  line-height: 1;
  transition: transform 0.12s;
}

/* Level-colored avatar initials */
.vaultguard-fh-initials-admin {
  background-color: var(--color-purple);
  color: #ffffff;
}

.vaultguard-fh-initials-write {
  background-color: var(--color-blue);
  color: #ffffff;
}

.vaultguard-fh-initials-read {
  background-color: var(--color-green);
  color: #ffffff;
}

.vaultguard-fh-initials-none {
  background-color: var(--text-faint);
  color: #ffffff;
}

.vaultguard-fh-chip-label {
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--text-normal);
}

.vaultguard-fh-chip-level {
  font-size: 0.85em;
  font-weight: 600;
  flex-shrink: 0;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.vaultguard-fh-dot-admin { color: var(--color-purple); }
.vaultguard-fh-dot-write { color: var(--color-blue); }
.vaultguard-fh-dot-read  { color: var(--color-green); }
.vaultguard-fh-dot-none  { color: var(--color-red); }

.vaultguard-fh-overflow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.72em;
  font-weight: 600;
  color: var(--text-muted);
  white-space: nowrap;
  padding: 2px 8px;
  border-radius: 12px;
  background-color: var(--background-modifier-hover);
  cursor: pointer;
  transition: background-color 0.12s, color 0.12s;
}

.vaultguard-fh-overflow:hover {
  background-color: var(--background-modifier-border);
  color: var(--text-normal);
}

/* \u2500\u2500\u2500 Action Buttons \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-fh-actions {
  display: flex;
  gap: 4px;
  flex-shrink: 0;
}

.vaultguard-fh-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  border: 1px solid var(--background-modifier-border);
  border-radius: 6px;
  background: var(--background-primary);
  color: var(--text-muted);
  font-size: 0.78em;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.12s, border-color 0.12s, background-color 0.12s;
  white-space: nowrap;
}

.vaultguard-fh-btn:hover {
  color: var(--text-normal);
  border-color: var(--interactive-accent);
  background-color: var(--background-modifier-hover);
}

.vaultguard-fh-btn-manage:hover {
  color: var(--interactive-accent);
}

.vaultguard-fh-btn-icon {
  display: flex;
  align-items: center;
}

.vaultguard-fh-btn-icon svg {
  width: 13px;
  height: 13px;
}

/* \u2500\u2500\u2500 User Popover \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-fh-popover-backdrop {
  position: fixed;
  inset: 0;
  z-index: 998;
}

.vaultguard-fh-popover {
  position: fixed;
  z-index: 999;
  background-color: var(--background-primary);
  border: 1px solid var(--background-modifier-border);
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.14), 0 2px 6px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  animation: vaultguard-popover-in 0.15s ease-out;
}

@keyframes vaultguard-popover-in {
  from {
    opacity: 0;
    transform: translateY(-4px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.vaultguard-fh-popover-inner {
  padding: 14px;
}

.vaultguard-fh-popover-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.vaultguard-fh-popover-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.82em;
  font-weight: 700;
  color: #ffffff;
  flex-shrink: 0;
  background-color: var(--interactive-accent);
}

.vaultguard-fh-popover-name-col {
  flex: 1;
  min-width: 0;
}

.vaultguard-fh-popover-name {
  font-size: 0.9em;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--text-normal);
}

.vaultguard-fh-popover-email {
  font-size: 0.76em;
  color: var(--text-faint);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.vaultguard-fh-popover-info {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px 0;
  border-top: 1px solid var(--background-modifier-border);
}

.vaultguard-fh-popover-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.vaultguard-fh-popover-label {
  font-size: 0.78em;
  color: var(--text-muted);
  font-weight: 500;
}

.vaultguard-fh-popover-value {
  font-size: 0.78em;
  font-weight: 600;
  color: var(--text-normal);
}

.vaultguard-fh-popover-status {
  font-size: 0.72em;
  font-weight: 700;
  padding: 1px 8px;
  border-radius: 8px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.vaultguard-fh-popover-status-active {
  background-color: rgba(var(--color-green-rgb), 0.15);
  color: var(--color-green);
}

.vaultguard-fh-popover-status-pending {
  background-color: rgba(var(--color-yellow-rgb), 0.15);
  color: var(--color-yellow);
}

.vaultguard-fh-popover-status-suspended {
  background-color: rgba(var(--color-orange-rgb), 0.15);
  color: var(--color-orange);
}

.vaultguard-fh-popover-status-revoked {
  background-color: rgba(var(--color-red-rgb), 0.15);
  color: var(--color-red);
}

.vaultguard-fh-popover-actions {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-top: 10px;
  border-top: 1px solid var(--background-modifier-border);
}

.vaultguard-fh-popover-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  padding: 6px 10px;
  border: 1px solid var(--background-modifier-border);
  border-radius: 6px;
  background: var(--background-secondary);
  color: var(--text-muted);
  font-size: 0.78em;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.12s, border-color 0.12s, background-color 0.12s;
}

.vaultguard-fh-popover-btn:hover {
  color: var(--interactive-accent);
  border-color: var(--interactive-accent);
  background-color: var(--background-modifier-hover);
}

/* \u2500\u2500\u2500 Inline Edit Name Form \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-fh-popover-edit-form {
  display: flex;
  align-items: center;
  gap: 4px;
}

.vaultguard-fh-popover-edit-input {
  flex: 1;
  min-width: 0;
  padding: 4px 8px;
  border: 1px solid var(--background-modifier-border);
  border-radius: 4px;
  background-color: var(--background-primary);
  color: var(--text-normal);
  font-size: 0.82em;
}

.vaultguard-fh-popover-edit-input:focus {
  border-color: var(--interactive-accent);
  outline: none;
}

.vaultguard-fh-popover-edit-save {
  padding: 4px 10px;
  border: none;
  border-radius: 4px;
  background-color: var(--interactive-accent);
  color: var(--text-on-accent);
  font-size: 0.78em;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: opacity 0.12s;
}

.vaultguard-fh-popover-edit-save:hover {
  opacity: 0.85;
}

.vaultguard-fh-popover-edit-save:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* \u2500\u2500\u2500 Popover Level Select \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-fh-popover-level-select {
  padding: 3px 8px;
  border: 1px solid var(--background-modifier-border);
  border-radius: 6px;
  background-color: var(--background-primary);
  color: var(--text-normal);
  font-size: 0.78em;
  font-weight: 600;
  cursor: pointer;
  transition: border-color 0.12s;
}

.vaultguard-fh-popover-level-select:focus {
  border-color: var(--interactive-accent);
  outline: none;
}

.vaultguard-fh-popover-level-select:disabled {
  opacity: 0.5;
  cursor: wait;
}

/* \u2500\u2500\u2500 Mobile phone clearance (Obsidian-specific) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Two real problems the @media query below cannot solve on its own:

   1. iOS notch / Dynamic Island. Obsidian does NOT auto-pad .view-content
      for safe-area-inset-top, so an element injected at viewContent.firstChild
      (which is exactly what file-permission-header.ts:114 does) lands behind
      the status bar on notched devices.

   2. Floating navigation (Settings \u2192 Appearance \u2192 Floating navigation,
      default-on since mobile v1.11.7, Feb 2026). The floating back/menu
      buttons render ABOVE .view-content with no automatic clearance \u2014 they
      overlap our badge + chips. When the setting is OFF, the native
      .view-header sibling provides spacing; when ON, nothing does.

   Reference: chrisgurney/obsidian-note-toolbar src/Styles/body.css L104-141.
   Scoped to .is-phone (not .is-mobile) \u2014 iPads render desktop-style and
   don't need this clearance. */
body.is-phone .vaultguard-file-header {
  padding-top: var(--safe-area-inset-top, env(safe-area-inset-top, 0px));
}

body.is-phone.is-floating-nav .vaultguard-file-header {
  margin-top: var(--navbar-height, 48px);
}

/* \u2500\u2500\u2500 Mobile layout: .is-phone branch \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Mirror of the @media (max-width: 600px) block below, but scoped to
   Obsidian's body.is-phone class. Belt-and-suspenders: real phones may
   report a CSS viewport >600px (split-screen, large devices, zoom level
   tweaks), in which case the media query wouldn't fire on its own. */
body.is-phone .vaultguard-fh-inner {
  padding: 4px 10px;
  gap: 6px;
}

body.is-phone .vaultguard-fh-separator {
  display: none;
}

body.is-phone .vaultguard-fh-shared-count {
  gap: 2px;
}

body.is-phone .vaultguard-fh-shared-count-icon svg {
  width: 11px;
  height: 11px;
}

body.is-phone .vaultguard-fh-chip {
  padding: 0;
  background-color: transparent;
  border: none;
  max-width: none;
}

body.is-phone .vaultguard-fh-chip:hover,
body.is-phone .vaultguard-fh-chip-clickable:hover {
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
  transform: none;
}

body.is-phone .vaultguard-fh-chip-label,
body.is-phone .vaultguard-fh-chip-level {
  display: none;
}

body.is-phone .vaultguard-fh-chip-initials,
body.is-phone .vaultguard-fh-chip-icon {
  width: 22px;
  height: 22px;
}

body.is-phone .vaultguard-fh-chip-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--background-modifier-hover);
}

body.is-phone .vaultguard-fh-avatar-group {
  gap: 2px;
}

body.is-phone .vaultguard-fh-overflow {
  padding: 2px 6px;
}

body.is-phone .vaultguard-fh-btn {
  padding: 5px;
  gap: 0;
}

body.is-phone .vaultguard-fh-btn > span:not(.vaultguard-fh-btn-icon) {
  display: none;
}

body.is-phone .vaultguard-fh-btn-icon svg {
  width: 15px;
  height: 15px;
}

body.is-phone .vaultguard-fh-popover {
  left: 8px !important;
  right: 8px !important;
  width: auto !important;
  top: auto !important;
  bottom: 8px !important;
  max-height: 70vh;
  overflow-y: auto;
}

body.is-phone .vaultguard-fh-popover-inner {
  padding: 16px;
}

/* \u2500\u2500\u2500 Mobile touch layout (\u2264600px) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   The header fights for room in a single horizontal row on phones:
   badge + separator + count + up to 4 named chips + Manage button. With
   nowrap + overflow:hidden the chips get clipped mid-name and the action
   button can be pushed off-screen. On mobile we collapse chips to colored
   avatar dots (initials still carry identity, background carries level),
   hide the redundant separator and button text, and tighten spacing.

   The popover is positioned inline by positionPopover() at a fixed 260px
   width, which is awkward on narrow viewports \u2014 we override with
   !important to turn it into a bottom-anchored sheet.

   Keep this fallback touch-only. On macOS desktop, a narrow Obsidian window
   can also be <=600px wide, but it should keep the desktop header layout. */
@media (max-width: 600px) and (hover: none) and (pointer: coarse) {
  .vaultguard-fh-inner {
    padding: 4px 10px;
    gap: 6px;
  }

  .vaultguard-fh-separator {
    display: none;
  }

  .vaultguard-fh-shared-count {
    gap: 2px;
  }

  .vaultguard-fh-shared-count-icon svg {
    width: 11px;
    height: 11px;
  }

  /* Collapse chips to icon-only avatar dots. The colored initials circle
     already encodes both identity (initials) and access level (color), so
     the chip wrapper itself becomes pure padding around the avatar. */
  .vaultguard-fh-chip {
    padding: 0;
    background-color: transparent;
    border: none;
    max-width: none;
  }

  .vaultguard-fh-chip:hover,
  .vaultguard-fh-chip-clickable:hover {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
    transform: none;
  }

  .vaultguard-fh-chip-label,
  .vaultguard-fh-chip-level {
    display: none;
  }

  /* Bump avatar size slightly to keep it a comfortable tap target now
     that the chip wrapper is gone. */
  .vaultguard-fh-chip-initials,
  .vaultguard-fh-chip-icon {
    width: 22px;
    height: 22px;
  }

  .vaultguard-fh-chip-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--background-modifier-hover);
  }

  .vaultguard-fh-avatar-group {
    gap: 2px;
  }

  .vaultguard-fh-overflow {
    padding: 2px 6px;
  }

  /* Icon-only action button. The button has two children \u2014 an icon span
     (.vaultguard-fh-btn-icon) and a plain text span. Hide the text span
     only, by targeting direct children that aren't the icon. */
  .vaultguard-fh-btn {
    padding: 5px;
    gap: 0;
  }

  .vaultguard-fh-btn > span:not(.vaultguard-fh-btn-icon) {
    display: none;
  }

  .vaultguard-fh-btn-icon svg {
    width: 15px;
    height: 15px;
  }

  /* Bottom-sheet popover. positionPopover() in file-permission-header.ts
     writes inline top/left/width on every open \u2014 !important is the only
     way to override without touching TS. */
  .vaultguard-fh-popover {
    left: 8px !important;
    right: 8px !important;
    width: auto !important;
    top: auto !important;
    bottom: 8px !important;
    max-height: 70vh;
    overflow-y: auto;
  }

  .vaultguard-fh-popover-inner {
    padding: 16px;
  }
}

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   File Permission Panel \u2014 dropdown for managing per-file access
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

/* \u2500\u2500\u2500 Backdrop \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-fp-backdrop {
  position: fixed;
  inset: 0;
  z-index: 999;
}

/* \u2500\u2500\u2500 Panel Container \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-fp-panel {
  position: fixed;
  z-index: 1000;
  width: 380px;
  max-width: 95vw;
  max-height: 420px;
  overflow-y: auto;
  background-color: var(--background-primary);
  border: 1px solid var(--background-modifier-border);
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.14), 0 2px 6px rgba(0, 0, 0, 0.08);
  padding: 0;
}

/* Scrollbar */
.vaultguard-fp-panel::-webkit-scrollbar { width: 5px; }
.vaultguard-fp-panel::-webkit-scrollbar-thumb {
  background-color: var(--background-modifier-border);
  border-radius: 3px;
}

/* \u2500\u2500\u2500 Panel Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-fp-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px 8px;
  position: sticky;
  top: 0;
  background-color: var(--background-primary);
  z-index: 1;
}

.vaultguard-fp-header h4 {
  margin: 0;
  font-size: 0.95em;
  font-weight: 700;
}

.vaultguard-fp-filepath {
  padding: 0 14px 8px;
  font-family: var(--font-monospace);
  font-size: 0.78em;
  color: var(--text-faint);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.vaultguard-fp-divider {
  margin: 0;
  border: none;
  border-top: 1px solid var(--background-modifier-border);
}

/* \u2500\u2500\u2500 Rule List \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-fp-list {
  padding: 4px 0;
}

.vaultguard-fp-empty {
  padding: 20px 14px;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.84em;
  line-height: 1.5;
}

.vaultguard-fp-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  transition: background-color 0.1s;
}

.vaultguard-fp-row:hover {
  background-color: var(--background-modifier-hover);
}

/* Avatar */
.vaultguard-fp-row-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: var(--background-modifier-hover);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--text-muted);
}

.vaultguard-fp-row-avatar svg {
  width: 14px;
  height: 14px;
}

.vaultguard-fp-row-initials {
  font-size: 0.72em;
  font-weight: 700;
  color: var(--text-normal);
}

/* Info */
.vaultguard-fp-row-info {
  flex: 1;
  min-width: 0;
}

.vaultguard-fp-row-name {
  font-size: 0.88em;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.vaultguard-fp-row-meta {
  font-size: 0.75em;
  color: var(--text-faint);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Level controls */
.vaultguard-fp-row-level {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
}

.vaultguard-fp-level-select {
  padding: 3px 6px;
  border: 1px solid var(--background-modifier-border);
  border-radius: 4px;
  background-color: var(--background-primary);
  color: var(--text-normal);
  font-size: 0.78em;
  cursor: pointer;
}

.vaultguard-fp-level-select:focus {
  border-color: var(--interactive-accent);
  outline: none;
}

.vaultguard-fp-row-level .vaultguard-icon-btn {
  padding: 3px;
}

.vaultguard-fp-row-level .vaultguard-icon-btn svg {
  width: 13px;
  height: 13px;
}

/* \u2500\u2500\u2500 Add Rule Section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-fp-add {
  padding: 10px 14px 14px;
}

.vaultguard-fp-add-title {
  font-size: 0.8em;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 8px;
}

.vaultguard-fp-add-form {
  display: flex;
  gap: 4px;
  align-items: center;
  flex-wrap: wrap;
}

.vaultguard-fp-add-input {
  padding: 4px 8px;
  border: 1px solid var(--background-modifier-border);
  border-radius: 4px;
  background-color: var(--background-primary);
  color: var(--text-normal);
  font-size: 0.82em;
}

.vaultguard-fp-add-input:focus {
  border-color: var(--interactive-accent);
  outline: none;
}

.vaultguard-fp-add-principal {
  flex: 1;
  min-width: 100px;
}

.vaultguard-fp-add-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: 1px solid var(--interactive-accent);
  border-radius: 6px;
  background-color: var(--interactive-accent);
  color: var(--text-on-accent);
  cursor: pointer;
  transition: opacity 0.12s;
  flex-shrink: 0;
}

.vaultguard-fp-add-btn:hover {
  opacity: 0.85;
}

.vaultguard-fp-add-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.vaultguard-fp-add-btn svg {
  width: 14px;
  height: 14px;
}

/* \u2500\u2500\u2500 Shared Access Picker \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-access-picker {
  margin-top: 14px;
  padding: 14px;
  border-radius: 12px;
  background-color: var(--background-secondary-alt);
}

.vaultguard-access-picker-note {
  margin: 0 0 10px;
  padding: 0 2px;
  font-size: 0.76em;
  color: var(--text-muted);
}

.vaultguard-access-picker-state {
  padding: 10px 12px;
  border: 1px dashed var(--background-modifier-border);
  border-radius: 10px;
  background-color: var(--background-primary);
  color: var(--text-muted);
  font-size: 0.78em;
  line-height: 1.45;
}

.vaultguard-access-picker-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 210px;
  overflow-y: auto;
  padding-right: 4px;
}

.vaultguard-access-picker-item {
  appearance: none;
  -webkit-appearance: none;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 52px;
  margin: 0;
  box-sizing: border-box;
  padding: 12px 14px;
  border: 1px solid var(--background-modifier-border);
  border-radius: 10px;
  background-color: var(--background-secondary);
  color: var(--text-normal);
  text-align: left;
  font: inherit;
  line-height: 1.2;
  vertical-align: top;
  cursor: pointer;
  overflow: hidden;
  transition: border-color 0.12s, background-color 0.12s, transform 0.12s;
}

.vaultguard-access-picker-item:hover:not(:disabled) {
  border-color: var(--interactive-accent);
  background-color: var(--background-modifier-hover);
  transform: translateY(-1px);
}

.vaultguard-access-picker-item.is-selected {
  border-color: var(--interactive-accent);
  background-color: var(--background-modifier-hover);
}

.vaultguard-access-picker-item.is-disabled,
.vaultguard-access-picker-item:disabled {
  cursor: not-allowed;
  opacity: 0.75;
}

.vaultguard-access-picker-avatar {
  width: 28px;
  height: 28px;
  min-width: 28px;
  min-height: 28px;
  max-width: 28px;
  max-height: 28px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: var(--background-modifier-hover);
  box-sizing: border-box;
  overflow: hidden;
  display: grid;
  place-items: center;
  align-self: center;
  flex-shrink: 0;
  font-size: 0.68em;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.02em;
  color: var(--text-normal);
}

.vaultguard-access-picker-avatar span {
  display: block;
  line-height: 1;
}

.vaultguard-access-picker-body {
  flex: 1;
  min-width: 0;
}

.vaultguard-access-picker-name {
  font-size: 0.86em;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.vaultguard-access-picker-meta {
  font-size: 0.74em;
  color: var(--text-faint);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.vaultguard-access-picker-pill {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 999px;
  background-color: var(--background-modifier-hover);
  color: var(--text-muted);
  font-size: 0.72em;
  font-weight: 700;
  white-space: nowrap;
}

.vaultguard-access-picker-pill-level-admin {
  background-color: rgba(var(--color-purple-rgb), 0.15);
  color: var(--color-purple);
}

.vaultguard-access-picker-pill-level-write {
  background-color: rgba(var(--color-blue-rgb), 0.15);
  color: var(--color-blue);
}

.vaultguard-access-picker-pill-level-read {
  background-color: rgba(var(--color-green-rgb), 0.15);
  color: var(--color-green);
}

.vaultguard-access-picker-pill-level-none {
  background-color: rgba(var(--color-red-rgb), 0.15);
  color: var(--color-red);
}

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   Path Permissions Modal \u2014 right-click context menu modal
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

.modal.vaultguard-path-perms-modal {
  width: 480px !important;
  max-width: 92vw !important;
  max-height: 80vh;
  padding: 0 !important;
}

.modal.vaultguard-path-perms-modal .modal-content,
.vaultguard-path-perms-content {
  width: 100% !important;
  max-width: 100% !important;
  box-sizing: border-box;
  margin: 0 !important;
  padding: 20px 24px 16px !important;
  overflow-y: auto;
}

/* \u2500\u2500\u2500 Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-pp-header {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
}

.vaultguard-pp-header-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background-color: var(--background-secondary);
  color: var(--text-muted);
  flex-shrink: 0;
}

.vaultguard-pp-header-icon svg {
  width: 18px;
  height: 18px;
}

.vaultguard-pp-header-text {
  min-width: 0;
}

.vaultguard-pp-header-text h3 {
  margin: 0 0 2px;
  font-size: 1.1em;
  font-weight: 700;
}

.vaultguard-pp-path {
  font-family: var(--font-monospace);
  font-size: 0.82em;
  color: var(--text-faint);
  word-break: break-all;
  line-height: 1.3;
}

/* \u2500\u2500\u2500 My Access \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-pp-my-access {
  padding: 10px 14px;
  margin-bottom: 16px;
  border-radius: 8px;
  background-color: var(--background-secondary);
}

.vaultguard-pp-my-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.vaultguard-pp-my-icon {
  display: flex;
  align-items: center;
  color: var(--text-muted);
}

.vaultguard-pp-my-icon svg {
  width: 15px;
  height: 15px;
}

.vaultguard-pp-my-label {
  font-size: 0.88em;
  color: var(--text-muted);
  font-weight: 500;
}

/* \u2500\u2500\u2500 Sections \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-pp-section {
  margin-bottom: 12px;
}

.vaultguard-pp-section-title {
  font-size: 0.78em;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 8px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--background-modifier-border);
}

/* \u2500\u2500\u2500 Rule List \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-pp-list {
  margin-bottom: 4px;
}

.vaultguard-pp-empty {
  padding: 16px 0;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.84em;
  line-height: 1.5;
}

.vaultguard-pp-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 4px;
  border-radius: 4px;
  transition: background-color 0.1s;
}

.vaultguard-pp-row:hover {
  background-color: var(--background-modifier-hover);
}

/* Avatar */
.vaultguard-pp-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--background-modifier-hover);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--text-muted);
}

.vaultguard-pp-avatar svg {
  width: 14px;
  height: 14px;
}

.vaultguard-pp-initials {
  font-size: 0.72em;
  font-weight: 700;
  color: var(--text-normal);
}

/* Info */
.vaultguard-pp-info {
  flex: 1;
  min-width: 0;
}

.vaultguard-pp-name {
  font-size: 0.88em;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.vaultguard-pp-meta {
  font-size: 0.75em;
  color: var(--text-faint);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Level */
.vaultguard-pp-level {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
}

.vaultguard-pp-select {
  padding: 3px 8px;
  border: 1px solid var(--background-modifier-border);
  border-radius: 4px;
  background-color: var(--background-primary);
  color: var(--text-normal);
  font-size: 0.8em;
  cursor: pointer;
}

.vaultguard-pp-select:focus {
  border-color: var(--interactive-accent);
  outline: none;
}

.vaultguard-pp-level .vaultguard-icon-btn {
  padding: 3px;
}

.vaultguard-pp-level .vaultguard-icon-btn svg {
  width: 13px;
  height: 13px;
}

/* \u2500\u2500\u2500 Add Form \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-pp-add-form {
  display: flex;
  gap: 6px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 8px;
}

.vaultguard-pp-input {
  padding: 5px 8px;
  border: 1px solid var(--background-modifier-border);
  border-radius: 4px;
  background-color: var(--background-primary);
  color: var(--text-normal);
  font-size: 0.84em;
}

.vaultguard-pp-input:focus {
  border-color: var(--interactive-accent);
  outline: none;
}

.vaultguard-pp-input-principal {
  flex: 1;
  min-width: 100px;
}

/* \u2500\u2500\u2500 Advanced Link \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-pp-advanced {
  padding-top: 4px;
}

.vaultguard-pp-advanced-btn {
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 0.78em;
  cursor: pointer;
  padding: 2px 0;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.vaultguard-pp-advanced-btn:hover {
  color: var(--interactive-accent);
}

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   File Explorer Decorations \u2014 badges, dots, and avatar stacks
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

/* \u2500\u2500\u2500 Decoration Container \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-fe-decoration {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;
  padding-left: 6px;
  flex-shrink: 0;
  min-width: max-content;
  white-space: nowrap;
  pointer-events: auto;
}

/* Make nav items flex so decoration pushes to the right */
.nav-file-title,
.nav-folder-title,
.workspace-leaf-content[data-type="file-explorer"] .tree-item-self[data-path],
.workspace-leaf-content[data-type="file-explorer"] .nav-file-title,
.workspace-leaf-content[data-type="file-explorer"] .nav-folder-title {
  display: flex;
  align-items: center;
  min-width: 0;
  overflow: visible;
}

.nav-file-title .nav-file-title-content,
.nav-folder-title .nav-folder-title-content,
.nav-file-title .tree-item-inner,
.nav-folder-title .tree-item-inner,
.workspace-leaf-content[data-type="file-explorer"] .tree-item-self[data-path] .tree-item-inner {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* \u2500\u2500\u2500 Permission Level Dot \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-fe-level-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
  display: inline-block;
}

.vaultguard-fe-dot-admin {
  background-color: var(--color-purple);
  box-shadow: 0 0 3px var(--color-purple);
}

.vaultguard-fe-dot-write {
  background-color: var(--color-blue);
  box-shadow: 0 0 3px var(--color-blue);
}

.vaultguard-fe-dot-read {
  background-color: var(--color-green);
  box-shadow: 0 0 3px var(--color-green);
}

.vaultguard-fe-dot-none {
  background-color: var(--color-red);
  box-shadow: 0 0 3px var(--color-red);
}

.vaultguard-fe-dot-unknown {
  background-color: var(--text-faint);
  box-shadow: none;
}

/* \u2500\u2500\u2500 Sharing Indicator \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-fe-share-indicator {
  display: inline-flex;
  align-items: center;
  flex: 0 0 auto;
}

.vaultguard-fe-avatar-stack {
  display: inline-flex;
  align-items: center;
  flex-direction: row-reverse;
  flex: 0 0 auto;
  min-width: max-content;
}

.vaultguard-fe-mini-avatar {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 7px;
  font-weight: 700;
  color: var(--text-on-accent);
  margin-left: -4px;
  border: 1.5px solid var(--background-primary);
  flex-shrink: 0;
  line-height: 1;
  overflow: hidden;
}

.vaultguard-fe-mini-avatar:last-child {
  margin-left: 0;
}

.vaultguard-fe-mini-avatar svg {
  width: 9px;
  height: 9px;
}

.vaultguard-fe-avatar-admin {
  background-color: var(--color-purple);
}

.vaultguard-fe-avatar-write {
  background-color: var(--color-blue);
}

.vaultguard-fe-avatar-read {
  background-color: var(--color-green);
}

.vaultguard-fe-avatar-none {
  background-color: var(--text-faint);
}

/* Files and folders the current user has no permission on are hidden
   from the explorer entirely. Folders are only hidden when no descendant
   grants access \u2014 otherwise we'd hide a folder containing accessible
   children. The class is applied to .nav-file-title / .nav-folder-title;
   hide the matching wrapper so the row collapses cleanly. */
.nav-file:has(.nav-file-title.vaultguard-fe-hidden),
.nav-file-title.vaultguard-fe-hidden,
.nav-folder:has(> .nav-folder-title.vaultguard-fe-hidden),
.nav-folder-title.vaultguard-fe-hidden,
.workspace-leaf-content[data-type="file-explorer"] .tree-item-self.vaultguard-fe-hidden {
  display: none !important;
}

.vaultguard-fe-avatar-overflow {
  font-size: 8px;
  color: var(--text-muted);
  margin-left: 2px;
  white-space: nowrap;
}

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   VaultGuard Sidebar View \u2014 detailed permission panel
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

/* \u2500\u2500\u2500 Container \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-sidebar {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

/* \u2500\u2500\u2500 Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-sb-header {
  padding: 12px 12px 8px;
  border-bottom: 1px solid var(--background-modifier-border);
  flex-shrink: 0;
}

.vaultguard-sb-title-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}

.vaultguard-sb-title-icon {
  display: flex;
  align-items: center;
  color: var(--interactive-accent);
}

.vaultguard-sb-title-icon svg {
  width: 18px;
  height: 18px;
}

.vaultguard-sb-title-text {
  font-size: 1em;
  font-weight: 700;
  flex: 1;
}

.vaultguard-sb-menu-btn,
.vaultguard-sb-refresh-btn {
  color: var(--text-muted);
}

.vaultguard-sb-menu-btn:hover,
.vaultguard-sb-refresh-btn:hover {
  color: var(--text-normal);
}

/* \u2500\u2500\u2500 Search \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-sb-search-row {
  margin-bottom: 8px;
}

.vaultguard-sb-search-wrap {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid var(--background-modifier-border);
  border-radius: 6px;
  background-color: var(--background-primary);
  transition: border-color 0.1s ease, box-shadow 0.1s ease;
  box-sizing: border-box;
}

.vaultguard-sb-search-wrap:focus-within {
  border-color: var(--interactive-accent);
  box-shadow: 0 0 0 2px rgba(var(--interactive-accent-rgb), 0.12);
}

.vaultguard-sb-search-icon {
  display: flex;
  align-items: center;
  color: var(--text-faint);
  padding-left: 8px;
  flex-shrink: 0;
  pointer-events: none;
}

.vaultguard-sb-search-icon svg {
  width: 14px;
  height: 14px;
}

.vaultguard-sb-search {
  flex: 1;
  min-width: 0;
  padding: 6px 6px 6px 6px;
  border: none;
  background: transparent;
  color: var(--text-normal);
  font-size: 0.85em;
  outline: none;
  box-shadow: none;
  box-sizing: border-box;
}

.vaultguard-sb-search:focus {
  outline: none;
  box-shadow: none;
}

.vaultguard-sb-search::placeholder {
  color: var(--text-faint);
}

.vaultguard-sb-search-clear {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-right: 4px;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: 4px;
  color: var(--text-faint);
  cursor: pointer;
  flex-shrink: 0;
  box-shadow: none;
}

.vaultguard-sb-search-clear:hover {
  background-color: var(--background-modifier-hover);
  color: var(--text-normal);
}

.vaultguard-sb-search-clear svg {
  width: 12px;
  height: 12px;
}

/* \u2500\u2500\u2500 Filters \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-sb-filter-row {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 4px;
}

.vaultguard-sb-filter-row:last-child {
  margin-bottom: 0;
}

.vaultguard-sb-filter-select {
  padding: 4px 6px;
  border: 1px solid var(--background-modifier-border);
  border-radius: 4px;
  background-color: var(--background-primary);
  color: var(--text-normal);
  font-size: 0.8em;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  max-width: 50%;
}

.vaultguard-sb-filter-select:focus {
  border-color: var(--interactive-accent);
  outline: none;
}

.vaultguard-sb-filter-toggle {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.8em;
  color: var(--text-muted);
  cursor: pointer;
  user-select: none;
}

.vaultguard-sb-filter-toggle input[type="checkbox"] {
  margin: 0;
}

/* \u2500\u2500\u2500 Active filter chips \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-sb-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 6px;
}

.vaultguard-sb-chips:empty {
  display: none;
}

.vaultguard-sb-chip {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 2px 4px 2px 8px;
  background-color: rgba(var(--interactive-accent-rgb), 0.12);
  color: var(--interactive-accent);
  border-radius: 10px;
  font-size: 0.72em;
  font-weight: 500;
  max-width: 100%;
}

.vaultguard-sb-chip-label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 180px;
}

.vaultguard-sb-chip-clear {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: 50%;
  color: inherit;
  cursor: pointer;
  opacity: 0.7;
  box-shadow: none;
}

.vaultguard-sb-chip-clear:hover {
  background-color: rgba(var(--interactive-accent-rgb), 0.2);
  opacity: 1;
}

.vaultguard-sb-chip-clear svg {
  width: 10px;
  height: 10px;
}

.vaultguard-sb-chip-clear-all {
  align-self: center;
  margin-left: auto;
  padding: 2px 8px;
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-size: 0.72em;
  font-weight: 500;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: none;
}

.vaultguard-sb-chip-clear-all:hover {
  background-color: var(--background-modifier-hover);
  color: var(--text-normal);
}

/* \u2500\u2500\u2500 Search-term highlighting in entries \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-sb-match {
  background-color: rgba(var(--interactive-accent-rgb), 0.22);
  color: var(--text-normal);
  border-radius: 2px;
  padding: 0 1px;
}

/* \u2500\u2500\u2500 Empty-state action \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-sb-empty-action {
  margin-top: 12px;
  padding: 4px 12px;
  background: transparent;
  border: 1px solid var(--background-modifier-border);
  border-radius: 4px;
  color: var(--text-normal);
  font-size: 0.8em;
  cursor: pointer;
  box-shadow: none;
}

.vaultguard-sb-empty-action:hover {
  border-color: var(--interactive-accent);
  color: var(--interactive-accent);
}

/* \u2500\u2500\u2500 Entry List \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-sb-list {
  flex: 1;
  overflow-y: auto;
  min-height: 0;
}

.vaultguard-sb-list::-webkit-scrollbar {
  width: 5px;
}

.vaultguard-sb-list::-webkit-scrollbar-thumb {
  background-color: var(--background-modifier-border);
  border-radius: 3px;
}

/* \u2500\u2500\u2500 Summary Bar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-sb-summary {
  display: flex;
  gap: 12px;
  padding: 8px 12px;
  font-size: 0.78em;
  color: var(--text-muted);
  border-bottom: 1px solid var(--background-modifier-border);
}

.vaultguard-sb-summary-shared {
  color: var(--color-blue);
}

/* \u2500\u2500\u2500 Loading / Empty \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-sb-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 32px 16px;
  color: var(--text-muted);
  font-size: 0.88em;
}

.vaultguard-sb-spinner svg {
  width: 16px;
  height: 16px;
  animation: vaultguard-spin 1s linear infinite;
}

/* Inline spinner inside a button keeps the text baseline aligned. */
.vaultguard-btn-spinner {
  display: inline-flex;
  align-items: center;
  margin-right: 6px;
  vertical-align: middle;
}

.vaultguard-btn-spinner svg {
  width: 14px;
  height: 14px;
}

button .vaultguard-btn-spinner:only-child {
  margin-right: 0;
}

@keyframes vaultguard-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.vaultguard-sb-empty {
  text-align: center;
  padding: 32px 16px;
  color: var(--text-muted);
  font-size: 0.85em;
}

.vaultguard-sb-empty-icon {
  margin-bottom: 12px;
  color: var(--text-faint);
}

.vaultguard-sb-empty-icon svg {
  width: 32px;
  height: 32px;
}

.vaultguard-sb-empty-hint {
  font-size: 0.78em;
  color: var(--text-faint);
  margin-top: 8px;
}

/* \u2500\u2500\u2500 File Entry \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-sb-entry {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.1s;
  border-bottom: 1px solid var(--background-modifier-border);
}

.vaultguard-sb-entry:last-child {
  border-bottom: none;
}

.vaultguard-sb-entry:hover {
  background-color: var(--background-modifier-hover);
}

.vaultguard-sb-entry-left {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  flex: 1;
}

.vaultguard-sb-entry-icon {
  display: flex;
  align-items: center;
  color: var(--text-muted);
  flex-shrink: 0;
}

.vaultguard-sb-entry-icon svg {
  width: 14px;
  height: 14px;
}

.vaultguard-sb-entry-info {
  min-width: 0;
  overflow: hidden;
}

.vaultguard-sb-entry-name {
  font-size: 0.88em;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.vaultguard-sb-entry-path {
  font-size: 0.72em;
  color: var(--text-faint);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: var(--font-monospace);
}

/* \u2500\u2500\u2500 Entry Right Side \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-sb-entry-right {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}

/* \u2500\u2500\u2500 Permission Badge \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-sb-badge {
  display: inline-flex;
  align-items: center;
  padding: 1px 7px;
  border-radius: 8px;
  font-size: 0.65em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
}

.vaultguard-sb-badge-admin {
  background-color: rgba(var(--color-purple-rgb), 0.15);
  color: var(--color-purple);
}

.vaultguard-sb-badge-write {
  background-color: rgba(var(--color-blue-rgb), 0.15);
  color: var(--color-blue);
}

.vaultguard-sb-badge-read {
  background-color: rgba(var(--color-green-rgb), 0.15);
  color: var(--color-green);
}

.vaultguard-sb-badge-none {
  background-color: rgba(var(--color-red-rgb), 0.15);
  color: var(--color-red);
}

/* \u2500\u2500\u2500 Avatar Stack \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-sb-avatars {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
}

.vaultguard-sb-avatar {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  font-weight: 700;
  color: var(--text-on-accent);
  margin-left: -5px;
  border: 2px solid var(--background-primary);
  flex-shrink: 0;
  line-height: 1;
  overflow: hidden;
}

.vaultguard-sb-avatar:last-child {
  margin-left: 0;
}

.vaultguard-sb-avatar svg {
  width: 10px;
  height: 10px;
}

.vaultguard-sb-avatar-admin {
  background-color: var(--color-purple);
}

.vaultguard-sb-avatar-write {
  background-color: var(--color-blue);
}

.vaultguard-sb-avatar-read {
  background-color: var(--color-green);
}

.vaultguard-sb-avatar-none {
  background-color: var(--text-faint);
}

.vaultguard-sb-avatar-overflow {
  font-size: 9px;
  color: var(--text-muted);
  margin-left: 3px;
  white-space: nowrap;
}

/* \u2500\u2500\u2500 Plugin allowlist consent modal \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-plugin-allowlist-modal .modal {
  max-width: 540px;
}

.vaultguard-allowlist-meta {
  margin: 12px 0;
  padding: 10px 12px;
  background-color: var(--background-secondary);
  border-radius: 6px;
  font-size: 13px;
}

.vaultguard-allowlist-row {
  display: flex;
  gap: 6px;
  margin: 2px 0;
}

.vaultguard-allowlist-row strong {
  min-width: 90px;
  color: var(--text-muted);
  font-weight: 500;
}

.vaultguard-allowlist-status {
  margin: 12px 0;
  padding: 10px 12px;
  background-color: var(--background-modifier-form-field);
  border-left: 3px solid var(--text-accent);
  border-radius: 0 6px 6px 0;
  font-size: 13px;
}

.vaultguard-allowlist-status details {
  margin-top: 8px;
}

.vaultguard-allowlist-status code,
.vaultguard-allowlist-status p {
  word-break: break-all;
  font-size: 11px;
  font-family: var(--font-monospace);
}

.vaultguard-allowlist-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  margin-top: 16px;
}

/* \u2500\u2500 At-rest encryption \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.vaultguard-at-rest-panel {
  margin: 10px 0 20px;
  padding: 14px 16px 4px;
  background: var(--background-secondary);
  border: 1px solid var(--background-modifier-border);
  border-radius: 8px;
}

.vaultguard-at-rest-status {
  padding: 10px 12px;
  border-radius: 6px;
  margin-bottom: 10px;
  font-size: 13px;
  line-height: 1.5;
  color: var(--text-muted);
  background: var(--background-primary);
  border: 1px solid var(--background-modifier-border);
  border-left-width: 3px;
}

.vaultguard-at-rest-status-unlocked {
  color: var(--text-muted);
  background: var(--background-primary);
  border-left-color: var(--color-green, var(--text-success));
}

.vaultguard-at-rest-status-warning {
  color: var(--text-muted);
  background: var(--background-primary);
  border-left-color: var(--text-warning);
}

.vaultguard-at-rest-status-needs-recovery,
.vaultguard-at-rest-status-disabled {
  color: var(--text-error);
  background: var(--background-modifier-error);
  border-left-color: var(--text-error);
}

.vaultguard-at-rest-status-title {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  width: fit-content;
  margin-bottom: 3px;
  padding: 1px 7px;
  border-radius: 999px;
  background: var(--background-secondary);
  font-weight: 700;
  color: var(--text-normal);
}

.vaultguard-at-rest-status-title::before {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: var(--text-muted);
  flex: 0 0 auto;
}

.vaultguard-at-rest-status-unlocked .vaultguard-at-rest-status-title {
  color: var(--text-success);
}

.vaultguard-at-rest-status-unlocked .vaultguard-at-rest-status-title::before {
  background: var(--color-green, var(--text-success));
}

.vaultguard-at-rest-status-warning .vaultguard-at-rest-status-title {
  color: var(--text-warning);
}

.vaultguard-at-rest-status-warning .vaultguard-at-rest-status-title::before {
  background: var(--text-warning);
}

.vaultguard-at-rest-status-body {
  margin-top: 2px;
  color: var(--text-muted);
}

.vaultguard-at-rest-tally {
  margin: 0 0 4px;
  padding: 8px 12px;
  background: var(--background-primary);
  border: 1px solid var(--background-modifier-border);
  border-radius: 6px;
  font-size: 12px;
  font-family: var(--font-monospace);
}

.vaultguard-at-rest-tally-warning {
  margin-top: 4px;
  color: var(--text-warning);
  white-space: normal;
}

.vaultguard-at-rest-tally-error {
  color: var(--text-error);
}

.vaultguard-at-rest-action {
  padding: 12px 0;
  border-top: 1px solid var(--background-modifier-border);
}

.vaultguard-at-rest-action:last-child {
  padding-bottom: 0;
}

.vaultguard-at-rest-action .setting-item-control {
  justify-content: flex-end;
}

.vaultguard-recovery-code {
  margin: 16px 0;
  padding: 16px 18px;
  border-radius: 8px;
  background: var(--background-modifier-form-field);
  border: 1px solid var(--background-modifier-border);
  font-family: var(--font-monospace);
  font-size: 14px;
  letter-spacing: 0.04em;
  word-break: break-all;
  white-space: pre-wrap;
  user-select: all;
  -webkit-user-select: all;
  line-height: 1.7;
}

.vaultguard-agent-bridge-connection {
  margin: 12px 0;
  padding: 12px 14px;
  max-height: 240px;
  overflow: auto;
  border-radius: 6px;
  background: var(--background-modifier-form-field);
  border: 1px solid var(--background-modifier-border);
  font-family: var(--font-monospace);
  font-size: 12px;
  line-height: 1.5;
  white-space: pre;
  user-select: all;
  -webkit-user-select: all;
}

.vaultguard-agent-bridge-block {
  margin: 18px 0 4px;
  padding-top: 14px;
  border-top: 1px solid var(--background-modifier-border);
}

.vaultguard-agent-bridge-block:first-of-type {
  border-top: none;
  padding-top: 0;
}

.vaultguard-agent-bridge-block h3 {
  margin: 0 0 4px;
  font-size: 14px;
}

.vaultguard-agent-bridge-server,
.vaultguard-agent-bridge-reveal,
.vaultguard-agent-bridge-lease {
  margin: 12px 0;
  padding: 12px 14px;
  border: 1px solid var(--background-modifier-border);
  border-radius: 8px;
  background: var(--background-secondary);
}

.vaultguard-agent-bridge-inline-actions,
.vaultguard-agent-bridge-lease .vaultguard-modal-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

.vaultguard-agent-bridge-lease-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.vaultguard-agent-bridge-lease-badge {
  flex: 0 0 auto;
  padding: 2px 8px;
  border-radius: 999px;
  background: var(--background-modifier-hover);
  color: var(--text-muted);
  font-size: 11px;
  line-height: 1.5;
}

.vaultguard-agent-bridge-lease-details {
  display: grid;
  grid-template-columns: minmax(80px, max-content) minmax(0, 1fr);
  gap: 4px 12px;
  margin: 10px 0 0;
  font-size: 12px;
}

.vaultguard-agent-bridge-lease-details dt {
  color: var(--text-muted);
}

.vaultguard-agent-bridge-lease-details dd {
  margin: 0;
  min-width: 0;
  overflow-wrap: anywhere;
}

.vaultguard-agent-bridge-copy-block {
  margin-top: 12px;
}

.vaultguard-agent-bridge-copy-block h4 {
  margin: 0 0 4px;
  font-size: 13px;
}

.vaultguard-modal-hint {
  margin: 6px 0 0;
  padding: 0 4px;
  font-size: 12px;
  min-height: 16px;
  line-height: 1.4;
  color: var(--text-muted);
}

.vaultguard-modal-hint-error {
  color: var(--text-error);
}

.vaultguard-modal-hint-warning {
  color: var(--text-warning, var(--color-yellow, #b48a00));
}

.vaultguard-modal-hint-ok {
  color: var(--text-muted);
}

.vaultguard-recovery-code-input {
  width: 100%;
  margin: 12px 0;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid var(--background-modifier-border);
  background: var(--background-modifier-form-field);
  color: var(--text-normal);
  font-family: var(--font-monospace);
  font-size: 13px;
  resize: vertical;
  min-height: 90px;
}

.modal.vaultguard-at-rest-recovery-modal .vaultguard-modal-warning,
.modal.vaultguard-at-rest-restore-modal .vaultguard-modal-warning {
  margin: 12px 0;
  padding: 10px 14px;
  border-radius: 6px;
  background: var(--background-modifier-error-hover);
  color: var(--text-normal);
  font-size: 13px;
  line-height: 1.5;
  border-left: 3px solid var(--text-error);
}

.modal.vaultguard-at-rest-recovery-modal .vaultguard-modal-warning strong,
.modal.vaultguard-at-rest-restore-modal .vaultguard-modal-warning strong {
  color: var(--text-error);
}

.modal.vaultguard-at-rest-recovery-modal .vaultguard-modal-actions,
.modal.vaultguard-at-rest-restore-modal .vaultguard-modal-actions {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 18px;
}

.modal.vaultguard-at-rest-recovery-modal .vaultguard-modal-status,
.modal.vaultguard-at-rest-restore-modal .vaultguard-modal-status {
  min-height: 18px;
  margin: 8px 0;
  font-size: 12px;
  color: var(--text-error);
}

.modal.vaultguard-at-rest-recovery-modal .vaultguard-modal-description,
.modal.vaultguard-at-rest-restore-modal .vaultguard-modal-description {
  margin: 6px 0 14px;
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.5;
}

.modal.vaultguard-at-rest-recovery-modal,
.modal.vaultguard-at-rest-restore-modal {
  width: 560px !important;
  max-width: calc(100vw - 32px) !important;
}

.modal.vaultguard-at-rest-recovery-modal .modal-content,
.modal.vaultguard-at-rest-restore-modal .modal-content {
  padding: 24px !important;
  overflow-x: hidden;
}

@media (max-width: 640px) {
  .vaultguard-at-rest-panel {
    padding: 12px 12px 2px;
  }

  .vaultguard-at-rest-action {
    align-items: stretch;
    flex-direction: column;
  }

  .vaultguard-at-rest-action .setting-item-info,
  .vaultguard-at-rest-action .setting-item-control {
    width: 100%;
  }

  .vaultguard-at-rest-action .setting-item-control {
    margin-top: 10px;
    margin-left: 0;
  }

  .vaultguard-at-rest-action button {
    width: 100%;
  }
}

.vaultguard-confirm-password-input {
  width: 100%;
  margin: 8px 0 4px;
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid var(--background-modifier-border);
  background: var(--background-modifier-form-field);
  color: var(--text-normal);
  font-size: 14px;
}

.vaultguard-at-rest-confirm-modal .modal {
  max-width: 460px;
}

/* Plugin allowlist display */
.vaultguard-allowlist-display {
  font-size: 13px;
  margin-top: 0;
}

.vaultguard-allowlist-hash-pin {
  color: var(--text-success);
  font-size: 12px;
}

/* Inline status message under settings actions */
.vaultguard-status-msg {
  padding: 8px 12px;
  margin-bottom: 8px;
  border-radius: 4px;
  font-size: 13px;
}

.vaultguard-status-msg.is-error {
  background: var(--background-modifier-error);
  color: var(--text-error);
}

.vaultguard-status-msg.is-success {
  background: var(--background-modifier-success);
  color: var(--text-success);
}

/* Inline-save button next to a settings text input */
.vaultguard-inline-save-btn {
  margin-left: 8px;
}

/* Wider monospace textareas for path lists, etc. */
.vaultguard-mono-textarea {
  width: 100%;
  font-family: var(--font-monospace);
  font-size: 12px;
}

/* Notice (toast) action links */
.vaultguard-notice-link {
  cursor: pointer;
  text-decoration: underline;
}

.vaultguard-notice-dismiss {
  cursor: pointer;
  opacity: 0.7;
}

/* Pro-upsell modal \u2014 prominent paywall badge + supporting layout. */
.vaultguard-pro-upsell-badge {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  border: 1px solid var(--interactive-accent);
  background-color: var(--background-secondary);
  text-align: left;
}
.vaultguard-pro-upsell-badge-headline {
  font-size: var(--font-ui-medium, 13px);
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--interactive-accent);
}
.vaultguard-pro-upsell-badge-subline {
  font-size: var(--font-ui-small, 12px);
  font-weight: 500;
  color: var(--text-muted);
}
.vaultguard-pro-upsell-footer {
  font-size: var(--font-ui-small, 12px);
  color: var(--text-muted);
  margin-top: 12px;
}
.vaultguard-pro-upsell-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
}
`;var C=require("obsidian");var K=require("obsidian"),we=class extends K.Modal{constructor(e,t){super(e);this.confirmed=!1;this.opts=t}onOpen(){this.modalEl.addClass("vaultguard-at-rest-confirm-modal");let{contentEl:e}=this;e.empty(),e.createEl("h2",{text:this.opts.title}),e.createEl("p",{text:this.opts.description,cls:"vaultguard-modal-description"});let t=e.createEl("input",{type:"password",cls:"vaultguard-confirm-password-input"});t.placeholder="Account password",t.autocomplete="current-password",setTimeout(()=>t.focus(),50);let r=e.createDiv({cls:"vaultguard-modal-status"}),s=e.createDiv({cls:"vaultguard-modal-actions"});new K.ButtonComponent(s).setButtonText("Cancel").onClick(()=>this.close());let a=new K.ButtonComponent(s);a.setButtonText("Confirm").setCta().onClick(async()=>{let n=t.value;if(!n){r.setText("Enter your account password to continue.");return}a.setDisabled(!0).setButtonText("Verifying\u2026"),r.setText("");try{if(!await this.opts.onVerify(n)){r.setText("Wrong password. Try again."),a.setDisabled(!1).setButtonText("Confirm"),t.select();return}this.confirmed=!0,this.close()}catch(o){r.setText(`Couldn't verify: ${o instanceof Error?o.message:String(o)}`),a.setDisabled(!1).setButtonText("Confirm")}}),t.addEventListener("keydown",n=>{n.key==="Enter"&&(n.preventDefault(),a.buttonEl.click())})}onClose(){this.modalEl.removeClass("vaultguard-at-rest-confirm-modal"),this.contentEl.empty(),this.confirmed&&this.opts.onConfirmed()}},He=class extends K.Modal{constructor(e,t){super(e);this.confirmed=!1;this.code=t.code,this.onSaved=t.onSaved}onOpen(){this.modalEl.addClass("vaultguard-at-rest-recovery-modal");let{contentEl:e}=this;e.empty(),e.createEl("h2",{text:"VaultGuard recovery code"}),e.createEl("p").appendText("This code is unique to this device. It is not shared with other vault members, not stored on the server, and not the same as your account password. It's the only way to read this device's encrypted files if the OS keychain is reset, the disk is moved to another machine, or the plugin is reinstalled.");let r=e.createDiv({cls:"vaultguard-modal-warning"});r.createEl("strong",{text:"Save it now."}),r.appendText(" Store it in a password manager or write it on paper and put it somewhere safe. Anyone who has this code can decrypt the files on this device \u2014 treat it like a master password. VaultGuard will not show it again automatically; you can reopen it from Settings, but you'll be asked for your account password each time."),e.createEl("pre",{cls:"vaultguard-recovery-code"}).setText(this.code);let a=e.createDiv({cls:"vaultguard-modal-actions"}),n=new K.ButtonComponent(a);n.setButtonText("Copy to clipboard").setCta().onClick(async()=>{try{await navigator.clipboard.writeText(this.code),new K.Notice("Recovery code copied to clipboard.",4e3),n.setButtonText("Copied \u2713"),window.setTimeout(()=>n.setButtonText("Copy to clipboard"),2e3)}catch{new K.Notice("Couldn't copy automatically \u2014 select the code above and copy it manually.",6e3)}}),new K.ButtonComponent(a).setButtonText("I've saved my recovery code").onClick(()=>{this.confirmed=!0,this.close()})}onClose(){this.modalEl.removeClass("vaultguard-at-rest-recovery-modal"),this.contentEl.empty(),this.confirmed&&this.onSaved?.()}},qe=class extends K.Modal{constructor(e,t){super(e);this.restored=!1;this.onSubmit=t.onSubmit,this.onRestored=t.onRestored}onOpen(){this.modalEl.addClass("vaultguard-at-rest-restore-modal");let{contentEl:e}=this;e.empty(),e.createEl("h2",{text:"Restore VaultGuard from recovery code"}),e.createEl("p",{text:"Paste the recovery code you saved when you first set up at-rest encryption. After a successful restore your encrypted files will be readable again on this device.",cls:"vaultguard-modal-description"});let t=e.createEl("textarea",{cls:"vaultguard-recovery-code-input"});t.placeholder="VG1-XXXX-XXXX-...-XXXX",t.rows=4,t.setAttribute("autocapitalize","off"),t.setAttribute("autocorrect","off"),t.setAttribute("spellcheck","false");let r=e.createDiv({cls:"vaultguard-modal-status"}),s=e.createDiv({cls:"vaultguard-modal-actions"});new K.ButtonComponent(s).setButtonText("Cancel").onClick(()=>this.close());let a=new K.ButtonComponent(s);a.setButtonText("Restore").setCta().onClick(async()=>{let n=t.value.trim();if(!n){r.setText("Enter a recovery code to continue.");return}a.setButtonText("Restoring\u2026").setDisabled(!0),r.setText("");try{if(!await this.onSubmit(n)){r.setText("That code isn't recognised. Check for typos \u2014 recovery codes start with VG1- and contain hex characters in groups of four."),a.setButtonText("Restore").setDisabled(!1);return}this.restored=!0,new K.Notice("VaultGuard at-rest key restored.",5e3),this.close()}catch(o){r.setText(`Restore failed: ${o instanceof Error?o.message:String(o)}`),a.setButtonText("Restore").setDisabled(!1)}})}onClose(){this.modalEl.removeClass("vaultguard-at-rest-restore-modal"),this.contentEl.empty(),this.restored&&this.onRestored?.()}};var J=require("obsidian");var Pe=class extends J.Modal{constructor(e,t){super(e.app);this.agentName="LLM agent";this.bridgeScope="/**";this.lifetime="30m";this.writeMode="confirm";this.plugin=e,this.onLeaseCreated=t}get persistent(){return this.lifetime==="until-logout"}get ttlMinutes(){switch(this.lifetime){case"30m":return 30;case"1h":return 60;case"2h":return 120;default:return 30}}onOpen(){this.renderForm()}renderForm(){let{contentEl:e}=this;e.empty(),e.createEl("h2",{text:"Create Agent Bridge Lease"}),e.createEl("p",{text:"Mint a short-lived token for an external agent. The agent can only use VaultGuard bridge tools within the scope below; hidden and local-only files remain blocked.",cls:"setting-item-description"});let t=null,r=null,s=()=>{if(!t||!r)return;let a=this.computeValidationState();t.setText(a.message),t.removeClass("vaultguard-modal-hint-error"),t.removeClass("vaultguard-modal-hint-warning"),t.removeClass("vaultguard-modal-hint-ok"),a.severity==="error"?(t.addClass("vaultguard-modal-hint-error"),r.setDisabled(!0)):a.severity==="warning"?(t.addClass("vaultguard-modal-hint-warning"),r.setDisabled(!1)):(t.addClass("vaultguard-modal-hint-ok"),r.setDisabled(!1))};new J.Setting(e).setName("Agent label").setDesc("Shown in write confirmations and logs.").addText(a=>a.setPlaceholder("Claude Code, Codex, local model").setValue(this.agentName).onChange(n=>{this.agentName=n})),new J.Setting(e).setName("Scope").setDesc("Vault-relative path or glob, for example /project-x/**. Use /** only when the agent really needs the whole vault.").addText(a=>a.setPlaceholder("/project-x/**").setValue(this.bridgeScope).onChange(n=>{this.bridgeScope=n,s()})),new J.Setting(e).setName("Lifetime").setDesc("Time-limited leases live in memory only and expire on the clock. 'Until logout' leases are persistent \u2014 they survive Obsidian restarts (encrypted on disk via the at-rest cipher) and end when you log out. Persistent leases require re-auth and cannot use 'Allow writes'.").addDropdown(a=>a.addOption("30m","30 minutes").addOption("1h","1 hour").addOption("2h","2 hours (max time-limited)").addOption("until-logout","Until logout (persistent)").setValue(this.lifetime).onChange(n=>{this.lifetime=n,s()})),new J.Setting(e).setName("Writes").setDesc("Use confirmation unless you are running a fully trusted local model on a narrow scope.").addDropdown(a=>a.addOption("confirm","Ask before each write").addOption("deny","Read-only").addOption("allow","Allow writes").setValue(this.writeMode).onChange(n=>{this.writeMode=n,s()})),t=e.createDiv({cls:"vaultguard-modal-hint"}),new J.Setting(e).addButton(a=>{r=a,a.setButtonText("Create lease").setCta().onClick(async()=>{a.setDisabled(!0).setButtonText("Creating...");let n=null;try{if(this.persistent&&!await this.confirmPersistentReauth()){a.setDisabled(!1).setButtonText("Create lease");return}n=await this.plugin.createAgentBridgeLease({agentName:this.agentName,scope:this.bridgeScope,ttlMinutes:this.ttlMinutes,writeMode:this.writeMode,persistent:this.persistent});let o=await this.plugin.startAgentBridgeServer(),l={endpoint:o.endpoint,mcpEndpoint:o.mcpEndpoint,token:n.token,leaseId:n.leaseId,expiresAt:n.expiresAt,tools:o.tools};this.renderConnection(l,n),this.onLeaseCreated?.()}catch(o){n&&this.plugin.revokeAgentBridgeLease(n.leaseId),new J.Notice(`VaultGuard: Could not create agent bridge lease - ${o instanceof Error?o.message:String(o)}`,1e4),a.setDisabled(!1).setButtonText("Create lease")}})}).addButton(a=>a.setButtonText("Cancel").onClick(()=>this.close())),s()}computeValidationState(){if(!this.persistent)return{severity:"ok",message:""};let e=this.bridgeScope.trim();return e?this.writeMode==="allow"?{severity:"error",message:'Persistent leases cannot use "Allow writes" \u2014 long-lived silent writes change the safety property. Pick "Read-only" or "Ask before each write".'}:e==="/**"||e==="**"?{severity:"warning",message:"Heads up: this gives the agent access to every non-hidden file in this vault until you log out. The re-auth gate confirms you're sure."}:{severity:"ok",message:""}:{severity:"error",message:"Persistent leases need a scope. Try /** for the whole vault or /project-x/** for a folder."}}renderConnection(e,t){let{contentEl:r}=this;r.empty(),r.createEl("h2",{text:"Agent bridge lease ready"}),r.createEl("p").appendText(`Lease for "${t.agentName}" created. Scope: ${t.scopes.join(", ")}. Write mode: ${t.writeMode}. Expires ${t.expiresAt}. Hand the agent only the snippets below \u2014 never the LAK, recovery code, or the vault folder itself.`);let a=JSON.stringify(e,null,2),n=this.buildMcpServerConfig(e);this.renderCopyableBlock(r,{title:"Generic agent connection (custom HTTP-RPC)",description:"For agents you wrote yourself or that target VaultGuard's plain HTTP-RPC at /rpc. Paste this JSON wherever your agent expects its connection settings.",json:a,copyLabel:"Copy connection JSON"}),this.renderCopyableBlock(r,{title:"Claudian / Claude Code MCP server",description:"Paste this snippet into Claudian's MCP servers settings (or into a Claude Code .mcp.json) to expose VaultGuard as an MCP server. After installing, author a slash command with `allowed-tools: mcp__vaultguard__*` so the CLI uses the bridge tools instead of its built-in Read/Glob/Grep against the encrypted vault folder.",json:n,copyLabel:"Copy MCP config"});let o=r.createDiv({cls:"vaultguard-modal-actions"});new J.ButtonComponent(o).setButtonText("Done").setCta().onClick(()=>this.close())}confirmPersistentReauth(){let e=this.bridgeScope.trim(),r=e==="/**"||e==="**"?`This persistent lease will give "${this.agentName}" access to every non-hidden file in this vault until you log out, surviving Obsidian restarts. Writes still go through ${this.writeMode==="deny"?"read-only enforcement":"per-file confirmation"}. Re-enter your VaultGuard password to confirm.`:`This persistent lease will let "${this.agentName}" use scope ${e} until you log out, surviving Obsidian restarts. Writes still go through ${this.writeMode==="deny"?"read-only enforcement":"per-file confirmation"}. Re-enter your VaultGuard password to confirm.`;return new Promise(s=>{let a=new we(this.app,{title:"Confirm persistent agent bridge lease",description:r,onVerify:o=>this.plugin.verifyAccountPassword(o),onConfirmed:()=>s(!0)}),n=a.onClose.bind(a);a.onClose=()=>{n(),setTimeout(()=>s(!1),0)},a.open()})}buildMcpServerConfig(e){return JSON.stringify({mcpServers:{vaultguard:{type:"http",url:e.mcpEndpoint,headers:{Authorization:`Bearer ${e.token}`,"X-VaultGuard-Lease":e.leaseId}}}},null,2)}renderCopyableBlock(e,t){let r=e.createDiv({cls:"vaultguard-agent-bridge-block"});r.createEl("h3",{text:t.title}),r.createEl("p",{text:t.description,cls:"setting-item-description"});let s=r.createEl("pre",{cls:"vaultguard-agent-bridge-connection"});s.setText(t.json);let a=r.createDiv({cls:"vaultguard-modal-actions"}),n=new J.ButtonComponent(a);n.setButtonText(t.copyLabel).onClick(async()=>{try{await navigator.clipboard.writeText(t.json),new J.Notice(`${t.title} copied to clipboard.`,4e3),n.setButtonText("Copied \u2713"),window.setTimeout(()=>n.setButtonText(t.copyLabel),2e3)}catch{let o=document.createRange();o.selectNodeContents(s);let l=window.getSelection();l?.removeAllRanges(),l?.addRange(o),new J.Notice("Couldn't copy automatically \u2014 the JSON is selected, press Cmd/Ctrl+C.",6e3)}})}};var Dt={shareLinks:!0,advancedAudit:!0,billing:!0,webAdmin:!0};var te={apiEndpoint:"https://api.vaultguard.cloud",cognitoUserPoolId:"eu-central-1_M5gA8YyG3",cognitoClientId:"3t7b08ka3ropqm7c5ta7j6sipv",fallbackApiUrl:"https://api.vaultguard.cloud",websiteHostnames:["vaultguard.cloud","www.vaultguard.cloud","admin.vaultguard.cloud"],apiHostname:"api.vaultguard.cloud"};var Vt=[".obsidian/workspace.json",".obsidian/workspace-mobile.json",".obsidian/cache",".obsidian/plugins",".obsidian/community-plugins.json",".trash"],Bt={orgSlug:"",serverVaultId:"",apiEndpoint:"",organizationId:"",cognitoUserPoolId:"",cognitoClientId:"",syncInterval:30,cacheEncryptionStrength:"standard",offlineKeyLeaseDuration:24,autoWipeOnAuthFailure:!1,showPermissionIndicators:!0,defaultConflictResolution:"ask_user",debugLogging:!1,maxRetryAttempts:3,showStatusBar:!0,excludedPaths:[...Vt]},Ut={team:"Team",personal:"Personal",shared:"Shared"},ce={viewer:"Viewer (read only)",editor:"Editor (read + write)",admin:"Admin (full control)"},hi=["team","personal","shared"],We=["viewer","editor","admin"],je=class extends C.PluginSettingTab{constructor(e,t){super(e,t);this.latestAgentBridgeReveal=null;this.plugin=t}renderPluginAllowlistSection(e){let t=this.plugin.settings.serverPluginAllowlist??[],r=this.plugin.settings.pluginAllowlistIgnored??[];if(!(t.length===0&&r.length===0)){if(new C.Setting(e).setName("Plugin allowlist (vault-wide)").setDesc("Plugins your vault admin has approved for the team. Each entry prompts you for consent once before being enabled in Obsidian; bytes themselves arrive via the regular sync channel.").addButton(s=>s.setButtonText("Re-check vault plugins").onClick(async()=>{try{s.setDisabled(!0),await this.plugin.runPluginAllowlistReconciliation(),this.showStatus(e,"Plugin allowlist reconciled.",!1)}catch(a){this.showStatus(e,a instanceof Error?a.message:"Reconcile failed.",!0)}finally{s.setDisabled(!1)}})),t.length>0){let s=e.createEl("ul",{cls:"vaultguard-allowlist-display"});for(let a of t){let n=s.createEl("li");n.createEl("strong",{text:a.displayName}),a.version&&n.createSpan({text:` (v${a.version})`}),n.createSpan({text:` \u2014 ${a.pluginId}`}),a.bundleSha256&&n.createSpan({text:" \xB7 \u{1F512} hash-pinned",cls:"vaultguard-allowlist-hash-pin"})}}if(r.length>0){new C.Setting(e).setName("Ignored plugins on this device").setDesc("Plugins you previously chose 'Don't ask again' for. Unmute one to be re-prompted on the next reconciliation.");for(let s of r)new C.Setting(e).setName(s).addButton(a=>a.setButtonText("Unmute").onClick(async()=>{this.plugin.settings.pluginAllowlistIgnored=(this.plugin.settings.pluginAllowlistIgnored??[]).filter(n=>n!==s),await this.plugin.saveSettings(),this.display()}))}}}showStatus(e,t,r){let s=e.querySelector(".vaultguard-status-msg");s&&s.remove();let a=e.createDiv({cls:"vaultguard-status-msg"});a.addClass(r?"is-error":"is-success"),a.setText(t),setTimeout(()=>a.remove(),6e3)}renderAtRestSection(e){e.createEl("h2",{text:"Local at-rest encryption"});let t=C.Platform.isMobileApp?"Vault files on this device are encrypted on disk with a per-device key kept in this app's secure storage. Without VaultGuard Sync running, the files on disk are ciphertext \u2014 useful if your phone backs up app data to iCloud / Google Drive.":"Vault files on this device are encrypted on disk with a key bound to your OS keychain (or, if unavailable, a per-device key). Without VaultGuard Sync running, opening files in Finder shows ciphertext.";e.createEl("p",{text:t,cls:"setting-item-description"});let r=this.plugin.getAtRestStatus(),s=e.createDiv({cls:"vaultguard-at-rest-panel"});this.renderAtRestStatusBadge(s,r);let a=s.createDiv({cls:"vaultguard-at-rest-tally setting-item-description"});a.setText("Counting files\u2026"),this.plugin.tallyAtRestState().then(v=>{let A=`${v.encrypted} encrypted, ${v.plaintext} plaintext, ${v.excluded} excluded`+(v.failed>0?`, ${v.failed} unreadable`:"")+` (${v.total} files total).`;a.setText(A),v.plaintext>0&&r.kind==="unlocked"&&a.createDiv({cls:"vaultguard-at-rest-tally-warning",text:`${v.plaintext} file(s) are still plaintext. Click "Encrypt all files now" to migrate them.`})}).catch(v=>{a.setText(`Could not count vault files: ${v instanceof Error?v.message:String(v)}`),a.addClass("vaultguard-at-rest-tally-error")});let n=r.kind==="unlocked",o=r.kind==="needs-recovery";new C.Setting(s).setName("Encrypt all files now").setDesc("Walks the vault and rewrites any plaintext files as ciphertext. Idempotent \u2014 files already encrypted are skipped.").addButton(v=>{v.setButtonText("Encrypt vault").setCta().setDisabled(!n).onClick(async()=>{v.setButtonText("Encrypting\u2026").setDisabled(!0);try{await this.plugin.migrateVaultToAtRest(),this.showStatus(e,"Vault encryption pass complete.",!1)}catch(A){this.showStatus(e,`Encryption failed: ${A.message}`,!0)}finally{this.display()}})}).settingEl.addClass("vaultguard-at-rest-action");let c=this.plugin.getSession(),d=n&&!!c,u=c?"":" Log in to your VaultGuard account to enable this action \u2014 re-authentication is required so a brief unattended-laptop moment can't expose your at-rest key.";new C.Setting(s).setName("Decrypt all files (revert to plaintext)").setDesc("Reverse the at-rest encryption. Use this before disabling the plugin if you want the vault folder to remain readable through normal tools. Requires re-entering your account password \u2014 a logged-in but unattended Obsidian shouldn't be able to silently drop your at-rest protection."+u).addButton(v=>{v.setButtonText("Decrypt vault").setWarning().setDisabled(!d).onClick(()=>{new we(this.app,{title:"Confirm: decrypt vault on this device",description:"This will rewrite every encrypted file in your vault back to plaintext. Anyone with disk access (or another logged-in user on this Mac) will then be able to read your notes through Finder. Re-enter your account password to confirm you're the one doing this.",onVerify:A=>this.plugin.verifyAccountPassword(A),onConfirmed:async()=>{v.setButtonText("Decrypting\u2026").setDisabled(!0);try{await this.plugin.revertVaultFromAtRest(),this.showStatus(e,"Vault decryption pass complete.",!1)}catch(A){this.showStatus(e,`Decryption failed: ${A.message}`,!0)}finally{this.display()}}}).open()})}).settingEl.addClass("vaultguard-at-rest-action"),new C.Setting(s).setName("Recovery code").setDesc("Show the recovery code that lets you decrypt the files on this device after a keychain reset, OS reinstall, or move to a new machine. The code is unique to this device \u2014 every member, and every device per member, has its own. Requires re-entering your account password before display."+u).addButton(v=>v.setButtonText("View recovery code").setDisabled(!d).onClick(()=>{new we(this.app,{title:"Confirm: reveal recovery code",description:"Anyone holding this code can decrypt every file on this device. Enter your account password to confirm before it's shown.",onVerify:A=>this.plugin.verifyAccountPassword(A),onConfirmed:async()=>{try{let A=await this.plugin.exportAtRestRecoveryCode();new He(this.app,{code:A}).open()}catch(A){this.showStatus(e,`Could not export recovery code: ${A.message}`,!0)}}}).open()})).settingEl.addClass("vaultguard-at-rest-action"),new C.Setting(s).setName("Restore from recovery code").setDesc(o?"This vault contains encrypted files that this device cannot decrypt. Paste the recovery code you saved when at-rest encryption was first set up to regain access.":"Use this on a new computer or after reinstalling. Replaces the local at-rest key with the one encoded in the recovery code.").addButton(v=>{let A=v.setButtonText("Enter recovery code\u2026");o&&A.setCta(),A.onClick(()=>{new qe(this.app,{onSubmit:k=>this.plugin.restoreAtRestFromRecoveryCode(k),onRestored:()=>{new C.Notice("VaultGuard Sync: at-rest key restored. Reopening any open notes will now load decrypted content.",7e3),this.display()}}).open()})}).settingEl.addClass("vaultguard-at-rest-action")}renderAtRestStatusBadge(e,t){let r=e.createDiv({cls:"vaultguard-at-rest-status"});r.addClass(`vaultguard-at-rest-status-${t.kind}`);let s="",a="";switch(t.kind){case"unlocked":s="Active",a=t.method==="safe-storage"?"Encryption key is sealed in your OS keychain. Strongest protection available on this device.":t.method==="localstorage-fallback"?"Encryption key is stored in this Electron profile (OS keychain unavailable). Files in Finder are encrypted, but a full Electron-profile theft can recover the key. See docs/AT-REST-ENCRYPTION.md.":"Encryption key is in memory only (no persistent storage detected). Files written this session won't be readable after a restart.",t.method!=="safe-storage"&&r.addClass("vaultguard-at-rest-status-warning");break;case"uninitialized":s="Initializing",a="VaultGuard Sync is setting up the local at-rest cipher.";break;case"locked":s="Locked",a="The at-rest cipher is currently locked. This usually clears itself on the next plugin load.";break;case"needs-recovery":s="Needs recovery",a=t.reason;break;case"disabled":s="Disabled",a=t.reason;break}r.createDiv({cls:"vaultguard-at-rest-status-title",text:s}),r.createDiv({cls:"vaultguard-at-rest-status-body",text:a})}renderCurrentVaultSettings(e,t){e.createEl("h2",{text:"Vault settings"});let r=e.createDiv({cls:"vaultguard-current-vault-settings"});if(!t){new C.Setting(r).setName("Not connected").setDesc("Log in before viewing, binding, creating, or changing server vaults.").addButton(s=>s.setButtonText("Login").setCta().onClick(()=>this.plugin.triggerLogin()));return}r.createDiv({text:"Loading vault settings\u2026",cls:"setting-item-description vaultguard-current-vault-loading"}),this.renderCurrentVaultSettingsContent(r,e,t)}async renderCurrentVaultSettingsContent(e,t,r){let s=[],a=null,n=null,o=null,l=null;try{s=await this.plugin.listServerVaults()}catch(c){a=c}if(this.plugin.settings.serverVaultId)try{n=await this.plugin.getCurrentVaultRecord(),l=await this.plugin.getCurrentVaultMemberRole().catch(()=>null)}catch(c){o=c}e.empty(),this.renderVaultBindingSettings(e,t,r,s,a,n,o,l),n&&(this.renderLoadedVaultSettings(e,t,r,n,l),this.renderVaultMembersSettings(e,t,r,n,l)),this.renderCreateVaultSettings(e,t,r)}renderVaultBindingSettings(e,t,r,s,a,n,o,l){let c=this.plugin.settings.serverVaultName||"Bound server vault",d=this.plugin.settings.serverVaultSlug,u=this.plugin.settings.serverVaultId,p=l?ce[l]:"not a direct member",f=n?[`${Ut[n.kind]} \xB7 ${n.slug}`,`Default role: ${ce[n.defaultRole]}`,`Your vault role: ${p}`,n.archived?"Archived/read-only":"Active"].join(" \xB7 "):u?[d?`Slug: ${d}`:null,`Vault ID: ${u}`,o?`Could not refresh details: ${this.errorMessage(o)}`:null].filter(m=>!!m).join(" \xB7 "):"This Obsidian folder is not linked to a server-side vault yet.";if(new C.Setting(e).setName(n?n.name:u?c:"Bound server vault").setDesc(f).addButton(m=>m.setButtonText("Refresh").onClick(()=>{this.renderCurrentVaultSettingsContent(e,t,r)})).addButton(m=>m.setButtonText(u?"Switch vault":"Pick vault").setCta().onClick(async()=>{await this.handleSwitchVault(t,m,u?"Switch vault":"Pick vault")})),n?.description&&e.createDiv({text:n.description,cls:"setting-item-description vaultguard-current-vault-description"}),u&&e.createDiv({text:`Vault ID: ${u}`,cls:"setting-item-description vaultguard-current-vault-id"}),e.createEl("h3",{text:"Available vaults",cls:"vaultguard-current-vault-heading"}),a){new C.Setting(e).setName("Could not load vault list").setDesc(this.errorMessage(a));return}if(s.length===0){new C.Setting(e).setName("No vaults available").setDesc(this.isOrgAdmin(r)?"Create a server vault below, then bind this Obsidian folder to it.":"Ask an organization admin to add you to a vault.");return}for(let m of s){let v=this.plugin.settings.serverVaultId===m.vaultId,A=[`${Ut[m.kind]} \xB7 ${m.slug}`,`Default role: ${ce[m.defaultRole]}`,m.archived?"Archived":"Active"].join(" \xB7 ");new C.Setting(e).setName(v?`${m.name} (bound)`:m.name).setDesc(A).addButton(k=>{k.setButtonText(v?"Bound":"Bind").setDisabled(v||m.archived).onClick(async()=>{k.setButtonText("Binding..."),k.setDisabled(!0);try{let I=await this.plugin.bindServerVault({vaultId:m.vaultId,name:m.name,slug:m.slug});this.showStatus(t,I?"Vault binding updated. Sync will reconcile this folder with the selected vault.":"Vault binding unchanged.",!1),this.display()}catch(I){this.showStatus(t,`Failed to bind vault: ${this.errorMessage(I)}`,!0),k.setButtonText("Bind"),k.setDisabled(!1)}})})}}renderCreateVaultSettings(e,t,r){if(e.createEl("h3",{text:"Create vault",cls:"vaultguard-current-vault-heading"}),!this.isOrgAdmin(r)){new C.Setting(e).setName("New vaults").setDesc("Only organization admins and owners can create server vaults.");return}let s=this.app.vault.getName()||"My Vault",a="",n="team",o="editor";new C.Setting(e).setName("Name").setDesc("Display name for the new server vault.").addText(l=>l.setPlaceholder("Engineering Notes").setValue(s).onChange(c=>{s=c})),new C.Setting(e).setName("Description").setDesc("Optional note about what belongs in this vault.").addTextArea(l=>{l.setPlaceholder("Team notes, specs, and runbooks").setValue(a).onChange(c=>{a=c}),l.inputEl.rows=2}),new C.Setting(e).setName("Kind").setDesc("Used for labelling vaults in admin and plugin views.").addDropdown(l=>{for(let c of hi)l.addOption(c,Ut[c]);l.setValue(n).onChange(c=>{n=c})}),new C.Setting(e).setName("Default role for new members").setDesc("Used when a vault admin adds a member without choosing a specific role.").addDropdown(l=>{for(let c of We)l.addOption(c,ce[c]);l.setValue(o).onChange(c=>{o=c})}),new C.Setting(e).setName("Create and bind").setDesc("Creates the vault, adds you as its admin, and links this Obsidian folder to it.").addButton(l=>l.setButtonText("Create vault").setCta().onClick(async()=>{let c=s.trim();if(!c){this.showStatus(t,"Vault name cannot be empty.",!0);return}l.setButtonText("Creating..."),l.setDisabled(!0);try{let d=await this.plugin.createServerVault({name:c,...a.trim()?{description:a.trim()}:{},kind:n,defaultRole:o});await this.plugin.bindServerVault({vaultId:d.vaultId,name:d.name,slug:d.slug}),this.showStatus(t,`Created and bound to "${d.name}".`,!1),this.display()}catch(d){this.showStatus(t,`Failed to create vault: ${this.errorMessage(d)}`,!0),l.setButtonText("Create vault"),l.setDisabled(!1)}}))}renderLoadedVaultSettings(e,t,r,s,a){let n=this.canManageVault(r,a),o=this.isOrgAdmin(r);if(e.createEl("h3",{text:"Current vault options",cls:"vaultguard-current-vault-heading"}),!n){new C.Setting(e).setName("Vault metadata").setDesc("Only vault admins, organization admins, and owners can edit the vault name, description, and default role.");return}let l=s.name,c=s.description??"",d=s.defaultRole;new C.Setting(e).setName("Name").setDesc("Display name shown in VaultGuard vault lists.").addText(u=>u.setValue(l).onChange(p=>{l=p})),new C.Setting(e).setName("Description").setDesc("Short note about what belongs in this vault.").addTextArea(u=>{u.setValue(c).onChange(p=>{c=p}),u.inputEl.rows=3}),new C.Setting(e).setName("Default role for new members").setDesc("Used when a vault admin adds a member without choosing a specific role.").addDropdown(u=>{for(let p of We)u.addOption(p,ce[p]);u.setValue(d).onChange(p=>{d=p})}),new C.Setting(e).setName("Save vault settings").setDesc(s.archived?"Reactivate this vault before changing metadata.":"Updates server-side vault metadata for every member.").addButton(u=>u.setButtonText("Save").setCta().setDisabled(s.archived).onClick(async()=>{let p=l.trim();if(!p){this.showStatus(t,"Vault name cannot be empty.",!0);return}u.setButtonText("Saving..."),u.setDisabled(!0);try{await this.plugin.updateCurrentVault({name:p,description:c.trim(),defaultRole:d}),this.showStatus(t,"Vault settings updated.",!1),await this.renderCurrentVaultSettingsContent(e,t,r)}catch(f){this.showStatus(t,`Failed to update vault: ${this.errorMessage(f)}`,!0),u.setButtonText("Save"),u.setDisabled(!1)}})),o&&new C.Setting(e).setName(s.archived?"Reactivate vault":"Archive vault").setDesc(s.archived?"Makes this vault active again so members can sync and edit according to their permissions.":"Archives this vault. Members keep metadata visibility, but write and sync operations become read-only.").addButton(u=>u.setButtonText(s.archived?"Reactivate":"Archive").setWarning().onClick(async()=>{if(!(!s.archived&&!await this.showDestructiveConfirmation(t,"ARCHIVE VAULT","Type ARCHIVE VAULT to confirm. This will make the current server vault read-only."))){u.setButtonText(s.archived?"Reactivating...":"Archiving..."),u.setDisabled(!0);try{await this.plugin.updateCurrentVault({archived:!s.archived}),this.showStatus(t,s.archived?"Vault reactivated.":"Vault archived.",!1),await this.renderCurrentVaultSettingsContent(e,t,r)}catch(p){this.showStatus(t,`Failed to update archive status: ${this.errorMessage(p)}`,!0),u.setButtonText(s.archived?"Reactivate":"Archive"),u.setDisabled(!1)}}}))}renderVaultMembersSettings(e,t,r,s,a){e.createEl("h3",{text:"Vault members",cls:"vaultguard-current-vault-heading"});let n=e.createDiv({cls:"vaultguard-vault-members"});n.createDiv({text:"Loading vault members\u2026",cls:"setting-item-description vaultguard-current-vault-loading"}),this.renderVaultMembersContent(n,t,r,s,a)}async renderVaultMembersContent(e,t,r,s,a){try{let[n,o]=await Promise.all([this.plugin.listCurrentVaultMembers(),this.plugin.listOrganizationUsers().then(p=>({users:p,error:null})).catch(p=>({users:[],error:p}))]),l=this.canManageVault(r,a)&&!s.archived,c=o.users,d=this.buildVaultMemberUserLabelMap(n);d.set(r.userId,{email:r.email,displayName:r.displayName,name:r.displayName});for(let p of c)d.set(p.id,p);let u=n.every(p=>d.has(p.userId));e.empty(),o.error&&(l||!u)&&new C.Setting(e).setName(l?"Add-member directory unavailable":"User directory unavailable").setDesc(u?`Existing members use vault member names. ${this.errorMessage(o.error)}`:`Members without vault member names are shown by ID. ${this.errorMessage(o.error)}`),n.length===0&&new C.Setting(e).setName("No members").setDesc("This vault does not have any explicit members yet.");for(let p of n)this.renderVaultMemberRow(e,t,r,s,p,d,l);if(s.archived){new C.Setting(e).setName("Add member").setDesc("Archived vaults are read-only. Reactivate this vault before changing membership.");return}if(!l){new C.Setting(e).setName("Add member").setDesc("Only vault admins, organization admins, and owners can add or remove vault members.");return}this.renderAddVaultMemberForm(e,t,r,s,n,c)}catch(n){e.empty(),new C.Setting(e).setName("Could not load vault members").setDesc(this.errorMessage(n))}}renderVaultMemberRow(e,t,r,s,a,n,o){let l=n.get(a.userId),c=this.formatUserLabel(a.userId,l),d=[`Role: ${ce[a.role]}`,`Joined: ${this.formatDate(a.joinedAt)}`,a.invitedBy?`Invited by: ${this.formatUserLabel(a.invitedBy,n.get(a.invitedBy))}`:null].filter(f=>!!f).join(" \xB7 "),u=new C.Setting(e).setName(c).setDesc(d);if(!o)return;let p=a.role;u.addDropdown(f=>{for(let m of We)f.addOption(m,ce[m]);f.setValue(a.role).onChange(async m=>{p=m;try{await this.plugin.updateCurrentVaultMember(a.userId,p),this.showStatus(t,`Updated ${c}.`,!1),await this.renderCurrentVaultSettingsContent(e.parentElement??e,t,r)}catch(v){this.showStatus(t,`Failed to update member: ${this.errorMessage(v)}`,!0)}})}),u.addButton(f=>f.setButtonText("Remove").setWarning().onClick(async()=>{if(await this.showDestructiveConfirmation(t,"REMOVE MEMBER",`Type REMOVE MEMBER to confirm removing ${c} from ${s.name}.`)){f.setButtonText("Removing..."),f.setDisabled(!0);try{await this.plugin.removeCurrentVaultMember(a.userId),this.showStatus(t,`Removed ${c}.`,!1),await this.renderCurrentVaultSettingsContent(e.parentElement??e,t,r)}catch(v){this.showStatus(t,`Failed to remove member: ${this.errorMessage(v)}`,!0),f.setButtonText("Remove"),f.setDisabled(!1)}}}))}renderAddVaultMemberForm(e,t,r,s,a,n){let o=new Set(a.map(p=>p.userId)),l=n.filter(p=>!o.has(p.id)),c=l[0]?.id??"",d=s.defaultRole,u=new C.Setting(e).setName("Add member").setDesc(n.length>0?"Add an organization user to this vault.":"Enter a VaultGuard user ID to add them to this vault.");if(n.length>0&&l.length===0){u.setDesc("All organization users are already members of this vault.");return}n.length>0?u.addDropdown(p=>{for(let f of l)p.addOption(f.id,this.formatUserLabel(f.id,f));p.setValue(c).onChange(f=>{c=f})}):u.addText(p=>p.setPlaceholder("user-id").onChange(f=>{c=f.trim()})),u.addDropdown(p=>{for(let f of We)p.addOption(f,ce[f]);p.setValue(d).onChange(f=>{d=f})}),u.addButton(p=>p.setButtonText("Add").setCta().onClick(async()=>{if(!c.trim()){this.showStatus(t,"Choose or enter a user first.",!0);return}p.setButtonText("Adding..."),p.setDisabled(!0);try{await this.plugin.addCurrentVaultMember(c.trim(),d),this.showStatus(t,"Vault member added.",!1),await this.renderCurrentVaultSettingsContent(e.parentElement??e,t,r)}catch(f){this.showStatus(t,`Failed to add member: ${this.errorMessage(f)}`,!0),p.setButtonText("Add"),p.setDisabled(!1)}}))}isOrgAdmin(e){return e.role==="admin"||e.role==="owner"}canManageVault(e,t){return this.isOrgAdmin(e)||t==="admin"}formatDate(e){let t=Date.parse(e);return Number.isNaN(t)?e:new Date(t).toLocaleDateString()}buildVaultMemberUserLabelMap(e){let t=new Map;for(let r of e){let s=r.displayName?.trim()??"",a=r.email?.trim()??"";!s&&!a||t.set(r.userId,{email:a,displayName:s,name:s})}return t}formatUserLabel(e,t){if(!t)return e;let r=t.email?.trim()??"",s=t.displayName?.trim()||t.name?.trim()||r||e;return r&&s!==r?`${s} (${r})`:s}errorMessage(e){return e instanceof Error?e.message:"Unknown error"}async handleSwitchVault(e,t,r="Switch vault"){t.setButtonText("Opening..."),t.setDisabled(!0);try{let s=await this.plugin.switchServerVault();this.showStatus(e,s?"Vault binding updated. Sync will reconcile this folder with the selected vault.":"Vault binding unchanged.",!1),this.display()}catch(s){this.showStatus(e,`Failed to switch vault: ${s instanceof Error?s.message:"Unknown error"}`,!0),t.setButtonText(r),t.setDisabled(!1)}}display(){let{containerEl:e}=this;e.empty(),e.addClass("vaultguard-settings-tab"),e.createEl("h1",{text:"VaultGuard Sync"}),e.createEl("p",{text:"Enterprise-grade vault security with permission-aware encrypted cloud sync.",cls:"setting-item-description"});let t=this.plugin.getSession(),r=this.plugin.settings.manualConfig??!1;if(t?(e.createEl("h2",{text:"Account"}),new C.Setting(e).setName("Logged in as").setDesc(`${t.email} (${t.role})`),new C.Setting(e).setName("Display name").setDesc('Your name shown to teammates in permission headers and access lists. Use your first and last name (e.g. "Jane Smith").').addText(n=>{n.setPlaceholder("Jane Smith").setValue(t.displayName??"").onChange(()=>{});let o=n.inputEl,l=o.closest(".setting-item");if(l){let c=l.querySelector(".setting-item-control");if(c){let d=c.createEl("button",{text:"Save",cls:"mod-cta vaultguard-inline-save-btn"});d.addEventListener("click",async()=>{let u=o.value.trim();if(!u){this.showStatus(e,"Display name cannot be empty.",!0);return}d.disabled=!0,d.textContent="Saving...";try{await this.plugin.updateUserProfile(t.userId,u),this.showStatus(e,"Display name updated.",!1),this.display()}catch(p){this.showStatus(e,`Failed to update name: ${p.message}`,!0)}finally{d.disabled=!1,d.textContent="Save"}})}}}),new C.Setting(e).setName("Logout").setDesc("Sign out and clear your session from this device.").addButton(n=>n.setButtonText("Logout").onClick(async()=>{await this.plugin.forceLogout(),this.display()}))):(e.createEl("h2",{text:"Account"}),new C.Setting(e).setName("Not logged in").setDesc(r?"Sign in with your self-hosted VaultGuard server.":"Sign in with your VaultGuard Cloud account.").addButton(n=>n.setButtonText(r?"Login":"Continue with VaultGuard Cloud").setCta().onClick(()=>{this.plugin.triggerLogin()}))),this.renderCurrentVaultSettings(e,t),e.createEl("h2",{text:"Connection"}),new C.Setting(e).setName("Connected to").setDesc(this.plugin.getConnectionTargetLabel()),new C.Setting(e).setName("Configuration mode").setDesc(r?"Using manual configuration for self-hosted deployments.":"Using VaultGuard Cloud defaults. Organization details are discovered after sign-in or invite redemption.").addToggle(n=>n.setTooltip("Toggle between auto and manual configuration").setValue(r).onChange(async o=>{try{await this.plugin.setManualConfigurationMode(o),this.display()}catch(l){this.showStatus(e,`Failed: ${l instanceof Error?l.message:"Unknown error"}`,!0)}})),r){let n=new C.Setting(e).setName("Server config URL").setDesc("Paste your self-hosted server's public config URL, for example https://your-server.com/.well-known/vaultguard.json."),o=null;n.addText(l=>{l.setPlaceholder("https://your-server.com/.well-known/vaultguard.json").setValue(""),o=l.inputEl}),n.addButton(l=>l.setButtonText("Apply").setCta().onClick(async()=>{let c=o?.value.trim()??"";if(!c){this.showStatus(e,"Paste a server config URL first.",!0);return}l.setButtonText("Applying..."),l.setDisabled(!0);try{await this.plugin.applyManualServerConfigUrl(c),o&&(o.value=""),this.showStatus(e,"Self-hosted server configuration applied.",!1),this.display()}catch(d){this.showStatus(e,`Failed: ${d instanceof Error?d.message:"Unknown error"}`,!0)}finally{l.setButtonText("Apply"),l.setDisabled(!1)}})),new C.Setting(e).setName("API endpoint").setDesc("VaultGuard REST API or CloudFront base URL. Pasted /settings or /orgs/... URLs are trimmed automatically.").addText(l=>l.setPlaceholder("https://d1234567890.cloudfront.net or https://api.example.com").setValue(this.plugin.settings.apiEndpoint).onChange(async c=>{this.plugin.settings.apiEndpoint=c.trim(),await this.plugin.saveSettings()})),new C.Setting(e).setName("Organization ID").addText(l=>l.setValue(this.plugin.settings.organizationId).onChange(async c=>{this.plugin.settings.organizationId=c.trim(),await this.plugin.saveSettings()})),new C.Setting(e).setName("Cognito User Pool ID").addText(l=>l.setPlaceholder("eu-central-1_XXXXXXXXX").setValue(this.plugin.settings.cognitoUserPoolId).onChange(async c=>{this.plugin.settings.cognitoUserPoolId=c.trim(),await this.plugin.saveSettings()})),new C.Setting(e).setName("Cognito Client ID").addText(l=>l.setPlaceholder("1a2b3c4d5e6f7g8h9i0j").setValue(this.plugin.settings.cognitoClientId).onChange(async c=>{this.plugin.settings.cognitoClientId=c.trim(),await this.plugin.saveSettings()}))}else{new C.Setting(e).setName("VaultGuard Cloud").setDesc("Uses the bundled api.example.com and Cognito configuration.").addButton(c=>c.setButtonText("Continue").setCta().onClick(()=>{this.plugin.triggerLogin()})).addButton(c=>c.setButtonText("Reset").setTooltip("Clear locally cached connection fields and use the bundled Cloud defaults").onClick(async()=>{c.setDisabled(!0);try{await this.plugin.resetCloudConnectionDefaults(),this.showStatus(e,"VaultGuard Cloud defaults restored.",!1),this.display()}catch(d){this.showStatus(e,`Failed: ${d instanceof Error?d.message:"Unknown error"}`,!0)}finally{c.setDisabled(!1)}}));let n=new C.Setting(e).setName("Organization slug").setDesc('Enter the slug your admin gave you (e.g., "acme-corp"). All connection details will be configured automatically.');n.addText(c=>{c.setPlaceholder("acme-corp").setValue(this.plugin.settings.orgSlug).onChange(async d=>{this.plugin.settings.orgSlug=d.trim().toLowerCase(),await this.plugin.saveSettings()})}),n.addButton(c=>c.setButtonText("Connect").setCta().onClick(async()=>{let d=this.plugin.settings.orgSlug;if(!d){this.showStatus(e,"Enter an organization slug first.",!0);return}c.setButtonText("Connecting..."),c.setDisabled(!0);try{await this.plugin.resolveOrgConfig(d),this.showStatus(e,`Connected to "${d}" successfully!`,!1),this.display()}catch(u){this.showStatus(e,`Failed: ${u instanceof Error?u.message:"Unknown error"}`,!0)}finally{c.setButtonText("Connect"),c.setDisabled(!1)}}));let o=new C.Setting(e).setName("Redeem invite link").setDesc("Paste the obsidian://vaultguard-invite link from your invitation email to auto-configure your organization and set your password."),l=null;o.addText(c=>{c.setPlaceholder("obsidian://vaultguard-invite?org=...&email=...").setValue(""),l=c.inputEl}),o.addButton(c=>c.setButtonText("Redeem").setCta().onClick(async()=>{let d=l?.value.trim()??"";if(!d){this.showStatus(e,"Paste your invite link first.",!0);return}let u=pi(d);if(!u.org){this.showStatus(e,"Could not find an org slug in that link. Make sure you copied the full obsidian://vaultguard-invite URL.",!0);return}c.setButtonText("Redeeming..."),c.setDisabled(!0);try{await this.plugin.redeemInvite(u),l&&(l.value=""),this.showStatus(e,`Invite for "${u.org}" redeemed. Follow the prompts to set your password.`,!1),this.display()}catch(p){this.showStatus(e,`Failed: ${p instanceof Error?p.message:"Unknown error"}`,!0)}finally{c.setButtonText("Redeem"),c.setDisabled(!1)}}))}e.createEl("h2",{text:"Synchronization"});let s=this.plugin.getOrgPolicySettings();if(s){let n=s.syncMode==="manual"?"Manual sync only":s.syncMode==="realtime"?"Real-time sync managed by your organization":`Periodic sync every ${s.syncIntervalMinutes} minute${s.syncIntervalMinutes===1?"":"s"}`;new C.Setting(e).setName("Sync interval").setDesc(`Managed by your organization: ${n}.`)}else new C.Setting(e).setName("Sync interval").setDesc("How often to check for remote changes (in seconds). Minimum 10 seconds.").addSlider(n=>n.setLimits(10,300,5).setValue(this.plugin.settings.syncInterval).setDynamicTooltip().onChange(async o=>{this.plugin.settings.syncInterval=o,await this.plugin.saveSettings(),this.plugin.restartSyncTimer()}));new C.Setting(e).setName("Default conflict resolution").setDesc("How to handle sync conflicts when both local and remote versions have changed.").addDropdown(n=>n.addOption("ask_user","Ask me each time").addOption("keep_local","Always keep local").addOption("keep_remote","Always keep remote").addOption("duplicate","Create duplicate file").addOption("merge","Attempt auto-merge (markdown)").setValue(this.plugin.settings.defaultConflictResolution).onChange(async o=>{this.plugin.settings.defaultConflictResolution=o,await this.plugin.saveSettings()})),new C.Setting(e).setName("Excluded paths (local-only)").setDesc("One path per line. Files and folders matching these patterns are never uploaded, downloaded, or deleted on the server \u2014 they stay on this device only. Use exact paths (e.g. .obsidian/workspace.json) or folder prefixes (e.g. .obsidian/plugins). This setting applies to this device only; it does not change the server vault.").addTextArea(n=>(n.inputEl.rows=6,n.inputEl.addClass("vaultguard-mono-textarea"),n.setPlaceholder(`.obsidian/workspace.json
.obsidian/plugins
.trash`).setValue((this.plugin.settings.excludedPaths??[]).join(`
`)).onChange(async o=>{this.plugin.settings.excludedPaths=o.split(`
`).map(l=>l.trim()).filter(l=>l.length>0),await this.plugin.saveSettings()}),n)).settingEl.addClass("vaultguard-excluded-paths-setting"),this.renderPluginAllowlistSection(e),new C.Setting(e).setName("Purge excluded paths from server").setDesc("Delete every server-side copy of files that match the excluded paths above. Useful after adding a new exclusion: without this, other members on other devices keep pulling the file down. This affects the shared server vault.").addButton(n=>n.setButtonText("Purge from server").setWarning().onClick(async()=>{let o=this.plugin.settings.excludedPaths??[];if(o.length===0){this.showStatus(e,"No excluded paths configured.",!0);return}if(window.confirm(`Delete every matching file from the shared server vault? Other members will lose these files on their next sync. Local copies on this device are kept.

Patterns:
${o.join(`
`)}`))try{n.setDisabled(!0),n.setButtonText("Purging\u2026");let c=await this.plugin.purgeExcludedFromServer(),d=`Matched ${c.matched}, deleted ${c.deleted}`+(c.failed>0?`, ${c.failed} failed`:"");this.showStatus(e,d,c.failed>0)}catch(c){this.showStatus(e,c instanceof Error?c.message:"Purge failed.",!0)}finally{n.setDisabled(!1),n.setButtonText("Purge from server")}})),e.createEl("h2",{text:"Security"}),new C.Setting(e).setName("Cache encryption strength").setDesc("Encryption level for locally cached files. Higher levels are more secure but slower.").addDropdown(n=>n.addOption("standard","Standard (AES-256-GCM)").addOption("high","High (AES-256-GCM + key stretching)").addOption("maximum","Maximum (AES-256-GCM + Argon2 key derivation)").setValue(this.plugin.settings.cacheEncryptionStrength).onChange(async o=>{this.plugin.settings.cacheEncryptionStrength=o,await this.plugin.saveSettings()})),new C.Setting(e).setName("Offline key lease duration").setDesc("How long encryption keys remain valid when offline (in hours). After expiry, files cannot be decrypted until reconnection.").addSlider(n=>n.setLimits(1,168,1).setValue(this.plugin.settings.offlineKeyLeaseDuration).setDynamicTooltip().onChange(async o=>{this.plugin.settings.offlineKeyLeaseDuration=o,await this.plugin.saveSettings()})),new C.Setting(e).setName("Auto-wipe on auth failure").setDesc("Automatically clear all cached vault data if authentication fails repeatedly. This prevents unauthorized access but may cause data loss for unsynced changes.").addToggle(n=>n.setValue(this.plugin.settings.autoWipeOnAuthFailure).onChange(async o=>{this.plugin.settings.autoWipeOnAuthFailure=o,await this.plugin.saveSettings()})),e.createEl("h2",{text:"Display"}),new C.Setting(e).setName("Show permission indicators").setDesc("Display permission level icons (lock, pencil, shield) next to files in the file explorer.").addToggle(n=>n.setValue(this.plugin.settings.showPermissionIndicators).onChange(async o=>{this.plugin.settings.showPermissionIndicators=o,await this.plugin.saveSettings(),this.plugin.refreshFileExplorerDecorations()})),new C.Setting(e).setName("Show status bar").setDesc("Display sync status and connection indicator in the bottom status bar.").addToggle(n=>n.setValue(this.plugin.settings.showStatusBar).onChange(async o=>{this.plugin.settings.showStatusBar=o,await this.plugin.saveSettings(),this.plugin.toggleStatusBar(o)})),this.renderAtRestSection(e),this.renderAgentBridgeSection(e),e.createEl("h2",{text:"Advanced"}),new C.Setting(e).setName("Max retry attempts").setDesc("Maximum number of retry attempts for failed API calls before giving up.").addSlider(n=>n.setLimits(1,10,1).setValue(this.plugin.settings.maxRetryAttempts).setDynamicTooltip().onChange(async o=>{this.plugin.settings.maxRetryAttempts=o,await this.plugin.saveSettings()})),new C.Setting(e).setName("Debug logging").setDesc("Enable verbose logging to the developer console. Useful for troubleshooting but may expose sensitive data in logs.").addToggle(n=>n.setValue(this.plugin.settings.debugLogging).onChange(async o=>{this.plugin.settings.debugLogging=o,await this.plugin.saveSettings()})),new C.Setting(e).setName("Disable update checks").setDesc("When enabled, the plugin won't poll GitHub for new releases. Default off: the plugin checks once every 24 h and shows a notification when a newer version is available. No telemetry is sent \u2014 only an outbound HTTPS request to api.github.com.").addToggle(n=>n.setValue(this.plugin.settings.disableUpdateChecks??!1).onChange(async o=>{this.plugin.settings.disableUpdateChecks=o,await this.plugin.saveSettings()})),e.createEl("h2",{text:"Danger Zone"}),e.createEl("p",{text:"These actions cannot be undone.",cls:"setting-item-description mod-warning"}),new C.Setting(e).setName("Clear local cache").setDesc("Remove all locally cached and encrypted vault data. Files will be re-downloaded on next sync.").addButton(n=>n.setButtonText("Clear Cache").setWarning().onClick(async()=>{await this.showDestructiveConfirmation(e,"CLEAR CACHE","Type CLEAR CACHE to confirm. This will delete all locally cached vault data.")&&await this.plugin.clearLocalCache()})),new C.Setting(e).setName("Force logout").setDesc("Immediately invalidate your session and clear all credentials from this device.").addButton(n=>n.setButtonText("Logout").setWarning().onClick(async()=>{await this.showDestructiveConfirmation(e,"LOGOUT","Type LOGOUT to confirm. This will invalidate your session and wipe local credentials.")&&await this.plugin.forceLogout()}))}showDestructiveConfirmation(e,t,r){return new Promise(s=>{let a=e.querySelector(".vaultguard-destruct-confirm");a&&a.remove();let n=e.createDiv({cls:"vaultguard-destruct-confirm"});n.createEl("p",{text:r,cls:"setting-item-description mod-warning"});let o=n.createEl("input",{cls:"vaultguard-confirm-input",attr:{type:"text",placeholder:t}}),l=n.createDiv({cls:"vaultguard-confirm-buttons"}),c=l.createEl("button",{text:"Cancel"}),d=l.createEl("button",{text:"Confirm",cls:"mod-warning",attr:{disabled:"true"}});o.addEventListener("input",()=>{o.value===t?d.removeAttribute("disabled"):d.setAttribute("disabled","true")}),c.addEventListener("click",()=>{n.remove(),s(!1)}),d.addEventListener("click",()=>{o.value===t&&(n.remove(),s(!0))}),o.focus()})}renderAgentBridgeSection(e){if(e.createEl("h2",{text:"Agent bridge connections (Desktop only.)"}),C.Platform.isMobileApp){e.createEl("p",{cls:"setting-item-description",text:"Agent bridge is desktop-only. It exposes VaultGuard Sync's tools to local MCP clients (Claudian, Claude Code, Cursor) via a localhost HTTP server, which Obsidian mobile renderers can't host. Manage agent leases from a desktop install of this same vault."});return}e.createEl("p",{cls:"setting-item-description",text:"Agent bridge leases let an external agent (Claudian, Claude Code, Cursor, custom MCP client) talk to this vault through VaultGuard Sync tools. Each lease has its own bearer token; revoking or rotating one does not disturb the others. Hidden paths (.obsidian, .trash, .git, ...) are always blocked."});let r=this.plugin.getAgentBridge().describe(),s=r.activeLeases,a=r.server,n=!!(this.plugin.getSession()&&this.plugin.settings.serverVaultId);if(new C.Setting(e).setName("Bridge lease actions").setDesc(n?"Create a new scoped bridge lease, or revoke every current bridge lease for this vault.":"Log in and bind this Obsidian folder to a server vault before creating bridge leases.").addButton(o=>o.setButtonText("Create bridge lease").setCta().setDisabled(!n).onClick(()=>{new Pe(this.plugin,()=>this.display()).open()})).addButton(o=>o.setButtonText("Revoke all leases").setWarning().setDisabled(s.length===0).onClick(async()=>{o.setDisabled(!0).setButtonText("Revoking...");try{this.plugin.revokeAllAgentBridgeLeases(),await this.plugin.stopAgentBridgeServer(),this.latestAgentBridgeReveal=null,new C.Notice("VaultGuard Sync: all agent bridge leases revoked."),this.display()}catch(l){new C.Notice(`VaultGuard Sync: could not revoke bridge leases - ${this.errorMessage(l)}`,8e3),o.setDisabled(!1).setButtonText("Revoke all leases")}})),this.renderAgentBridgeServerState(e,a,s.length),this.renderLatestAgentBridgeReveal(e),this.renderAgentBridgeSkillRow(e),e.createEl("h3",{text:"Current leases",cls:"vaultguard-current-vault-heading"}),s.length===0){e.createDiv({cls:"setting-item-description"}).appendText("No active bridge leases. Create one here or from the command palette when you want to connect an agent.");return}for(let o of s)this.renderAgentBridgeLeaseRow(e,o)}renderAgentBridgeServerState(e,t,r){if(t){let a=e.createDiv({cls:"vaultguard-agent-bridge-server"});a.createEl("strong",{text:"Bridge server: "}),a.appendText(`${t.endpoint} (MCP at ${t.mcpEndpoint})`);let n=a.createDiv({cls:"vaultguard-agent-bridge-inline-actions"});new C.ButtonComponent(n).setButtonText("Copy RPC URL").onClick(async()=>{let c=await this.writeClipboard(t.endpoint);new C.Notice(c?"Bridge RPC URL copied.":"Could not copy the bridge RPC URL.")}),new C.ButtonComponent(n).setButtonText("Copy MCP URL").onClick(async()=>{let c=await this.writeClipboard(t.mcpEndpoint);new C.Notice(c?"Bridge MCP URL copied.":"Could not copy the bridge MCP URL.")});return}if(r>0){new C.Setting(e).setName("Bridge server").setDesc("There are active leases, but the local bridge server is not listening. Start it before connecting an agent.").addButton(a=>a.setButtonText("Start bridge server").setCta().onClick(async()=>{a.setDisabled(!0).setButtonText("Starting...");try{await this.plugin.startAgentBridgeServer(),this.display()}catch(n){new C.Notice(`VaultGuard Sync: could not start the bridge server - ${this.errorMessage(n)}`,8e3),a.setDisabled(!1).setButtonText("Start bridge server")}}));return}e.createDiv({cls:"setting-item-description"}).appendText("Bridge server is idle. It starts when you create a lease.")}renderAgentBridgeSkillRow(e){let t=this.plugin.getAgentBridgeSkillStatus();if(!t.available){new C.Setting(e).setName("Claude Code skill").setDesc("Not available on this device \u2014 installing the skill needs Node filesystem access (desktop Obsidian only).");return}let r=this.skillStatusDescription(t),s=new C.Setting(e).setName("Claude Code skill").setDesc(r);if(!t.claudeCodeAvailable){s.addButton(a=>a.setButtonText("Install anyway").setWarning().onClick(async()=>this.runSkillInstall(a,{force:!0})));return}if(t.managedConflict){s.addButton(a=>a.setButtonText("Overwrite existing SKILL.md").setWarning().onClick(async()=>this.runSkillInstall(a,{overwriteUnmanaged:!0})));return}if(!t.installed){s.addButton(a=>a.setButtonText("Install skill").setCta().onClick(async()=>this.runSkillInstall(a)));return}s.addButton(a=>a.setButtonText("Update / re-install").onClick(async()=>this.runSkillInstall(a))).addButton(a=>a.setButtonText("Uninstall").setWarning().onClick(async()=>this.runSkillUninstall(a)))}skillStatusDescription(e){return e.claudeCodeAvailable?e.managedConflict?`A SKILL.md exists at ${e.skillFilePath} but wasn't installed by VaultGuard Sync. Overwriting will replace it. Cancel and inspect the file if you didn't expect this.`:e.installed?`Installed at ${e.skillFilePath}. The skill teaches Claude Code (and any agent that loads ~/.claude/skills/) to use VaultGuard Sync's MCP tools instead of Read/Glob/Grep against encrypted vault files. Re-install to pull the latest skill body.`:`Writes a SKILL.md to ${e.skillFilePath}. Tells Claude Code to reach for VaultGuard Sync's MCP tools when it sees an encrypted vault, rather than reading ciphertext directly. Contains no tokens or per-user state.`:`Claude Code does not appear to be installed (no ~/.claude/skills/ directory). The skill would land at ${e.skillFilePath} if you install it anyway.`}async runSkillInstall(e,t={}){let r=e.buttonEl.textContent??"Install skill";e.setDisabled(!0).setButtonText("Installing...");try{let s=await this.plugin.installAgentBridgeSkill(t),a=s.action==="noop"?"already current":s.action==="created"?"installed":s.action==="overwrote-conflict"?"overwrote existing file":"updated";new C.Notice(`VaultGuard Sync: Claude Code skill ${a} at ${s.filePath}.`,6e3),this.display()}catch(s){new C.Notice(`VaultGuard Sync: could not install skill - ${this.errorMessage(s)}`,8e3),e.setDisabled(!1).setButtonText(r)}}async runSkillUninstall(e){e.setDisabled(!0).setButtonText("Removing...");try{let t=await this.plugin.uninstallAgentBridgeSkill();t.removed?new C.Notice(`VaultGuard Sync: Claude Code skill removed from ${t.filePath}.`,6e3):new C.Notice("VaultGuard Sync: no managed skill file to remove.",4e3),this.display()}catch(t){new C.Notice(`VaultGuard Sync: could not uninstall skill - ${this.errorMessage(t)}`,8e3),e.setDisabled(!1).setButtonText("Uninstall")}}renderLatestAgentBridgeReveal(e){let t=this.latestAgentBridgeReveal;if(!t)return;let r=e.createDiv({cls:"vaultguard-agent-bridge-reveal"});r.createEl("strong",{text:`New token for ${t.agentName}`}),r.createEl("p",{cls:"setting-item-description",text:t.copiedToClipboard?"The rotated MCP config was copied. It is also shown here until this settings panel refreshes again.":"The token was rotated, but clipboard copy was unavailable. Copy one of the snippets below before leaving this settings panel."}),this.renderAgentBridgeCopyBlock(r,{title:"MCP server config",body:t.mcpConfig,copyLabel:"Copy MCP config"}),this.renderAgentBridgeCopyBlock(r,{title:"Generic HTTP-RPC connection",body:t.connectionJson,copyLabel:"Copy connection JSON"})}renderAgentBridgeLeaseRow(e,t){let r=e.createDiv({cls:"vaultguard-agent-bridge-lease"});r.addClass(t.persistent?"is-persistent":"is-ephemeral");let s=r.createDiv({cls:"vaultguard-agent-bridge-lease-header"});s.createEl("strong",{text:t.agentName}),s.createSpan({cls:"vaultguard-agent-bridge-lease-badge",text:t.persistent?"Until logout":"Time-limited"});let a=r.createEl("dl",{cls:"vaultguard-agent-bridge-lease-details"});this.addAgentBridgeLeaseDetail(a,"Lease ID",t.leaseId),this.addAgentBridgeLeaseDetail(a,"Scope",t.scopes.join(", ")),this.addAgentBridgeLeaseDetail(a,"Access",this.agentBridgeAccessLabel(t)),this.addAgentBridgeLeaseDetail(a,"Created",this.formatDateTime(t.createdAt)),this.addAgentBridgeLeaseDetail(a,"Expires",t.persistent?"When you log out":this.formatDateTime(t.expiresAt)),this.addAgentBridgeLeaseDetail(a,"Limits",`${this.formatBytes(t.maxReadBytes)} max read, ${t.maxSearchResults} search result${t.maxSearchResults===1?"":"s"}`);let n=r.createDiv({cls:"vaultguard-modal-actions"}),o=new C.ButtonComponent(n);o.setButtonText("Rotate token").onClick(()=>{this.rotateAgentBridgeLeaseToken(t,o)});let l=new C.ButtonComponent(n);l.setButtonText("Revoke lease").setWarning().onClick(()=>{this.revokeAgentBridgeLease(t,l)})}addAgentBridgeLeaseDetail(e,t,r){e.createEl("dt",{text:t}),e.createEl("dd",{text:r})}agentBridgeAccessLabel(e){let t=e.allowRead?"read enabled":"read disabled",r=e.writeMode==="deny"?"read-only":e.writeMode==="confirm"?"confirm writes":"allow writes";return`${t}, ${r}`}async rotateAgentBridgeLeaseToken(e,t){t.setDisabled(!0).setButtonText("Rotating...");try{let r=await this.plugin.startAgentBridgeServer(),s=this.plugin.rotateAgentBridgeLeaseToken(e.leaseId),a=this.buildAgentBridgeMcpConfig(s,r),n=this.buildAgentBridgeConnectionJson(s,r),o=await this.writeClipboard(a);this.latestAgentBridgeReveal={leaseId:s.leaseId,agentName:s.agentName,connectionJson:n,mcpConfig:a,copiedToClipboard:o},new C.Notice(o?"VaultGuard Sync: new MCP config copied. Update the agent using this lease.":"VaultGuard Sync: token rotated. Copy the new config shown in settings.",8e3),this.display()}catch(r){new C.Notice(`VaultGuard Sync: could not rotate bridge token - ${this.errorMessage(r)}`,8e3),t.setDisabled(!1).setButtonText("Rotate token")}}async revokeAgentBridgeLease(e,t){t.setDisabled(!0).setButtonText("Revoking...");try{this.plugin.revokeAgentBridgeLease(e.leaseId)?new C.Notice(`VaultGuard Sync: revoked bridge lease for ${e.agentName}.`):new C.Notice("VaultGuard Sync: that bridge lease was already gone."),this.latestAgentBridgeReveal?.leaseId===e.leaseId&&(this.latestAgentBridgeReveal=null),this.plugin.getAgentBridge().describe().activeLeases.length===0&&await this.plugin.stopAgentBridgeServer(),this.display()}catch(r){new C.Notice(`VaultGuard Sync: could not revoke bridge lease - ${this.errorMessage(r)}`,8e3),t.setDisabled(!1).setButtonText("Revoke lease")}}buildAgentBridgeConnectionJson(e,t){return JSON.stringify({endpoint:t.endpoint,mcpEndpoint:t.mcpEndpoint,token:e.token,leaseId:e.leaseId,expiresAt:e.expiresAt,tools:t.tools},null,2)}buildAgentBridgeMcpConfig(e,t){return JSON.stringify({mcpServers:{vaultguard:{type:"http",url:t.mcpEndpoint,headers:{Authorization:`Bearer ${e.token}`,"X-VaultGuard-Lease":e.leaseId}}}},null,2)}renderAgentBridgeCopyBlock(e,t){let r=e.createDiv({cls:"vaultguard-agent-bridge-copy-block"});r.createEl("h4",{text:t.title}),r.createEl("pre",{cls:"vaultguard-agent-bridge-connection"}).setText(t.body);let a=r.createDiv({cls:"vaultguard-agent-bridge-inline-actions"});new C.ButtonComponent(a).setButtonText(t.copyLabel).onClick(async()=>{let o=await this.writeClipboard(t.body);new C.Notice(o?`${t.title} copied.`:`Could not copy ${t.title}.`)})}async writeClipboard(e){if(typeof navigator>"u"||!navigator.clipboard?.writeText)return!1;try{return await navigator.clipboard.writeText(e),!0}catch{return!1}}formatDateTime(e){let t=Date.parse(e);return Number.isNaN(t)?e:new Date(t).toLocaleString()}formatBytes(e){return!Number.isFinite(e)||e<0?String(e):e<1024?`${e} B`:e<1024*1024?`${Math.round(e/1024)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}};function pi(h){let i=h.trim();if(!i)return{};let e=i;if(i.toLowerCase().startsWith("obsidian://")){let c=i.indexOf("?");e=c>=0?i.slice(c+1):""}else i.includes("?")&&(e=i.slice(i.indexOf("?")+1));e=e.replace(/^[?#]/,"");let r;try{r=new URLSearchParams(e)}catch{return{}}let s=(r.get("org")??r.get("slug")??"").trim().toLowerCase(),a=(r.get("email")??"").trim(),n=(r.get("api")??"").trim(),o=(r.get("token")??"").trim(),l=(r.get("exp")??"").trim();return{...s?{org:s}:{},...a?{email:a}:{},...n?{api:n}:{},...o?{token:o}:{},...l?{exp:l}:{}}}var de=require("obsidian");var hr=require("obsidian"),Ve=Symbol("vaultguard-loading-saved"),be=Symbol("vaultguard-loading-disabled");function $(h,i,e={}){let t=h;if(i){t[Ve]||(t[Ve]=Array.from(t.childNodes).map(s=>s.cloneNode(!0)),t[be]=t.disabled),t.disabled=!0,t.replaceChildren();let r=t.createSpan({cls:"vaultguard-sb-spinner vaultguard-btn-spinner"});(0,hr.setIcon)(r,"loader"),e.label&&t.createSpan({text:e.label});return}t[Ve]?(t.replaceChildren(...t[Ve]),t.disabled=t[be]??!1,delete t[Ve],delete t[be]):t.disabled=!1}function Z(h,i){let e=h;if(i){e[be]===void 0&&(e[be]=e.disabled??!1),e.disabled=!0;return}e.disabled=e[be]??!1,delete e[be]}var Nt="http://www.w3.org/2000/svg";function Ce(h,i){let e=document.createElementNS(Nt,h);for(let[t,r]of Object.entries(i))e.setAttribute(t,r);return e}function Ft(h){let i=Ce("svg",{xmlns:Nt,width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"});return i.appendChild(Ce("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})),i.appendChild(Ce("path",{d:"m9 12 2 2 4-4"})),h.appendChild(i),i}function pr(h,i,e){let t=i.getModuleCount(),r=(t+e.margin*2)*e.cellSize,s=Ce("svg",{xmlns:Nt,viewBox:`0 0 ${r} ${r}`,"shape-rendering":"crispEdges",width:"200",height:"200"});e.cssClass&&s.classList.add(e.cssClass),s.appendChild(Ce("rect",{x:"0",y:"0",width:String(r),height:String(r),fill:"#ffffff"}));let a="";for(let n=0;n<t;n++)for(let o=0;o<t;o++){if(!i.isDark(n,o))continue;let l=(o+e.margin)*e.cellSize,c=(n+e.margin)*e.cellSize;a+=`M${l},${c}h${e.cellSize}v${e.cellSize}h-${e.cellSize}z`}return s.appendChild(Ce("path",{d:a,fill:"#000000"})),h.appendChild(s),s}var Ke=class extends de.Modal{constructor(e,t,r="server-managed",s=!1,a="",n,o,l="",c=!1,d=!0,u){super(e);this.orgSlug="";this.email="";this.password="";this.mfaCode="";this.passphrase="";this.passphraseConfirm="";this.submitBtn=null;this.orgSlugContainer=null;this.mfaContainer=null;this.mfaInputEl=null;this.mfaHintEl=null;this.mfaLabelEl=null;this.mfaRecoveryLinkEl=null;this.passphraseContainer=null;this.errorEl=null;this.showMfa=!1;this.recoveryMode=!1;this.onSubmit=t,this.encryptionMode=r,this.isZkSetup=s,this.currentOrgSlug=a,this.orgSlug=a,this.onForgotPassword=n,this.onConfirmReset=o,this.currentEmail=l,this.email=l,this.firstTimeSetup=c,this.requireOrgSlug=d,this.onRecoveryCode=u}onOpen(){let{contentEl:e}=this;e.empty(),this.modalEl.addClass("vaultguard-login-modal"),e.addClass("vaultguard-login-modal-content");let t=e.createDiv({cls:"vaultguard-login-icon"});Ft(t),e.createEl("h2",{text:"VaultGuard Login",cls:"vaultguard-login-title"}),e.createEl("p",{text:"Sign in to access your secured vault.",cls:"vaultguard-login-subtitle"}),this.errorEl=e.createDiv({cls:"vaultguard-login-error"}),this.errorEl.style.display="none";let r=e.createDiv({cls:"vaultguard-login-form"});this.orgSlugContainer=r.createDiv({cls:"vaultguard-field-group"}),(this.currentOrgSlug||!this.requireOrgSlug)&&(this.orgSlugContainer.style.display="none"),this.orgSlugContainer.createEl("label",{text:"Organization",cls:"vaultguard-field-label"}),this.orgSlugContainer.createEl("span",{text:"Enter the slug your admin gave you",cls:"vaultguard-field-hint"});let s=this.orgSlugContainer.createEl("input",{cls:"vaultguard-field-input",attr:{type:"text",placeholder:"acme-corp",spellcheck:"false"}});s.value=this.orgSlug,s.addEventListener("input",()=>{this.orgSlug=s.value.trim().toLowerCase()}),s.addEventListener("keydown",u=>{u.key==="Enter"&&this.handleSubmit()});let a=r.createDiv({cls:"vaultguard-field-group"});a.createEl("label",{text:"Email",cls:"vaultguard-field-label"});let n=a.createEl("input",{cls:"vaultguard-field-input",attr:{type:"email",placeholder:"you@company.com",spellcheck:"false"}});this.email&&(n.value=this.email),n.addEventListener("input",()=>{this.email=n.value}),n.addEventListener("keydown",u=>{u.key==="Enter"&&this.handleSubmit()});let o=r.createDiv({cls:"vaultguard-field-group"});o.createEl("label",{text:"Password",cls:"vaultguard-field-label"});let l=o.createEl("input",{cls:"vaultguard-field-input",attr:{type:"password",placeholder:"Password"}});if(l.addEventListener("input",()=>{this.password=l.value}),l.addEventListener("keydown",u=>{u.key==="Enter"&&this.handleSubmit()}),this.onForgotPassword&&this.onConfirmReset){let u=r.createDiv({cls:"vaultguard-forgot-link"});u.createEl("a",{text:"Forgot password?",href:"#"}),u.addEventListener("click",p=>{p.preventDefault(),this.showForgotPasswordForm()})}this.mfaContainer=r.createDiv({cls:"vaultguard-field-group vaultguard-mfa-container"}),this.mfaContainer.style.display="none",this.mfaLabelEl=this.mfaContainer.createEl("label",{text:"MFA Code",cls:"vaultguard-field-label"}),this.mfaHintEl=this.mfaContainer.createEl("span",{text:"Enter the 6-digit code from your authenticator app",cls:"vaultguard-field-hint"});let c=this.mfaContainer.createEl("input",{cls:"vaultguard-field-input vaultguard-mfa-input",attr:{type:"text",placeholder:"123456",maxlength:"6",inputmode:"numeric",pattern:"[0-9]*"}});if(this.mfaInputEl=c,c.addEventListener("input",()=>{this.mfaCode=c.value}),c.addEventListener("keydown",u=>{u.key==="Enter"&&this.handleSubmit()}),this.onRecoveryCode&&(this.mfaRecoveryLinkEl=this.mfaContainer.createDiv({cls:"vaultguard-forgot-link"}),this.mfaRecoveryLinkEl.createEl("a",{text:"Lost your authenticator? Use a recovery code",href:"#"}).addEventListener("click",p=>{p.preventDefault(),this.toggleRecoveryMode()})),this.passphraseContainer=r.createDiv({cls:"vaultguard-field-group vaultguard-passphrase-container"}),this.encryptionMode!=="hybrid-zk"&&(this.passphraseContainer.style.display="none"),this.isZkSetup){let u=this.passphraseContainer.createDiv({cls:"vaultguard-zk-warning"});u.createEl("strong",{text:"End-to-end encryption setup"}),u.createEl("br"),u.appendText("Your passphrase protects your encryption keys. It is separate from your login password."),u.createEl("br"),u.createEl("br"),u.createEl("strong",{text:"If you lose this passphrase, your data cannot be recovered"}),u.appendText(' unless your organization administrator performs an emergency key recovery. There is no "forgot passphrase" reset.'),this.passphraseContainer.createEl("label",{text:"Encryption Passphrase",cls:"vaultguard-field-label"});let p=this.passphraseContainer.createEl("input",{cls:"vaultguard-field-input",attr:{type:"password",placeholder:"Choose a strong passphrase"}});p.addEventListener("input",()=>{this.passphrase=p.value}),this.passphraseContainer.createEl("label",{text:"Confirm Passphrase",cls:"vaultguard-field-label"});let f=this.passphraseContainer.createEl("input",{cls:"vaultguard-field-input",attr:{type:"password",placeholder:"Confirm passphrase"}});f.addEventListener("input",()=>{this.passphraseConfirm=f.value}),f.addEventListener("keydown",m=>{m.key==="Enter"&&this.handleSubmit()})}else{this.passphraseContainer.createEl("label",{text:"Encryption Passphrase",cls:"vaultguard-field-label"}),this.passphraseContainer.createEl("span",{text:"This unlocks your end-to-end encryption keys locally.",cls:"vaultguard-field-hint"});let u=this.passphraseContainer.createEl("input",{cls:"vaultguard-field-input",attr:{type:"password",placeholder:"Encryption passphrase"}});u.addEventListener("input",()=>{this.passphrase=u.value}),u.addEventListener("keydown",p=>{p.key==="Enter"&&this.handleSubmit()})}let d=e.createDiv({cls:"vaultguard-login-actions"});new de.ButtonComponent(d).setButtonText("Cancel").onClick(()=>this.close()),this.submitBtn=new de.ButtonComponent(d).setButtonText("Sign In").setCta().onClick(()=>this.handleSubmit()),setTimeout(()=>{this.currentOrgSlug||!this.requireOrgSlug?n.focus():s.focus()},50),this.firstTimeSetup&&this.onForgotPassword&&this.onConfirmReset&&this.showForgotPasswordForm()}onClose(){this.modalEl.removeClass("vaultguard-login-modal"),this.contentEl.removeClass("vaultguard-login-modal-content"),this.contentEl.empty()}showMfaPrompt(){this.showMfa=!0,this.recoveryMode=!1,this.mfaContainer&&(this.mfaContainer.style.display=""),this.applyMfaModeUi(),this.showError(""),this.submitBtn&&this.submitBtn.setButtonText("Verify MFA")}toggleRecoveryMode(){this.recoveryMode=!this.recoveryMode,this.mfaCode="",this.mfaInputEl&&(this.mfaInputEl.value=""),this.applyMfaModeUi(),this.showError(""),this.submitBtn&&this.submitBtn.setButtonText(this.recoveryMode?"Use Recovery Code":"Verify MFA")}applyMfaModeUi(){if(!(!this.mfaInputEl||!this.mfaLabelEl||!this.mfaHintEl)){if(this.recoveryMode){if(this.mfaLabelEl.setText("Recovery Code"),this.mfaHintEl.setText("Enter one of the recovery codes you saved when you set up MFA. This will reset your authenticator \u2014 you'll be asked to set up a new one on next sign-in."),this.mfaInputEl.setAttribute("placeholder","XXXXX-XXXXX"),this.mfaInputEl.setAttribute("maxlength","20"),this.mfaInputEl.removeAttribute("inputmode"),this.mfaInputEl.removeAttribute("pattern"),this.mfaRecoveryLinkEl){let e=this.mfaRecoveryLinkEl.querySelector("a");e&&e.setText("Have your authenticator? Use TOTP code")}}else if(this.mfaLabelEl.setText("MFA Code"),this.mfaHintEl.setText("Enter the 6-digit code from your authenticator app"),this.mfaInputEl.setAttribute("placeholder","123456"),this.mfaInputEl.setAttribute("maxlength","6"),this.mfaInputEl.setAttribute("inputmode","numeric"),this.mfaInputEl.setAttribute("pattern","[0-9]*"),this.mfaRecoveryLinkEl){let e=this.mfaRecoveryLinkEl.querySelector("a");e&&e.setText("Lost your authenticator? Use a recovery code")}}}showError(e){this.errorEl&&(this.errorEl.classList.remove("vaultguard-login-success"),e?(this.errorEl.setText(e),this.errorEl.style.display=""):this.errorEl.style.display="none")}async handleSubmit(){if(this.showMfa&&this.recoveryMode){await this.handleRecoveryCodeSubmit();return}if(this.requireOrgSlug&&!this.orgSlug){this.showError("Please enter your organization slug.");return}if(!this.email){this.showError("Please enter your email address.");return}if(!this.password){this.showError("Please enter your password.");return}if(this.showMfa&&!this.mfaCode){this.showError("Please enter your MFA code.");return}if(this.encryptionMode==="hybrid-zk"){if(!this.passphrase){this.showError("Please enter your encryption passphrase.");return}if(this.isZkSetup){if(this.passphrase.length<12){this.showError("Passphrase must be at least 12 characters for adequate security.");return}if(this.passphrase!==this.passphraseConfirm){this.showError("Passphrases do not match.");return}}}this.showError("");let e=this.submitBtn?.buttonEl;e&&$(e,!0,{label:this.showMfa?"Verifying":"Signing in"});try{await this.onSubmit({orgSlug:this.orgSlug,email:this.email,password:this.password,mfaCode:this.mfaCode,passphrase:this.passphrase,zkSetup:this.isZkSetup}),this.close()}catch(t){let r=t instanceof Error?t.message:"Login failed";r.toLowerCase().includes("mfa")||r.toLowerCase().includes("challenge")||r.toLowerCase().includes("2fa")?this.showMfaPrompt():r.toLowerCase().includes("incorrect passphrase")?this.showError("Incorrect encryption passphrase. If you have lost your passphrase, contact your organization administrator for key recovery."):this.showError(r)}finally{e?.isConnected&&($(e,!1),this.submitBtn?.setButtonText(this.showMfa?"Verify MFA":"Sign In"))}}showForgotPasswordForm(){let{contentEl:e}=this;e.empty();let t=e.createDiv({cls:"vaultguard-login-icon"});Ft(t),this.firstTimeSetup?(e.createEl("h2",{text:"Set Your Password",cls:"vaultguard-login-title"}),e.createEl("p",{text:"Welcome to VaultGuard! Send a verification code to your email, then choose your password.",cls:"vaultguard-login-subtitle"})):(e.createEl("h2",{text:"Reset Password",cls:"vaultguard-login-title"}),e.createEl("p",{text:"Enter your email to receive a password reset code.",cls:"vaultguard-login-subtitle"}));let r=e.createDiv({cls:"vaultguard-login-error"});r.style.display="none";let s=e.createDiv({cls:"vaultguard-reset-success"});s.style.display="none";let a=g=>{g?(r.setText(g),r.style.display="",s.style.display="none"):r.style.display="none"},n=g=>{g?(s.setText(g),s.style.display="",r.style.display="none"):s.style.display="none"},o=e.createDiv({cls:"vaultguard-login-form"}),l=o.createDiv({cls:"vaultguard-field-group"});l.createEl("label",{text:"Email",cls:"vaultguard-field-label"});let c=l.createEl("input",{cls:"vaultguard-field-input",attr:{type:"email",placeholder:"you@company.com",spellcheck:"false"}});c.value=this.email;let d,u=o.createDiv({cls:"vaultguard-reset-send-row"});d=new de.ButtonComponent(u).setButtonText("Send Reset Code").setCta().onClick(async()=>{let g=c.value.trim();if(!g){a("Please enter your email address.");return}$(d.buttonEl,!0,{label:"Sending"}),a("");try{await this.onForgotPassword(g),n("If an account exists with this email, a reset code has been sent. Check your inbox."),p.style.display="",setTimeout(()=>m.focus(),50)}catch(w){a(w instanceof Error?w.message:"Failed to send reset code.")}finally{d.buttonEl.isConnected&&($(d.buttonEl,!1),d.setButtonText("Resend Code"))}});let p=o.createDiv({cls:"vaultguard-reset-confirm-section"});p.style.display="none";let f=p.createDiv({cls:"vaultguard-field-group"});f.createEl("label",{text:"Reset Code",cls:"vaultguard-field-label"}),f.createEl("span",{text:"Enter the code sent to your email",cls:"vaultguard-field-hint"});let m=f.createEl("input",{cls:"vaultguard-field-input",attr:{type:"text",placeholder:"123456",inputmode:"numeric"}}),v=p.createDiv({cls:"vaultguard-field-group"});v.createEl("label",{text:"New Password",cls:"vaultguard-field-label"}),v.createEl("span",{text:"12+ characters with uppercase, lowercase, numbers, and symbols",cls:"vaultguard-field-hint"});let A=v.createEl("input",{cls:"vaultguard-field-input",attr:{type:"password",placeholder:"New password"}}),k=p.createDiv({cls:"vaultguard-field-group"});k.createEl("label",{text:"Confirm New Password",cls:"vaultguard-field-label"});let I=k.createEl("input",{cls:"vaultguard-field-input",attr:{type:"password",placeholder:"Confirm new password"}}),U,V=p.createDiv({cls:"vaultguard-reset-send-row"});U=new de.ButtonComponent(V).setButtonText("Reset Password").setCta().onClick(async()=>{let g=c.value.trim(),w=m.value.trim(),y=A.value,x=I.value;if(!w){a("Please enter the reset code.");return}if(!y){a("Please enter a new password.");return}if(y.length<12){a("Password must be at least 12 characters.");return}if(y!==x){a("Passwords do not match.");return}$(U.buttonEl,!0,{label:"Resetting"}),a("");try{await this.onConfirmReset(g,w,y),n("Password reset successfully. You can now sign in with your new password."),setTimeout(()=>this.onOpen(),2e3)}catch(E){a(E instanceof Error?E.message:"Password reset failed.")}finally{U.buttonEl.isConnected&&$(U.buttonEl,!1)}}),I.addEventListener("keydown",g=>{g.key==="Enter"&&U.buttonEl.click()});let P=e.createDiv({cls:"vaultguard-login-actions"});new de.ButtonComponent(P).setButtonText("Back to Login").onClick(()=>this.onOpen()),setTimeout(()=>c.focus(),50)}async handleRecoveryCodeSubmit(){if(!this.onRecoveryCode)return;if(!this.email){this.showError("Please enter your email address.");return}let e=this.mfaCode.trim();if(!e){this.showError("Please enter a recovery code.");return}this.showError("");let t=this.submitBtn?.buttonEl;t&&$(t,!0,{label:"Verifying"});try{await this.onRecoveryCode(this.email,e),this.recoveryMode=!1,this.showMfa=!1,this.mfaCode="",this.mfaInputEl&&(this.mfaInputEl.value=""),this.mfaContainer&&(this.mfaContainer.style.display="none"),this.applyMfaModeUi(),this.submitBtn?.setButtonText("Sign In"),this.showError(""),this.errorEl&&(this.errorEl.setText("Recovery code accepted. Sign in again with your password to set up a new authenticator."),this.errorEl.classList.add("vaultguard-login-success"),this.errorEl.style.display="")}catch(r){let s=r instanceof Error?r.message:"Recovery failed.";this.showError(s)}finally{t?.isConnected&&($(t,!1),this.submitBtn?.setButtonText(this.recoveryMode?"Use Recovery Code":this.showMfa?"Verify MFA":"Sign In"))}}};var Be=require("obsidian");var Je=class extends Be.Modal{constructor(e,t,r,s){super(e);this.decided=!1;this.plan=t,this.defaultStrategy=r,this.resolveDecision=s}onOpen(){let{contentEl:e}=this;e.empty(),this.modalEl.addClass("vaultguard-reconciliation-modal"),e.addClass("vaultguard-reconciliation-content"),e.createEl("h2",{text:"Reconcile vault contents",cls:"vaultguard-modal-title"}),e.createEl("p",{text:"VaultGuard compared this Obsidian folder with the server vault. Review the plan below before any files are downloaded, uploaded, or modified.",cls:"vaultguard-modal-description"});let t=e.createDiv({cls:"vaultguard-reconciliation-summary"});if(this.renderRow(t,"Download from server",this.plan.serverOnly.length,"Files that exist only on the server."),this.renderRow(t,"Upload from this folder",this.plan.localOnly.length,"Files that exist only in this Obsidian folder."),this.renderRow(t,"Conflicts",this.plan.conflicts.length,"Same path on both sides, different content."),this.plan.conflicts.length>0){let s=e.createEl("details",{cls:"vaultguard-reconciliation-details"});s.createEl("summary",{text:`Show conflicting paths (${this.plan.conflicts.length})`});let a=s.createEl("ul");for(let c of this.plan.conflicts.slice(0,50))a.createEl("li",{text:c});this.plan.conflicts.length>50&&s.createEl("p",{text:`\u2026and ${this.plan.conflicts.length-50} more.`,cls:"setting-item-description"}),e.createEl("h3",{text:"Conflict resolution",cls:"vaultguard-modal-section-title"});let n=e.createEl("select",{cls:"vaultguard-field-input"}),o=[["duplicate","Keep both - save my local copy as a duplicate (safest)"],["keep_local","Keep my local version - overwrite the server"],["keep_remote","Keep the server version - overwrite my local file"]];for(let[c,d]of o){let u=n.createEl("option",{text:d});u.value=c}let l=o.some(([c])=>c===this.defaultStrategy)?this.defaultStrategy:"duplicate";n.value=l,this.defaultStrategy=l,n.addEventListener("change",()=>{this.defaultStrategy=n.value})}let r=e.createDiv({cls:"vaultguard-modal-actions"});new Be.ButtonComponent(r).setButtonText("Cancel").onClick(()=>{this.decided=!0,this.close(),this.resolveDecision({proceed:!1,conflictStrategy:this.defaultStrategy})}),new Be.ButtonComponent(r).setButtonText(this.proceedLabel()).setCta().onClick(()=>{this.decided=!0,this.close(),this.resolveDecision({proceed:!0,conflictStrategy:this.defaultStrategy})})}onClose(){this.modalEl.removeClass("vaultguard-reconciliation-modal"),this.contentEl.removeClass("vaultguard-reconciliation-content"),this.contentEl.empty(),this.decided||this.resolveDecision({proceed:!1,conflictStrategy:this.defaultStrategy})}renderRow(e,t,r,s){e.createEl("strong",{text:String(r),cls:"vaultguard-reconciliation-count"});let a=e.createDiv({cls:"vaultguard-reconciliation-row-text"});a.createEl("div",{text:t,cls:"vaultguard-reconciliation-row-label"}),a.createEl("div",{text:s,cls:"setting-item-description"})}proceedLabel(){let{serverOnly:e,localOnly:t,conflicts:r}=this.plan;return e.length===0&&t.length===0&&r.length===0?"Finish (nothing to do)":"Apply plan"}};var ie=require("obsidian"),Ye=class extends ie.Modal{constructor(e,t){super(e);this.shares=[];this.apiClient=t}async onOpen(){let{contentEl:e}=this;e.empty(),this.modalEl.addClass("vaultguard-share-modal"),e.createEl("h2",{text:"VaultGuard share links",cls:"vaultguard-modal-title"}),e.createEl("p",{text:"Share links route a teammate to a specific file in this vault. They only work for vault members \u2014 non-members can't resolve them.",cls:"vaultguard-modal-description"});let t=e.createDiv({cls:"vaultguard-share-list"});t.createEl("p",{text:"Loading\u2026",cls:"setting-item-description"});try{this.shares=await this.apiClient.listShares()}catch(r){t.empty();let s=r instanceof Error?r.message:String(r);t.createEl("p",{text:`Failed to load share links: ${s}`,cls:"setting-item-description"});return}t.empty(),this.renderShares(t)}renderShares(e){if(this.shares.length===0){e.createEl("p",{text:'No active share links. Right-click any file \u2192 "VaultGuard: Copy share link" to create one.',cls:"setting-item-description"});return}for(let t of this.shares){let r=e.createDiv({cls:"vaultguard-share-row"}),s=r.createDiv({cls:"vaultguard-share-info"});s.createEl("div",{text:t.relPath,cls:"vaultguard-share-path"});let a=s.createEl("div",{cls:"vaultguard-share-meta setting-item-description"});a.appendText(`Created ${gr(t.createdAt)}`),t.expiresAt&&a.appendText(` \xB7 expires ${gr(t.expiresAt)}`),a.appendText(" \xB7 ");let n=a.createEl("a",{text:t.url,href:t.url});n.setAttr("target","_blank"),n.setAttr("rel","noreferrer noopener");let o=r.createDiv({cls:"vaultguard-share-actions"});new ie.ButtonComponent(o).setButtonText("Copy").onClick(async()=>{try{await navigator.clipboard.writeText(t.url),new ie.Notice("Link copied to clipboard.")}catch{new ie.Notice(t.url,12e3)}}),new ie.ButtonComponent(o).setButtonText("Revoke").setWarning().onClick(async()=>{try{await this.apiClient.revokeShare(t.shareId),this.shares=this.shares.filter(c=>c.shareId!==t.shareId);let l=r.parentElement;r.remove(),l&&this.shares.length===0&&this.renderShares(l),new ie.Notice("Share link revoked.")}catch(l){let c=l instanceof Error?l.message:String(l);new ie.Notice(`Failed to revoke: ${c}`,6e3)}})}}onClose(){this.contentEl.empty()}};function gr(h){let i=new Date(h).getTime();if(Number.isNaN(i))return h;let e=Math.round((i-Date.now())/1e3),t=e<0,r=Math.abs(e),s=[[60,"second"],[60,"minute"],[24,"hour"],[30,"day"],[12,"month"],[Number.POSITIVE_INFINITY,"year"]],a=r,n="second";for(let[l,c]of s){if(a<l){n=c;break}a=Math.floor(a/l),n=c}let o=a===1?n:`${n}s`;return t?`${a} ${o} ago`:`in ${a} ${o}`}var Ae=require("obsidian"),Qe=class extends Ae.Modal{constructor(e,t,r){super(e);this.decided=!1;this.prompt=t,this.resolveDecision=r}onOpen(){let{contentEl:e}=this;e.empty(),this.modalEl.addClass("vaultguard-plugin-allowlist-modal"),e.createEl("h2",{text:`Install "${this.prompt.displayName}"?`}),e.createEl("p",{text:"Your vault admin has added this plugin to the team allowlist. Plugins run code with full access to your vault, so VaultGuard always asks before enabling one."});let t=e.createDiv({cls:"vaultguard-allowlist-meta"});this.renderField(t,"Plugin ID",this.prompt.pluginId),this.prompt.version&&this.renderField(t,"Version",this.prompt.version),this.renderField(t,"Added by",this.prompt.addedBy),this.prompt.note&&this.renderField(t,"Note",this.prompt.note);let r=e.createDiv({cls:"vaultguard-allowlist-status"});switch(this.prompt.hashStatus){case"verified":r.createEl("p",{text:"\u2705 Bundle hash matches the admin-pinned signature."});break;case"unsigned":r.createEl("p",{text:"\u26A0\uFE0F The admin did not pin a SHA-256 hash. The plugin's bytes have not been verified against a signed reference. Proceed only if you trust the admin and your sync channel."});break;case"mismatch":if(r.createEl("p",{text:"\u274C The synced plugin bytes do NOT match the admin's pinned hash. This usually means the bundle was modified after the admin approved it. Installation is disabled \u2014 contact your admin."}),this.prompt.expectedHash&&this.prompt.localHash){let n=r.createEl("details");n.createEl("summary",{text:"Show hashes"}),n.createEl("p",{text:`Expected: ${this.prompt.expectedHash}`}),n.createEl("p",{text:`Local: ${this.prompt.localHash}`})}break;case"missing":r.createEl("p",{text:"\u23F3 The plugin's main.js has not finished syncing to this device yet. Try again after the next sync completes."});break}let s=e.createDiv({cls:"vaultguard-allowlist-actions"}),a=new Ae.ButtonComponent(s).setButtonText("Install and enable").setCta().onClick(()=>this.decide("install"));(this.prompt.hashStatus==="mismatch"||this.prompt.hashStatus==="missing")&&a.setDisabled(!0),new Ae.ButtonComponent(s).setButtonText("Skip for now").onClick(()=>this.decide("skip")),new Ae.ButtonComponent(s).setButtonText("Don't ask again").setWarning().onClick(()=>this.decide("ignore"))}onClose(){this.contentEl.empty(),this.decided||this.resolveDecision("skip")}renderField(e,t,r){let s=e.createDiv({cls:"vaultguard-allowlist-row"});s.createEl("strong",{text:`${t}: `}),s.createSpan({text:r})}decide(e){this.decided=!0,this.resolveDecision(e),this.close()}};var ne=require("obsidian");async function $t(h,i,e,t){let s=`https://cognito-idp.${h.split("_")[0]}.amazonaws.com/`,a=await(0,ne.requestUrl)({url:s,method:"POST",headers:{"Content-Type":"application/x-amz-json-1.1","X-Amz-Target":"AWSCognitoIdentityProviderService.InitiateAuth"},body:JSON.stringify({AuthFlow:"USER_PASSWORD_AUTH",ClientId:i,AuthParameters:{USERNAME:e,PASSWORD:t}}),throw:!1}),n=a.json;if(a.status<200||a.status>=300){let l=n.__type||"",c=n.message||n.Message||"Authentication failed";throw l.includes("NotAuthorizedException")?new Error("Invalid email or password."):l.includes("UserNotFoundException")?new Error("Invalid email or password."):l.includes("UserNotConfirmedException")?new Error("Account not confirmed. Check your email for a verification link."):l.includes("PasswordResetRequiredException")?new Error("Password reset required. Contact your administrator."):new Error(c)}if(n.ChallengeName)return{tokens:{accessToken:"",idToken:"",refreshToken:"",expiresIn:0},challengeName:n.ChallengeName,session:n.Session};let o=n.AuthenticationResult;return{tokens:{accessToken:o.AccessToken,idToken:o.IdToken,refreshToken:o.RefreshToken,expiresIn:o.ExpiresIn}}}async function Ot(h,i,e,t,r){let a=`https://cognito-idp.${h.split("_")[0]}.amazonaws.com/`,n=await(0,ne.requestUrl)({url:a,method:"POST",headers:{"Content-Type":"application/x-amz-json-1.1","X-Amz-Target":"AWSCognitoIdentityProviderService.RespondToAuthChallenge"},body:JSON.stringify({ChallengeName:e,ClientId:i,Session:t,ChallengeResponses:r}),throw:!1}),o=n.json;if(n.status<200||n.status>=300){let c=o.message||o.Message||"Challenge response failed";throw new Error(c)}if(o.ChallengeName)return{tokens:{accessToken:"",idToken:"",refreshToken:"",expiresIn:0},challengeName:o.ChallengeName,session:o.Session};let l=o.AuthenticationResult;return{tokens:{accessToken:l.AccessToken,idToken:l.IdToken,refreshToken:l.RefreshToken,expiresIn:l.ExpiresIn}}}async function fr(h,i){let t=`https://cognito-idp.${h.split("_")[0]}.amazonaws.com/`,r=await(0,ne.requestUrl)({url:t,method:"POST",headers:{"Content-Type":"application/x-amz-json-1.1","X-Amz-Target":"AWSCognitoIdentityProviderService.AssociateSoftwareToken"},body:JSON.stringify({Session:i}),throw:!1}),s=r.json;if(r.status<200||r.status>=300)throw new Error(s.message||s.Message||"Failed to start MFA setup");return{secretCode:s.SecretCode,session:s.Session}}async function mr(h,i,e,t){let s=`https://cognito-idp.${h.split("_")[0]}.amazonaws.com/`,a=await(0,ne.requestUrl)({url:s,method:"POST",headers:{"Content-Type":"application/x-amz-json-1.1","X-Amz-Target":"AWSCognitoIdentityProviderService.VerifySoftwareToken"},body:JSON.stringify({Session:i,UserCode:e,FriendlyDeviceName:t??"VaultGuard"}),throw:!1}),n=a.json;if(a.status<200||a.status>=300){let o=n.message||n.Message||"MFA verification failed";throw(n.__type||"").includes("CodeMismatchException")?new Error("Invalid code. Please check your authenticator app and try again."):new Error(o)}return{session:n.Session,status:n.Status}}async function vr(h,i,e){let r=`https://cognito-idp.${h.split("_")[0]}.amazonaws.com/`,s=await(0,ne.requestUrl)({url:r,method:"POST",headers:{"Content-Type":"application/x-amz-json-1.1","X-Amz-Target":"AWSCognitoIdentityProviderService.InitiateAuth"},body:JSON.stringify({AuthFlow:"REFRESH_TOKEN_AUTH",ClientId:i,AuthParameters:{REFRESH_TOKEN:e}}),throw:!1}),a=s.json;if(s.status<200||s.status>=300)throw new Error(a.message||"Token refresh failed");let n=a.AuthenticationResult;return{accessToken:n.AccessToken,idToken:n.IdToken,refreshToken:e,expiresIn:n.ExpiresIn}}async function yr(h,i,e){let r=`https://cognito-idp.${h.split("_")[0]}.amazonaws.com/`,s=await(0,ne.requestUrl)({url:r,method:"POST",headers:{"Content-Type":"application/x-amz-json-1.1","X-Amz-Target":"AWSCognitoIdentityProviderService.ForgotPassword"},body:JSON.stringify({ClientId:i,Username:e}),throw:!1});if(s.status>=200&&s.status<300)return;if(s.json.__type?.includes("LimitExceededException"))throw new Error("Too many attempts. Please wait before trying again.")}async function wr(h,i,e,t,r){let a=`https://cognito-idp.${h.split("_")[0]}.amazonaws.com/`,n=await(0,ne.requestUrl)({url:a,method:"POST",headers:{"Content-Type":"application/x-amz-json-1.1","X-Amz-Target":"AWSCognitoIdentityProviderService.ConfirmForgotPassword"},body:JSON.stringify({ClientId:i,Username:e,ConfirmationCode:t,Password:r}),throw:!1});if(n.status>=200&&n.status<300)return;let o=n.json,l=o.__type||"";throw l.includes("CodeMismatchException")?new Error("Invalid reset code. Please check and try again."):l.includes("ExpiredCodeException")?new Error("Reset code has expired. Please request a new one."):l.includes("InvalidPasswordException")?new Error("Password must be 12+ characters with uppercase, lowercase, numbers, and symbols."):new Error(o.message||o.Message||"Password reset failed.")}async function br(h,i,e){let t=h.replace(/\/+$/,""),r=await(0,ne.requestUrl)({url:`${t}/auth/recovery-codes/verify`,method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i,code:e}),throw:!1});if(r.status>=200&&r.status<300)return;if(r.status===429)throw new Error("Too many recovery attempts. Try again in an hour or contact your administrator.");let s="Recovery failed. Please try again.";try{let a=r.json;a?.message?s=a.message:a?.error&&(s=a.error)}catch{}throw new Error(s)}var Le=require("obsidian");var Re=function(h,i){let r=h,s=Ne[i],a=null,n=0,o=null,l=[],c={},d=function(g,w){n=r*4+17,a=(function(y){let x=new Array(y);for(let E=0;E<y;E+=1){x[E]=new Array(y);for(let R=0;R<y;R+=1)x[E][R]=null}return x})(n),u(0,0),u(n-7,0),u(0,n-7),m(),f(),A(g,w),r>=7&&v(g),o==null&&(o=U(r,s,l)),k(o,w)},u=function(g,w){for(let y=-1;y<=7;y+=1)if(!(g+y<=-1||n<=g+y))for(let x=-1;x<=7;x+=1)w+x<=-1||n<=w+x||(0<=y&&y<=6&&(x==0||x==6)||0<=x&&x<=6&&(y==0||y==6)||2<=y&&y<=4&&2<=x&&x<=4?a[g+y][w+x]=!0:a[g+y][w+x]=!1)},p=function(){let g=0,w=0;for(let y=0;y<8;y+=1){d(!0,y);let x=he.getLostPoint(c);(y==0||g>x)&&(g=x,w=y)}return w},f=function(){for(let g=8;g<n-8;g+=1)a[g][6]==null&&(a[g][6]=g%2==0);for(let g=8;g<n-8;g+=1)a[6][g]==null&&(a[6][g]=g%2==0)},m=function(){let g=he.getPatternPosition(r);for(let w=0;w<g.length;w+=1)for(let y=0;y<g.length;y+=1){let x=g[w],E=g[y];if(a[x][E]==null)for(let R=-2;R<=2;R+=1)for(let S=-2;S<=2;S+=1)R==-2||R==2||S==-2||S==2||R==0&&S==0?a[x+R][E+S]=!0:a[x+R][E+S]=!1}},v=function(g){let w=he.getBCHTypeNumber(r);for(let y=0;y<18;y+=1){let x=!g&&(w>>y&1)==1;a[Math.floor(y/3)][y%3+n-8-3]=x}for(let y=0;y<18;y+=1){let x=!g&&(w>>y&1)==1;a[y%3+n-8-3][Math.floor(y/3)]=x}},A=function(g,w){let y=s<<3|w,x=he.getBCHTypeInfo(y);for(let E=0;E<15;E+=1){let R=!g&&(x>>E&1)==1;E<6?a[E][8]=R:E<8?a[E+1][8]=R:a[n-15+E][8]=R}for(let E=0;E<15;E+=1){let R=!g&&(x>>E&1)==1;E<8?a[8][n-E-1]=R:E<9?a[8][15-E-1+1]=R:a[8][15-E-1]=R}a[n-8][8]=!g},k=function(g,w){let y=-1,x=n-1,E=7,R=0,S=he.getMaskFunction(w);for(let L=n-1;L>0;L-=2)for(L==6&&(L-=1);;){for(let B=0;B<2;B+=1)if(a[x][L-B]==null){let N=!1;R<g.length&&(N=(g[R]>>>E&1)==1),S(x,L-B)&&(N=!N),a[x][L-B]=N,E-=1,E==-1&&(R+=1,E=7)}if(x+=y,x<0||n<=x){x-=y,y=-y;break}}},I=function(g,w){let y=0,x=0,E=0,R=new Array(w.length),S=new Array(w.length);for(let M=0;M<w.length;M+=1){let F=w[M].dataCount,X=w[M].totalCount-F;x=Math.max(x,F),E=Math.max(E,X),R[M]=new Array(F);for(let ae=0;ae<R[M].length;ae+=1)R[M][ae]=255&g.getBuffer()[ae+y];y+=F;let Tt=he.getErrorCorrectPolynomial(X),lr=Fe(R[M],Tt.getLength()-1).mod(Tt);S[M]=new Array(Tt.getLength()-1);for(let ae=0;ae<S[M].length;ae+=1){let cr=ae+lr.getLength()-S[M].length;S[M][ae]=cr>=0?lr.getAt(cr):0}}let L=0;for(let M=0;M<w.length;M+=1)L+=w[M].totalCount;let B=new Array(L),N=0;for(let M=0;M<x;M+=1)for(let F=0;F<w.length;F+=1)M<R[F].length&&(B[N]=R[F][M],N+=1);for(let M=0;M<E;M+=1)for(let F=0;F<w.length;F+=1)M<S[F].length&&(B[N]=S[F][M],N+=1);return B},U=function(g,w,y){let x=xr.getRSBlocks(g,w),E=Er();for(let S=0;S<y.length;S+=1){let L=y[S];E.put(L.getMode(),4),E.put(L.getLength(),he.getLengthInBits(L.getMode(),g)),L.write(E)}let R=0;for(let S=0;S<x.length;S+=1)R+=x[S].dataCount;if(E.getLengthInBits()>R*8)throw"code length overflow. ("+E.getLengthInBits()+">"+R*8+")";for(E.getLengthInBits()+4<=R*8&&E.put(0,4);E.getLengthInBits()%8!=0;)E.putBit(!1);for(;!(E.getLengthInBits()>=R*8||(E.put(236,8),E.getLengthInBits()>=R*8));)E.put(17,8);return I(E,x)};c.addData=function(g,w){w=w||"Byte";let y=null;switch(w){case"Numeric":y=gi(g);break;case"Alphanumeric":y=fi(g);break;case"Byte":y=mi(g);break;case"Kanji":y=vi(g);break;default:throw"mode:"+w}l.push(y),o=null},c.isDark=function(g,w){if(g<0||n<=g||w<0||n<=w)throw g+","+w;return a[g][w]},c.getModuleCount=function(){return n},c.make=function(){if(r<1){let g=1;for(;g<40;g++){let w=xr.getRSBlocks(g,s),y=Er();for(let E=0;E<l.length;E++){let R=l[E];y.put(R.getMode(),4),y.put(R.getLength(),he.getLengthInBits(R.getMode(),g)),R.write(y)}let x=0;for(let E=0;E<w.length;E++)x+=w[E].dataCount;if(y.getLengthInBits()<=x*8)break}r=g}d(!1,p())},c.createTableTag=function(g,w){g=g||2,w=typeof w>"u"?g*4:w;let y="";y+='<table style="',y+=" border-width: 0px; border-style: none;",y+=" border-collapse: collapse;",y+=" padding: 0px; margin: "+w+"px;",y+='">',y+="<tbody>";for(let x=0;x<c.getModuleCount();x+=1){y+="<tr>";for(let E=0;E<c.getModuleCount();E+=1)y+='<td style="',y+=" border-width: 0px; border-style: none;",y+=" border-collapse: collapse;",y+=" padding: 0px; margin: 0px;",y+=" width: "+g+"px;",y+=" height: "+g+"px;",y+=" background-color: ",y+=c.isDark(x,E)?"#000000":"#ffffff",y+=";",y+='"/>';y+="</tr>"}return y+="</tbody>",y+="</table>",y},c.createSvgTag=function(g,w,y,x){let E={};typeof arguments[0]=="object"&&(E=arguments[0],g=E.cellSize,w=E.margin,y=E.alt,x=E.title),g=g||2,w=typeof w>"u"?g*4:w,y=typeof y=="string"?{text:y}:y||{},y.text=y.text||null,y.id=y.text?y.id||"qrcode-description":null,x=typeof x=="string"?{text:x}:x||{},x.text=x.text||null,x.id=x.text?x.id||"qrcode-title":null;let R=c.getModuleCount()*g+w*2,S,L,B,N,M="",F;for(F="l"+g+",0 0,"+g+" -"+g+",0 0,-"+g+"z ",M+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',M+=E.scalable?"":' width="'+R+'px" height="'+R+'px"',M+=' viewBox="0 0 '+R+" "+R+'" ',M+=' preserveAspectRatio="xMinYMin meet"',M+=x.text||y.text?' role="img" aria-labelledby="'+V([x.id,y.id].join(" ").trim())+'"':"",M+=">",M+=x.text?'<title id="'+V(x.id)+'">'+V(x.text)+"</title>":"",M+=y.text?'<description id="'+V(y.id)+'">'+V(y.text)+"</description>":"",M+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',M+='<path d="',B=0;B<c.getModuleCount();B+=1)for(N=B*g+w,S=0;S<c.getModuleCount();S+=1)c.isDark(B,S)&&(L=S*g+w,M+="M"+L+","+N+F);return M+='" stroke="transparent" fill="black"/>',M+="</svg>",M},c.createDataURL=function(g,w){g=g||2,w=typeof w>"u"?g*4:w;let y=c.getModuleCount()*g+w*2,x=w,E=y-w;return xi(y,y,function(R,S){if(x<=R&&R<E&&x<=S&&S<E){let L=Math.floor((R-x)/g),B=Math.floor((S-x)/g);return c.isDark(B,L)?0:1}else return 1})},c.createImgTag=function(g,w,y){g=g||2,w=typeof w>"u"?g*4:w;let x=c.getModuleCount()*g+w*2,E="";return E+="<img",E+=' src="',E+=c.createDataURL(g,w),E+='"',E+=' width="',E+=x,E+='"',E+=' height="',E+=x,E+='"',y&&(E+=' alt="',E+=V(y),E+='"'),E+="/>",E};let V=function(g){let w="";for(let y=0;y<g.length;y+=1){let x=g.charAt(y);switch(x){case"<":w+="&lt;";break;case">":w+="&gt;";break;case"&":w+="&amp;";break;case'"':w+="&quot;";break;default:w+=x;break}}return w},P=function(g){g=typeof g>"u"?2:g;let y=c.getModuleCount()*1+g*2,x=g,E=y-g,R,S,L,B,N,M={"\u2588\u2588":"\u2588","\u2588 ":"\u2580"," \u2588":"\u2584","  ":" "},F={"\u2588\u2588":"\u2580","\u2588 ":"\u2580"," \u2588":" ","  ":" "},X="";for(R=0;R<y;R+=2){for(L=Math.floor((R-x)/1),B=Math.floor((R+1-x)/1),S=0;S<y;S+=1)N="\u2588",x<=S&&S<E&&x<=R&&R<E&&c.isDark(L,Math.floor((S-x)/1))&&(N=" "),x<=S&&S<E&&x<=R+1&&R+1<E&&c.isDark(B,Math.floor((S-x)/1))?N+=" ":N+="\u2588",X+=g<1&&R+1>=E?F[N]:M[N];X+=`
`}return y%2&&g>0?X.substring(0,X.length-y-1)+Array(y+1).join("\u2580"):X.substring(0,X.length-1)};return c.createASCII=function(g,w){if(g=g||1,g<2)return P(w);g-=1,w=typeof w>"u"?g*2:w;let y=c.getModuleCount()*g+w*2,x=w,E=y-w,R,S,L,B,N=Array(g+1).join("\u2588\u2588"),M=Array(g+1).join("  "),F="",X="";for(R=0;R<y;R+=1){for(L=Math.floor((R-x)/g),X="",S=0;S<y;S+=1)B=1,x<=S&&S<E&&x<=R&&R<E&&c.isDark(L,Math.floor((S-x)/g))&&(B=0),X+=B?N:M;for(L=0;L<g;L+=1)F+=X+`
`}return F.substring(0,F.length-1)},c.renderTo2dContext=function(g,w){w=w||2;let y=c.getModuleCount();for(let x=0;x<y;x++)for(let E=0;E<y;E++)g.fillStyle=c.isDark(x,E)?"black":"white",g.fillRect(E*w,x*w,w,w)},c};Re.stringToBytes=function(h){let i=[];for(let e=0;e<h.length;e+=1){let t=h.charCodeAt(e);i.push(t&255)}return i};Re.createStringToBytes=function(h,i){let e=(function(){let r=wi(h),s=function(){let o=r.read();if(o==-1)throw"eof";return o},a=0,n={};for(;;){let o=r.read();if(o==-1)break;let l=s(),c=s(),d=s(),u=String.fromCharCode(o<<8|l),p=c<<8|d;n[u]=p,a+=1}if(a!=i)throw a+" != "+i;return n})(),t=63;return function(r){let s=[];for(let a=0;a<r.length;a+=1){let n=r.charCodeAt(a);if(n<128)s.push(n);else{let o=e[r.charAt(a)];typeof o=="number"?(o&255)==o?s.push(o):(s.push(o>>>8),s.push(o&255)):s.push(t)}}return s}};var j={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},Ne={L:1,M:0,Q:3,H:2},ue={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},he=(function(){let h=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],i=1335,e=7973,t=21522,r={},s=function(a){let n=0;for(;a!=0;)n+=1,a>>>=1;return n};return r.getBCHTypeInfo=function(a){let n=a<<10;for(;s(n)-s(i)>=0;)n^=i<<s(n)-s(i);return(a<<10|n)^t},r.getBCHTypeNumber=function(a){let n=a<<12;for(;s(n)-s(e)>=0;)n^=e<<s(n)-s(e);return a<<12|n},r.getPatternPosition=function(a){return h[a-1]},r.getMaskFunction=function(a){switch(a){case ue.PATTERN000:return function(n,o){return(n+o)%2==0};case ue.PATTERN001:return function(n,o){return n%2==0};case ue.PATTERN010:return function(n,o){return o%3==0};case ue.PATTERN011:return function(n,o){return(n+o)%3==0};case ue.PATTERN100:return function(n,o){return(Math.floor(n/2)+Math.floor(o/3))%2==0};case ue.PATTERN101:return function(n,o){return n*o%2+n*o%3==0};case ue.PATTERN110:return function(n,o){return(n*o%2+n*o%3)%2==0};case ue.PATTERN111:return function(n,o){return(n*o%3+(n+o)%2)%2==0};default:throw"bad maskPattern:"+a}},r.getErrorCorrectPolynomial=function(a){let n=Fe([1],0);for(let o=0;o<a;o+=1)n=n.multiply(Fe([1,pe.gexp(o)],0));return n},r.getLengthInBits=function(a,n){if(1<=n&&n<10)switch(a){case j.MODE_NUMBER:return 10;case j.MODE_ALPHA_NUM:return 9;case j.MODE_8BIT_BYTE:return 8;case j.MODE_KANJI:return 8;default:throw"mode:"+a}else if(n<27)switch(a){case j.MODE_NUMBER:return 12;case j.MODE_ALPHA_NUM:return 11;case j.MODE_8BIT_BYTE:return 16;case j.MODE_KANJI:return 10;default:throw"mode:"+a}else if(n<41)switch(a){case j.MODE_NUMBER:return 14;case j.MODE_ALPHA_NUM:return 13;case j.MODE_8BIT_BYTE:return 16;case j.MODE_KANJI:return 12;default:throw"mode:"+a}else throw"type:"+n},r.getLostPoint=function(a){let n=a.getModuleCount(),o=0;for(let d=0;d<n;d+=1)for(let u=0;u<n;u+=1){let p=0,f=a.isDark(d,u);for(let m=-1;m<=1;m+=1)if(!(d+m<0||n<=d+m))for(let v=-1;v<=1;v+=1)u+v<0||n<=u+v||m==0&&v==0||f==a.isDark(d+m,u+v)&&(p+=1);p>5&&(o+=3+p-5)}for(let d=0;d<n-1;d+=1)for(let u=0;u<n-1;u+=1){let p=0;a.isDark(d,u)&&(p+=1),a.isDark(d+1,u)&&(p+=1),a.isDark(d,u+1)&&(p+=1),a.isDark(d+1,u+1)&&(p+=1),(p==0||p==4)&&(o+=3)}for(let d=0;d<n;d+=1)for(let u=0;u<n-6;u+=1)a.isDark(d,u)&&!a.isDark(d,u+1)&&a.isDark(d,u+2)&&a.isDark(d,u+3)&&a.isDark(d,u+4)&&!a.isDark(d,u+5)&&a.isDark(d,u+6)&&(o+=40);for(let d=0;d<n;d+=1)for(let u=0;u<n-6;u+=1)a.isDark(u,d)&&!a.isDark(u+1,d)&&a.isDark(u+2,d)&&a.isDark(u+3,d)&&a.isDark(u+4,d)&&!a.isDark(u+5,d)&&a.isDark(u+6,d)&&(o+=40);let l=0;for(let d=0;d<n;d+=1)for(let u=0;u<n;u+=1)a.isDark(u,d)&&(l+=1);let c=Math.abs(100*l/n/n-50)/5;return o+=c*10,o},r})(),pe=(function(){let h=new Array(256),i=new Array(256);for(let t=0;t<8;t+=1)h[t]=1<<t;for(let t=8;t<256;t+=1)h[t]=h[t-4]^h[t-5]^h[t-6]^h[t-8];for(let t=0;t<255;t+=1)i[h[t]]=t;let e={};return e.glog=function(t){if(t<1)throw"glog("+t+")";return i[t]},e.gexp=function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return h[t]},e})(),Fe=function(h,i){if(typeof h.length>"u")throw h.length+"/"+i;let e=(function(){let r=0;for(;r<h.length&&h[r]==0;)r+=1;let s=new Array(h.length-r+i);for(let a=0;a<h.length-r;a+=1)s[a]=h[a+r];return s})(),t={};return t.getAt=function(r){return e[r]},t.getLength=function(){return e.length},t.multiply=function(r){let s=new Array(t.getLength()+r.getLength()-1);for(let a=0;a<t.getLength();a+=1)for(let n=0;n<r.getLength();n+=1)s[a+n]^=pe.gexp(pe.glog(t.getAt(a))+pe.glog(r.getAt(n)));return Fe(s,0)},t.mod=function(r){if(t.getLength()-r.getLength()<0)return t;let s=pe.glog(t.getAt(0))-pe.glog(r.getAt(0)),a=new Array(t.getLength());for(let n=0;n<t.getLength();n+=1)a[n]=t.getAt(n);for(let n=0;n<r.getLength();n+=1)a[n]^=pe.gexp(pe.glog(r.getAt(n))+s);return Fe(a,0).mod(r)},t},xr=(function(){let h=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],i=function(r,s){let a={};return a.totalCount=r,a.dataCount=s,a},e={},t=function(r,s){switch(s){case Ne.L:return h[(r-1)*4+0];case Ne.M:return h[(r-1)*4+1];case Ne.Q:return h[(r-1)*4+2];case Ne.H:return h[(r-1)*4+3];default:return}};return e.getRSBlocks=function(r,s){let a=t(r,s);if(typeof a>"u")throw"bad rs block @ typeNumber:"+r+"/errorCorrectionLevel:"+s;let n=a.length/3,o=[];for(let l=0;l<n;l+=1){let c=a[l*3+0],d=a[l*3+1],u=a[l*3+2];for(let p=0;p<c;p+=1)o.push(i(d,u))}return o},e})(),Er=function(){let h=[],i=0,e={};return e.getBuffer=function(){return h},e.getAt=function(t){let r=Math.floor(t/8);return(h[r]>>>7-t%8&1)==1},e.put=function(t,r){for(let s=0;s<r;s+=1)e.putBit((t>>>r-s-1&1)==1)},e.getLengthInBits=function(){return i},e.putBit=function(t){let r=Math.floor(i/8);h.length<=r&&h.push(0),t&&(h[r]|=128>>>i%8),i+=1},e},gi=function(h){let i=j.MODE_NUMBER,e=h,t={};t.getMode=function(){return i},t.getLength=function(a){return e.length},t.write=function(a){let n=e,o=0;for(;o+2<n.length;)a.put(r(n.substring(o,o+3)),10),o+=3;o<n.length&&(n.length-o==1?a.put(r(n.substring(o,o+1)),4):n.length-o==2&&a.put(r(n.substring(o,o+2)),7))};let r=function(a){let n=0;for(let o=0;o<a.length;o+=1)n=n*10+s(a.charAt(o));return n},s=function(a){if("0"<=a&&a<="9")return a.charCodeAt(0)-48;throw"illegal char :"+a};return t},fi=function(h){let i=j.MODE_ALPHA_NUM,e=h,t={};t.getMode=function(){return i},t.getLength=function(s){return e.length},t.write=function(s){let a=e,n=0;for(;n+1<a.length;)s.put(r(a.charAt(n))*45+r(a.charAt(n+1)),11),n+=2;n<a.length&&s.put(r(a.charAt(n)),6)};let r=function(s){if("0"<=s&&s<="9")return s.charCodeAt(0)-48;if("A"<=s&&s<="Z")return s.charCodeAt(0)-65+10;switch(s){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+s}};return t},mi=function(h){let i=j.MODE_8BIT_BYTE,e=h,t=Re.stringToBytes(h),r={};return r.getMode=function(){return i},r.getLength=function(s){return t.length},r.write=function(s){for(let a=0;a<t.length;a+=1)s.put(t[a],8)},r},vi=function(h){let i=j.MODE_KANJI,e=h,t=Re.stringToBytes;(function(a,n){let o=t(a);if(o.length!=2||(o[0]<<8|o[1])!=n)throw"sjis not supported."})("\u53CB",38726);let r=t(h),s={};return s.getMode=function(){return i},s.getLength=function(a){return~~(r.length/2)},s.write=function(a){let n=r,o=0;for(;o+1<n.length;){let l=(255&n[o])<<8|255&n[o+1];if(33088<=l&&l<=40956)l-=33088;else if(57408<=l&&l<=60351)l-=49472;else throw"illegal char at "+(o+1)+"/"+l;l=(l>>>8&255)*192+(l&255),a.put(l,13),o+=2}if(o<n.length)throw"illegal char at "+(o+1)},s},Sr=function(){let h=[],i={};return i.writeByte=function(e){h.push(e&255)},i.writeShort=function(e){i.writeByte(e),i.writeByte(e>>>8)},i.writeBytes=function(e,t,r){t=t||0,r=r||e.length;for(let s=0;s<r;s+=1)i.writeByte(e[s+t])},i.writeString=function(e){for(let t=0;t<e.length;t+=1)i.writeByte(e.charCodeAt(t))},i.toByteArray=function(){return h},i.toString=function(){let e="";e+="[";for(let t=0;t<h.length;t+=1)t>0&&(e+=","),e+=h[t];return e+="]",e},i},yi=function(){let h=0,i=0,e=0,t="",r={},s=function(n){t+=String.fromCharCode(a(n&63))},a=function(n){if(n<0)throw"n:"+n;if(n<26)return 65+n;if(n<52)return 97+(n-26);if(n<62)return 48+(n-52);if(n==62)return 43;if(n==63)return 47;throw"n:"+n};return r.writeByte=function(n){for(h=h<<8|n&255,i+=8,e+=1;i>=6;)s(h>>>i-6),i-=6},r.flush=function(){if(i>0&&(s(h<<6-i),h=0,i=0),e%3!=0){let n=3-e%3;for(let o=0;o<n;o+=1)t+="="}},r.toString=function(){return t},r},wi=function(h){let i=h,e=0,t=0,r=0,s={};s.read=function(){for(;r<8;){if(e>=i.length){if(r==0)return-1;throw"unexpected end of file./"+r}let o=i.charAt(e);if(e+=1,o=="=")return r=0,-1;if(o.match(/^\s$/))continue;t=t<<6|a(o.charCodeAt(0)),r+=6}let n=t>>>r-8&255;return r-=8,n};let a=function(n){if(65<=n&&n<=90)return n-65;if(97<=n&&n<=122)return n-97+26;if(48<=n&&n<=57)return n-48+52;if(n==43)return 62;if(n==47)return 63;throw"c:"+n};return s},bi=function(h,i){let e=h,t=i,r=new Array(h*i),s={};s.setPixel=function(l,c,d){r[c*e+l]=d},s.write=function(l){l.writeString("GIF87a"),l.writeShort(e),l.writeShort(t),l.writeByte(128),l.writeByte(0),l.writeByte(0),l.writeByte(0),l.writeByte(0),l.writeByte(0),l.writeByte(255),l.writeByte(255),l.writeByte(255),l.writeString(","),l.writeShort(0),l.writeShort(0),l.writeShort(e),l.writeShort(t),l.writeByte(0);let c=2,d=n(c);l.writeByte(c);let u=0;for(;d.length-u>255;)l.writeByte(255),l.writeBytes(d,u,255),u+=255;l.writeByte(d.length-u),l.writeBytes(d,u,d.length-u),l.writeByte(0),l.writeString(";")};let a=function(l){let c=l,d=0,u=0,p={};return p.write=function(f,m){if(f>>>m)throw"length over";for(;d+m>=8;)c.writeByte(255&(f<<d|u)),m-=8-d,f>>>=8-d,u=0,d=0;u=f<<d|u,d=d+m},p.flush=function(){d>0&&c.writeByte(u)},p},n=function(l){let c=1<<l,d=(1<<l)+1,u=l+1,p=o();for(let k=0;k<c;k+=1)p.add(String.fromCharCode(k));p.add(String.fromCharCode(c)),p.add(String.fromCharCode(d));let f=Sr(),m=a(f);m.write(c,u);let v=0,A=String.fromCharCode(r[v]);for(v+=1;v<r.length;){let k=String.fromCharCode(r[v]);v+=1,p.contains(A+k)?A=A+k:(m.write(p.indexOf(A),u),p.size()<4095&&(p.size()==1<<u&&(u+=1),p.add(A+k)),A=k)}return m.write(p.indexOf(A),u),m.write(d,u),m.flush(),f.toByteArray()},o=function(){let l={},c=0,d={};return d.add=function(u){if(d.contains(u))throw"dup key:"+u;l[u]=c,c+=1},d.size=function(){return c},d.indexOf=function(u){return l[u]},d.contains=function(u){return typeof l[u]<"u"},d};return s},xi=function(h,i,e){let t=bi(h,i);for(let n=0;n<i;n+=1)for(let o=0;o<h;o+=1)t.setPixel(o,n,e(o,n));let r=Sr();t.write(r);let s=yi(),a=r.toByteArray();for(let n=0;n<a.length;n+=1)s.writeByte(a[n]);return s.flush(),"data:image/gif;base64,"+s},kr=Re,ca=Re.stringToBytes;var Ei=8,Xe=class extends Le.Modal{constructor(e,t){super(e);this.recoveryCodes=[];this.secretCode=t.secretCode,this.email=t.email,this.session=t.session,this.onVerify=t.onVerify,this.onComplete=t.onComplete}onOpen(){this.modalEl.addClass("vaultguard-mfa-setup-modal"),this.contentEl.addClass("vaultguard-mfa-setup-content"),this.renderSetupStep()}onClose(){this.modalEl.removeClass("vaultguard-mfa-setup-modal"),this.contentEl.removeClass("vaultguard-mfa-setup-content"),this.contentEl.empty()}renderSetupStep(){let{contentEl:e}=this;e.empty(),e.createEl("h2",{text:"Set Up Two-Factor Authentication",cls:"vaultguard-modal-title"}),e.createEl("p",{text:"Scan the QR code below with your authenticator app (Google Authenticator, Authy, 1Password, etc.), then enter the 6-digit code to verify.",cls:"vaultguard-modal-description"});let t=`otpauth://totp/VaultGuard:${encodeURIComponent(this.email)}?secret=${this.secretCode}&issuer=VaultGuard`,r=kr(0,"M");r.addData(t),r.make();let s=e.createDiv({cls:"vaultguard-mfa-qr-container"});s.setAttribute("aria-label","TOTP QR Code"),pr(s,r,{cellSize:5,margin:2,cssClass:"vaultguard-mfa-qr"});let a=e.createDiv({cls:"vaultguard-mfa-manual"});a.createEl("p",{text:"Can't scan? Enter this secret manually:",cls:"vaultguard-mfa-manual-label"});let n=a.createEl("code",{text:this.formatSecret(this.secretCode),cls:"vaultguard-mfa-secret"}),o=a.createEl("button",{text:"Copy",cls:"vaultguard-mfa-copy-btn"});o.addEventListener("click",()=>{navigator.clipboard.writeText(this.secretCode),o.setText("Copied!"),setTimeout(()=>o.setText("Copy"),2e3)});let l=e.createDiv({cls:"vaultguard-field-group"});l.createEl("label",{text:"Verification Code",cls:"vaultguard-field-label"});let c=l.createEl("input",{cls:"vaultguard-field-input vaultguard-mfa-input",attr:{type:"text",placeholder:"123456",maxlength:"6",inputmode:"numeric",pattern:"[0-9]*"}}),d=e.createDiv({cls:"vaultguard-login-error"});d.style.display="none";let u=e.createDiv({cls:"vaultguard-login-actions"});new Le.ButtonComponent(u).setButtonText("Cancel").onClick(()=>this.close());let p=new Le.ButtonComponent(u).setButtonText("Verify & Enable").setCta();p.onClick(async()=>{let f=c.value.trim();if(!f||f.length!==6){d.setText("Please enter the 6-digit code from your authenticator app."),d.style.display="";return}p.setDisabled(!0),p.setButtonText("Verifying..."),d.style.display="none";try{let m=await this.onVerify(f,this.session);m.status==="SUCCESS"?(this.recoveryCodes=this.generateRecoveryCodes(),this.renderRecoveryCodesStep(m.session)):(d.setText("Verification failed. Please try again."),d.style.display="")}catch(m){d.setText(m instanceof Error?m.message:"Verification failed"),d.style.display=""}finally{p.setDisabled(!1),p.setButtonText("Verify & Enable")}}),setTimeout(()=>c.focus(),50)}renderRecoveryCodesStep(e){let{contentEl:t}=this;t.empty(),t.createEl("h2",{text:"Save Your Recovery Codes",cls:"vaultguard-modal-title"}),t.createEl("p",{text:"If you lose access to your authenticator app, you can use these one-time recovery codes to sign in. Each code can only be used once.",cls:"vaultguard-mfa-recovery-warning"});let r=t.createDiv({cls:"vaultguard-mfa-recovery-codes"});for(let c of this.recoveryCodes)r.createEl("code",{text:c,cls:"vaultguard-mfa-recovery-code"});let s=t.createEl("button",{text:"Copy All Codes",cls:"vaultguard-mfa-copy-all-btn"});s.addEventListener("click",()=>{navigator.clipboard.writeText(this.recoveryCodes.join(`
`)),s.setText("Copied!"),setTimeout(()=>s.setText("Copy All Codes"),2e3)}),t.createEl("p",{text:"Store these codes in a safe place (password manager, printed copy, etc.). You will not be able to see them again.",cls:"vaultguard-mfa-recovery-note"});let a=t.createDiv({cls:"vaultguard-mfa-ack-row"}),n=a.createEl("input",{type:"checkbox",cls:"vaultguard-mfa-ack-checkbox"});a.createEl("span",{text:"I have saved my recovery codes"});let o=t.createDiv({cls:"vaultguard-login-actions"}),l=new Le.ButtonComponent(o).setButtonText("Done").setCta().setDisabled(!0);n.addEventListener("change",()=>{l.setDisabled(!n.checked)}),l.onClick(()=>{this.onComplete({session:e,recoveryCodes:this.recoveryCodes}),this.close()})}formatSecret(e){return e.replace(/(.{4})/g,"$1 ").trim()}generateRecoveryCodes(){let e=[];for(let t=0;t<Ei;t++){let r=new Uint8Array(5);crypto.getRandomValues(r);let s=Array.from(r).map(a=>a.toString(36).padStart(2,"0")).join("").substring(0,10).toUpperCase();e.push(s.substring(0,5)+"-"+s.substring(5,10))}return e}};function Ze(h,i=[]){let t=[...Array.isArray(h["cognito:groups"])?h["cognito:groups"].filter(r=>typeof r=="string"):[],...i];return{organizationId:_t(h["custom:org"]),orgSlug:Si(t),cognitoUserPoolId:ki(_t(h.iss)),cognitoClientId:_t(h.aud)}}function Si(h){let i=h.find(t=>typeof t=="string"&&t.toLowerCase().startsWith("org-"));if(!i)return;let e=i.slice(4).trim().toLowerCase();return e.length>0?e:void 0}function ki(h){if(!h)return;let e=h.trim().replace(/\/+$/,"").split("/").pop()?.trim();return e&&e.length>0?e:void 0}function _t(h){return typeof h=="string"&&h.trim().length>0?h.trim():void 0}var T=require("obsidian");var O=require("obsidian"),ge=class{constructor(i,e){this.app=i,this.apiClient=e}async showAddRuleDialog(i){new $e(this.app,this.apiClient,null,async()=>{let t=new CustomEvent("vaultguard-refresh-permissions");i.dispatchEvent(t)}).open()}async showEditRuleDialog(i,e){new $e(this.app,this.apiClient,e,async()=>{let r=new CustomEvent("vaultguard-refresh-permissions");i.dispatchEvent(r)}).open()}showAddRuleForPath(i,e){new $e(this.app,this.apiClient,null,async()=>{e&&await e()},i).open()}async renderEffectivePermissions(i,e){i.empty(),i.createDiv({cls:"vaultguard-empty-state",text:`Effective permission previews are not available for "${e}" with the current API.`})}},$e=class extends O.Modal{constructor(e,t,r,s,a){super(e);this.selectedPath="";this.selectedPrincipalType="user";this.selectedPrincipalId="";this.selectedLevel="read";this.saveButton=null;this.apiClient=t,this.existingRule=r,this.onSave=s,a&&(this.selectedPath=a),r&&(this.selectedPath=r.pathPattern,this.selectedPrincipalType=r.role?"role":"user",this.selectedPrincipalId=r.role??r.userId,this.selectedLevel=this.levelFromRule(r))}onOpen(){let{contentEl:e}=this;e.empty(),this.modalEl.addClass("vaultguard-permission-rule-modal"),e.addClass("vaultguard-dialog-content");let t=this.existingRule?"Edit Permission Rule":"Add Permission Rule";e.createEl("h3",{text:t}),this.renderPathSelector(e),this.renderPrincipalSelector(e),this.renderLevelSelector(e),e.createEl("p",{text:"Expiry dates, conflict checks, and effective-permission previews are not exposed by the current backend yet.",cls:"setting-item-description"});let r=e.createDiv({cls:"vaultguard-rule-actions"});new O.ButtonComponent(r).setButtonText("Cancel").onClick(()=>this.close()),this.saveButton=new O.ButtonComponent(r).setButtonText(this.existingRule?"Update Rule":"Create Rule").setCta().onClick(()=>this.handleSave())}onClose(){this.modalEl.removeClass("vaultguard-permission-rule-modal"),this.contentEl.removeClass("vaultguard-dialog-content"),this.contentEl.empty()}renderPathSelector(e){new O.Setting(e).setName("Path").setDesc("Select a folder or file path (supports autocomplete from vault structure)").addText(r=>{r.setValue(this.selectedPath).setPlaceholder("e.g., projects/secret/ or notes/meeting.md").onChange(n=>{this.selectedPath=n});let s=r.inputEl;s.addClass("vaultguard-path-input");let a=e.createDiv({cls:"vaultguard-path-suggestions"});a.style.display="none",s.addEventListener("input",()=>{let n=s.value,o=this.getPathSuggestions(n);this.renderPathSuggestions(a,o,r)}),s.addEventListener("focus",()=>{let n=s.value,o=this.getPathSuggestions(n);this.renderPathSuggestions(a,o,r)}),s.addEventListener("blur",()=>{setTimeout(()=>{a.style.display="none"},200)})})}getPathSuggestions(e){let t=[],r=this.app.vault,s=r.getAllLoadedFiles().filter(o=>o instanceof O.TFolder);for(let o of s)o.path!=="/"&&t.push(o.path+"/");let a=r.getAllLoadedFiles().filter(o=>o instanceof O.TFile);for(let o of a)t.push(o.path);let n=e.toLowerCase();return t.filter(o=>o.toLowerCase().includes(n)).sort().slice(0,20)}renderPathSuggestions(e,t,r){if(e.empty(),t.length===0){e.style.display="none";return}e.style.display="block";for(let s of t){let a=e.createDiv({cls:"vaultguard-suggestion-item"}),n=a.createSpan({cls:"vaultguard-suggestion-icon"});(0,O.setIcon)(n,s.endsWith("/")?"folder":"file"),a.createSpan({text:s}),a.addEventListener("click",()=>{this.selectedPath=s,r.setValue(s),e.style.display="none"})}}renderPrincipalSelector(e){new O.Setting(e).setName("Principal Type").setDesc("Apply this rule to a user or a role").addDropdown(t=>t.addOption("user","User").addOption("role","Role").setValue(this.selectedPrincipalType).onChange(r=>{this.selectedPrincipalType=r})),new O.Setting(e).setName("Principal").setDesc("Enter a user ID, '*' wildcard, or role name that should receive this rule.").addText(t=>t.setValue(this.selectedPrincipalId).setPlaceholder(this.selectedPrincipalType==="role"?"engineering-admins":"user-123 or *").onChange(r=>{this.selectedPrincipalId=r.trim()}))}renderLevelSelector(e){new O.Setting(e).setName("Permission Level").setDesc("None = explicit deny, Read = view only, Write = view + edit, Admin = full control including permission management").addDropdown(t=>t.addOption("none","None (Deny)").addOption("read","Read").addOption("write","Write").addOption("admin","Admin").setValue(this.selectedLevel).onChange(r=>{this.selectedLevel=r}))}normalizeRulePath(e){let t=e.trim();return t&&(t.startsWith("/")?t:`/${t}`)}levelFromRule(e){return e.effect==="deny"?"none":e.actions.includes("admin")?"admin":e.actions.includes("write")||e.actions.includes("delete")?"write":"read"}buildRulePayload(){let e=this.normalizeRulePath(this.selectedPath),t=this.selectedLevel==="admin"?["read","write","delete","admin","list"]:this.selectedLevel==="write"?["read","write","delete","list"]:this.selectedLevel==="read"?["read","list"]:["read","write","delete","admin","list"];return{pathPattern:e,actions:t,effect:this.selectedLevel==="none"?"deny":"allow",userId:this.selectedPrincipalType==="user"?this.selectedPrincipalId:"*",role:this.selectedPrincipalType==="role"?this.selectedPrincipalId:null}}async handleSave(){if(!this.selectedPath){new O.Notice("Please select a path.");return}if(!this.selectedPrincipalId){new O.Notice("Please select a principal (user or role).");return}this.saveButton&&(this.saveButton.setDisabled(!0),this.saveButton.setButtonText("Saving..."));try{let e=this.buildRulePayload();this.existingRule?(await this.apiClient.updatePermission(this.existingRule.id,e),new O.Notice("Permission rule updated.")):(await this.apiClient.createPermission(e),new O.Notice("Permission rule created.")),await this.onSave(),this.close()}catch(e){new O.Notice(`Failed to save: ${e.message}`)}finally{this.saveButton&&(this.saveButton.setDisabled(!1),this.saveButton.setButtonText(this.existingRule?"Update Rule":"Create Rule"))}}};function Pr(h){let i=h&&typeof h=="object"&&"apiError"in h&&h.apiError&&typeof h.apiError=="object"&&"statusCode"in h.apiError&&typeof h.apiError.statusCode=="number"?h.apiError.statusCode:void 0,t=(h instanceof Error?h.message:typeof h=="string"?h:"").toLowerCase();return i===500||typeof i=="number"&&i>=502&&i<=504||h instanceof Error&&h.name==="ServerError"||t.includes("pointing at a website or routed page")||t.includes("missing authentication token")||t.includes("route not found")||t.includes("not found")||t.includes("internal server error")||t.includes("service unavailable")||t.includes("bad gateway")||t.includes("gateway timeout")}function Cr(h,i){return{orgId:h||"unknown",orgName:Pi(i),syncMode:"periodic",syncIntervalMinutes:1,enforceEncryption:!0,maxSessionDurationHours:24,requireMfa:!1,allowedDomains:[],retentionDays:365,autoLockMinutes:30}}function Pi(h){return h?h.split("-").filter(i=>i.length>0).map(i=>i[0].toUpperCase()+i.slice(1)).join(" "):"Current Organization"}var D=require("obsidian");var Ar={active:0,pending:1,suspended:2,revoked:3},Rr={admin:0,editor:1,viewer:2,custom:3};function _(h){return h.displayName?.trim()?h.displayName.trim():h.name?.trim()?h.name.trim():h.email?.trim()?h.email.trim():h.id}function Y(h){let i=h.displayName?.trim()||h.name?.trim();return i?i.split(/\s+/).filter(Boolean).slice(0,2).map(t=>t[0]?.toUpperCase()??"").join(""):h.email?.trim()?h.email.split("@")[0].split(/[._-]+/).filter(Boolean).slice(0,2).map(r=>r[0]?.toUpperCase()??"").join(""):(h.id[0]??"?").toUpperCase()}function et(h){return h.split(/[\s@._-]+/).filter(Boolean).slice(0,2).map(e=>e[0]?.toUpperCase()??"").join("")}function re(h){return[...h].sort((i,e)=>{let t=Ar[i.status]-Ar[e.status];if(t!==0)return t;let r=Rr[i.role]-Rr[e.role];if(r!==0)return r;let s=_(i).localeCompare(_(e));if(s!==0)return s;let a=i.email.localeCompare(e.email);return a!==0?a:i.id.localeCompare(e.id)})}function q(h){let i=new Map;for(let e of h){i.set(e.id,e);let t=e.email.trim();t&&(i.set(t,e),i.set(t.toLowerCase(),e))}return i}function tt(h,i){let e=i.trim().toLowerCase();return e?[h.id,h.email,h.displayName,h.name,_(h),h.role,h.status].some(r=>r.toLowerCase().includes(e)):!0}function Oe(h,i){let e=i.trim().toLowerCase();if(!e)return null;let t=h.find(a=>a.id.toLowerCase()===e);if(t)return t;let r=h.find(a=>a.email.trim().toLowerCase()===e);if(r)return r;let s=h.filter(a=>_(a).toLowerCase()===e||a.name.toLowerCase()===e);return s.length===1?s[0]:null}function fe(h,i){return Oe(h,i)?.id??i.trim()}function xe(h){switch(h){case"admin":return"Admin";case"editor":return"Editor";case"viewer":return"Viewer";default:return"Custom"}}function Ee(h){switch(h){case"active":return"Active";case"pending":return"Pending";case"suspended":return"Suspended";default:return"Revoked"}}function rt(h){let i=[];return h.email?i.push(h.email):h.id&&i.push(h.id),h.status!=="active"&&i.push(Ee(h.status)),i.push(xe(h.role)),i.join(" \xB7 ")}function me(h){let i=_(h);return i.trim().length>0?i:h.id}var it=class{constructor(i,e){this.app=i,this.apiClient=e}async renderUserList(i){i.empty(),i.createDiv({cls:"vaultguard-loading"}).createSpan({text:"Loading users..."});try{let t=await this.apiClient.listUsers();if(i.empty(),!t||t.length===0){i.createDiv({cls:"vaultguard-empty-state",text:"No users found. Click 'Invite User' to add team members."});return}let r=i.createDiv({cls:"vaultguard-user-summary"}),s=t.filter(o=>o.status==="active").length,a=t.filter(o=>o.status==="suspended").length,n=t.filter(o=>o.status==="pending").length;r.createSpan({text:`${t.length} total`,cls:"vaultguard-summary-stat"}),r.createSpan({text:`${s} active`,cls:"vaultguard-summary-stat vaultguard-stat-active"}),a>0&&r.createSpan({text:`${a} suspended`,cls:"vaultguard-summary-stat vaultguard-stat-suspended"}),n>0&&r.createSpan({text:`${n} pending`,cls:"vaultguard-summary-stat vaultguard-stat-pending"});for(let o of t)this.renderUserItem(i,o)}catch(t){i.empty(),i.createDiv({cls:"vaultguard-error",text:`Failed to load users: ${t.message}`})}}renderUserItem(i,e){let t=i.createDiv({cls:"vaultguard-user-item"});t.setAttribute("data-username",e.displayName),t.setAttribute("data-email",e.email);let r=t.createDiv({cls:"vaultguard-user-info"}),s=r.createDiv({cls:"vaultguard-user-avatar"}),a=Y({id:e.id,email:e.email,displayName:e.displayName,name:""});s.createSpan({text:a});let n=r.createDiv({cls:"vaultguard-user-details"});n.createDiv({text:e.displayName,cls:"vaultguard-user-name"}),n.createDiv({text:e.email,cls:"vaultguard-user-email"});let o=t.createDiv({cls:"vaultguard-user-badges"}),l=o.createSpan({cls:"vaultguard-status-badge"});l.setText(e.status),l.addClass(`vaultguard-status-${e.status}`);let c=o.createSpan({cls:"vaultguard-role-badge"});if(c.setText(e.role),c.addClass(`vaultguard-role-${e.role}`),e.mfaEnabled){let v=o.createSpan({cls:"vaultguard-mfa-badge"}),A=v.createSpan();(0,D.setIcon)(A,"shield"),v.createSpan({text:"MFA"})}let d=t.createDiv({cls:"vaultguard-user-meta"});d.createDiv({text:`Last active: ${this.formatRelativeTime(e.lastActive)}`,cls:"vaultguard-user-last-active"}),d.createDiv({text:`${e.deviceCount} device${e.deviceCount!==1?"s":""}`,cls:"vaultguard-user-devices"});let u=t.createDiv({cls:"vaultguard-user-actions"}),p=u.createEl("button",{cls:"vaultguard-icon-btn",attr:{title:"View permissions"}});(0,D.setIcon)(p,"key"),p.addEventListener("click",()=>this.showUserPermissions(e));let f=u.createEl("button",{cls:"vaultguard-icon-btn",attr:{title:"View activity"}});(0,D.setIcon)(f,"activity"),f.addEventListener("click",()=>this.showUserActivity(e));let m=u.createEl("button",{cls:"vaultguard-icon-btn",attr:{title:"Change role"}});if((0,D.setIcon)(m,"user-cog"),m.addEventListener("click",()=>this.showRoleEditor(e,i)),e.status==="active"){let v=u.createEl("button",{cls:"vaultguard-icon-btn vaultguard-danger",attr:{title:"Revoke access"}});(0,D.setIcon)(v,"x-circle"),v.addEventListener("click",()=>this.confirmRevokeAccess(e,i))}else if(e.status==="pending"){let v=u.createEl("button",{cls:"vaultguard-icon-btn",attr:{title:"Resend invitation"}});(0,D.setIcon)(v,"send"),v.addEventListener("click",()=>this.resendInvitation(e))}else if(e.status==="suspended"||e.status==="revoked"){let v=u.createEl("button",{cls:"vaultguard-icon-btn vaultguard-success",attr:{title:"Reactivate user"}});(0,D.setIcon)(v,"check-circle"),v.addEventListener("click",()=>this.reactivateUser(e,i))}}async showInviteDialog(i){new Gt(this.app,this.apiClient,async()=>{await this.renderUserList(i.querySelector(".vaultguard-user-list"))}).open()}async showUserPermissions(i){new zt(this.app,this.apiClient,i).open()}async showUserActivity(i){new Ht(this.app,this.apiClient,i).open()}async showRoleEditor(i,e){new qt(this.app,this.apiClient,i,async()=>{await this.renderUserList(e)}).open()}async confirmRevokeAccess(i,e){new Wt(this.app,this.apiClient,i,async()=>{await this.renderUserList(e)}).open()}async reactivateUser(i,e){try{await this.apiClient.reactivateUser(i.id),new D.Notice(`${i.displayName} has been reactivated.`),await this.renderUserList(e)}catch(t){new D.Notice(`Failed to reactivate: ${t.message}`)}}async resendInvitation(i){try{await this.apiClient.resendInvitation(i.id),new D.Notice(`Invitation resent to ${i.email}.`)}catch(e){new D.Notice(`Failed to resend invitation: ${e.message}`)}}formatRelativeTime(i){let e=new Date(i),r=new Date().getTime()-e.getTime(),s=Math.floor(r/6e4),a=Math.floor(s/60),n=Math.floor(a/24);return s<1?"just now":s<60?`${s}m ago`:a<24?`${a}h ago`:n<7?`${n}d ago`:e.toLocaleDateString()}},Gt=class extends D.Modal{constructor(e,t,r){super(e);this.email="";this.role="viewer";this.sendWelcomeEmail=!0;this.apiClient=t,this.onInvited=r}onOpen(){let{contentEl:e}=this;e.empty(),this.modalEl.addClass("vaultguard-dialog-modal"),e.addClass("vaultguard-dialog-content"),e.createEl("h3",{text:"Invite User"}),new D.Setting(e).setName("Email Address").setDesc("An invitation will be sent via AWS Cognito").addText(r=>r.setPlaceholder("user@company.com").onChange(s=>{this.email=s})),new D.Setting(e).setName("Role").setDesc("Initial role assignment (can be changed later)").addDropdown(r=>r.addOption("viewer","Viewer (read-only)").addOption("editor","Editor (read + write)").addOption("admin","Admin (full access)").setValue(this.role).onChange(s=>{this.role=s})),new D.Setting(e).setName("Send Welcome Email").setDesc("Send an email with setup instructions and invite link").addToggle(r=>r.setValue(this.sendWelcomeEmail).onChange(s=>{this.sendWelcomeEmail=s}));let t=e.createDiv({cls:"vaultguard-modal-actions"});new D.ButtonComponent(t).setButtonText("Cancel").onClick(()=>this.close()),new D.ButtonComponent(t).setButtonText("Send Invite").setCta().onClick(()=>this.handleInvite())}onClose(){this.modalEl.removeClass("vaultguard-dialog-modal"),this.contentEl.removeClass("vaultguard-dialog-content"),this.contentEl.empty()}async handleInvite(){if(!this.email||!this.email.includes("@")){new D.Notice("Please enter a valid email address.");return}try{await this.apiClient.inviteUser({email:this.email,role:this.role,sendWelcomeEmail:this.sendWelcomeEmail}),new D.Notice(`Invitation sent to ${this.email}`),await this.onInvited(),this.close()}catch(e){new D.Notice(`Failed to invite: ${e.message}`)}}},zt=class extends D.Modal{constructor(i,e,t){super(i),this.apiClient=e,this.user=t}async onOpen(){let{contentEl:i}=this;i.empty(),this.modalEl.addClass("vaultguard-dialog-modal"),i.addClass("vaultguard-dialog-content"),i.createEl("h3",{text:`Permissions: ${this.user.displayName}`}),i.createDiv({cls:"vaultguard-loading"}).createSpan({text:"Loading permissions..."});try{let t=await this.apiClient.getUserPermissions(this.user.id);if(i.empty(),i.createEl("h3",{text:`Permissions: ${this.user.displayName}`}),!t||t.length===0){i.createDiv({cls:"vaultguard-empty-state",text:"No specific permissions assigned. User has default role-based access only."});return}let r=i.createEl("table",{cls:"vaultguard-permissions-table"}),a=r.createEl("thead").createEl("tr");["Path Pattern","Effect","Actions","Principal"].forEach(o=>a.createEl("th",{text:o}));let n=r.createEl("tbody");for(let o of t){let l=n.createEl("tr");l.createEl("td",{text:o.pathPattern,cls:"vaultguard-monospace"});let d=l.createEl("td").createSpan({cls:"vaultguard-permission-badge"});d.setText(o.effect),d.addClass(o.effect==="deny"?"vaultguard-level-none":"vaultguard-level-read"),l.createEl("td",{text:o.actions.join(", ")}),l.createEl("td",{text:o.role?`role:${o.role}`:`user:${o.userId}`})}}catch(t){i.empty(),i.createDiv({cls:"vaultguard-error",text:`Failed to load permissions: ${t.message}`})}}onClose(){this.modalEl.removeClass("vaultguard-dialog-modal"),this.contentEl.removeClass("vaultguard-dialog-content"),this.contentEl.empty()}},Ht=class extends D.Modal{constructor(i,e,t){super(i),this.apiClient=e,this.user=t}async onOpen(){let{contentEl:i}=this;i.empty(),this.modalEl.addClass("vaultguard-dialog-modal"),i.addClass("vaultguard-dialog-content"),i.createEl("h3",{text:`Recent Activity: ${this.user.displayName}`}),i.createDiv({cls:"vaultguard-loading"}).createSpan({text:"Loading activity..."});try{let t=await this.apiClient.getUserActivity(this.user.id);if(i.empty(),i.createEl("h3",{text:`Recent Activity: ${this.user.displayName}`}),!t||t.length===0){i.createDiv({cls:"vaultguard-empty-state",text:"No recent activity recorded for this user."});return}let r=i.createEl("table",{cls:"vaultguard-activity-table"}),a=r.createEl("thead").createEl("tr");["Time","Action","Resource","Device"].forEach(o=>a.createEl("th",{text:o}));let n=r.createEl("tbody");for(let o of t){let l=n.createEl("tr");l.createEl("td",{text:new Date(o.timestamp).toLocaleString()});let d=l.createEl("td").createSpan({cls:"vaultguard-action-badge"});d.setText(o.action),d.addClass(`vaultguard-action-${o.action}`),l.createEl("td",{text:o.resourcePath,cls:"vaultguard-monospace"}),l.createEl("td",{text:o.deviceInfo})}}catch(t){i.empty(),i.createDiv({cls:"vaultguard-error",text:`Failed to load activity: ${t.message}`})}}onClose(){this.modalEl.removeClass("vaultguard-dialog-modal"),this.contentEl.removeClass("vaultguard-dialog-content"),this.contentEl.empty()}},qt=class extends D.Modal{constructor(i,e,t,r){super(i),this.apiClient=e,this.user=t,this.onUpdated=r,this.selectedRole=t.role}onOpen(){let{contentEl:i}=this;i.empty(),this.modalEl.addClass("vaultguard-dialog-modal"),i.addClass("vaultguard-dialog-content"),i.createEl("h3",{text:`Change Role: ${this.user.displayName}`}),i.createEl("p",{text:`Current role: ${this.user.role}`,cls:"vaultguard-current-role"}),new D.Setting(i).setName("New Role").setDesc("Changing a role immediately updates the user's effective permissions").addDropdown(t=>t.addOption("viewer","Viewer (read-only access)").addOption("editor","Editor (read + write access)").addOption("admin","Admin (full access + user management)").setValue(this.selectedRole).onChange(r=>{this.selectedRole=r}));let e=i.createDiv({cls:"vaultguard-modal-actions"});new D.ButtonComponent(e).setButtonText("Cancel").onClick(()=>this.close()),new D.ButtonComponent(e).setButtonText("Update Role").setCta().onClick(()=>this.handleUpdate())}onClose(){this.modalEl.removeClass("vaultguard-dialog-modal"),this.contentEl.removeClass("vaultguard-dialog-content"),this.contentEl.empty()}async handleUpdate(){if(this.selectedRole===this.user.role){new D.Notice("Role is unchanged."),this.close();return}try{await this.apiClient.updateUserRole(this.user.id,this.selectedRole),new D.Notice(`${this.user.displayName}'s role updated to ${this.selectedRole}.`),await this.onUpdated(),this.close()}catch(i){new D.Notice(`Failed to update role: ${i.message}`)}}},Wt=class extends D.Modal{constructor(i,e,t,r){super(i),this.apiClient=e,this.user=t,this.onRevoked=r}onOpen(){let{contentEl:i}=this;i.empty(),this.modalEl.addClass("vaultguard-revoke-modal"),i.addClass("vaultguard-dialog-content"),i.createEl("h3",{text:"Revoke Access",cls:"vaultguard-danger-title"}),i.createEl("p",{text:`You are about to revoke all access for ${this.user.displayName} (${this.user.email}).`}),i.createEl("h4",{text:"What will happen:"});let e=i.createEl("ul",{cls:"vaultguard-revoke-consequences"});e.createEl("li",{text:"All active sessions will be immediately invalidated"}),e.createEl("li",{text:"Cognito tokens will be revoked (no new API calls possible)"}),e.createEl("li",{text:"Encryption keys will be rotated (user cannot decrypt future content)"}),e.createEl("li",{text:"Local cache self-destruct signal will be sent (clears cached vault data on next sync attempt)"}),e.createEl("li",{text:"User will be locked out within 30 seconds on all devices"}),e.createEl("li",{text:"All pending offline changes from this user will be rejected"}),i.createEl("p",{text:"This action is irreversible. To restore access, you must re-invite the user.",cls:"vaultguard-warning-text"});let t=new D.Setting(i).setName("Type the user's email to confirm").setDesc(this.user.email),r="";t.addText(a=>a.setPlaceholder(this.user.email).onChange(n=>{r=n}));let s=i.createDiv({cls:"vaultguard-modal-actions"});new D.ButtonComponent(s).setButtonText("Cancel").onClick(()=>this.close()),new D.ButtonComponent(s).setButtonText("Revoke Access").setWarning().onClick(async()=>{if(r!==this.user.email){new D.Notice("Email does not match. Please type the exact email to confirm.");return}await this.handleRevoke()})}onClose(){this.modalEl.removeClass("vaultguard-revoke-modal"),this.contentEl.removeClass("vaultguard-dialog-content"),this.contentEl.empty()}async handleRevoke(){try{await this.apiClient.revokeUser(this.user.id),new D.Notice(`Access revoked for ${this.user.displayName}. All sessions terminated.`),await this.onRevoked(),this.close()}catch(i){new D.Notice(`Failed to revoke access: ${i.message}`)}}};var at=require("obsidian"),st="Available in VaultGuard Pro Edition (the managed VaultGuard Cloud, or a paid self-host). Your plugin binary is identical across editions \u2014 connect it to a Pro Edition backend to unlock this surface.",Ci={shareLinks:{title:"Share links",tagline:"Send a teammate a one-click link to a specific file. Recipients must already be vault members with read permission. Links are time-limited and revocable.",bullets:["Mint a link to any file a vault member can read","Recipient opens it in their own Obsidian via a one-click bridge","Per-file permission rules continue to apply to the recipient","Revoke a link at any time from the share-management view"],footer:st},advancedAudit:{title:"Advanced audit",tagline:"Anomaly alerts, scheduled CSV exports, per-user and per-file reports, and longer retention.",bullets:["Export the current audit view to CSV","Scheduled exports delivered to your inbox","Per-user and per-file activity reports","Anomaly alerts on unusual access patterns","Extended retention \u2014 query up to your retentionDays setting (default 365 days); Community caps at 30 days"],footer:st},billing:{title:"Billing",tagline:"Stripe-backed subscription management for your VaultGuard organization.",bullets:["Self-serve plan changes","Invoices and billing portal access","Seat-based usage tracking"],footer:st},webAdmin:{title:"Hosted admin panel",tagline:"A browser-based admin console for managing users, vaults, and audit logs without opening Obsidian.",bullets:["Manage org users from any browser","Browse audit logs across all vaults","Configure vault membership and roles"],footer:st}},ve=class extends at.Modal{constructor(i,e){super(i),this.feature=e}onOpen(){this.modalEl.addClass("vaultguard-pro-upsell");let i=Ci[this.feature],e=this.contentEl;e.empty();let t=e.createDiv({cls:"vaultguard-pro-upsell-badge"});t.createDiv({cls:"vaultguard-pro-upsell-badge-headline",text:"PRO FEATURE"}),t.createDiv({cls:"vaultguard-pro-upsell-badge-subline",text:"Not available in Community Edition"}),e.createEl("h2",{text:i.title}),e.createEl("p",{text:i.tagline});let r=e.createEl("ul");for(let a of i.bullets)r.createEl("li",{text:a});e.createEl("p",{text:i.footer,cls:"vaultguard-pro-upsell-footer"});let s=e.createDiv({cls:"vaultguard-pro-upsell-actions"});new at.ButtonComponent(s).setButtonText("Close").onClick(()=>this.close())}onClose(){this.contentEl.empty()}};var Ai=[{value:"all",label:"All Actions"},{value:"admin.access.denied",label:"Admin Access Denied"},{value:"admin.list_users",label:"Admin List Users"},{value:"admin.role_changed",label:"Admin Role Changed"},{value:"admin.settings_reset",label:"Admin Settings Reset"},{value:"admin.settings_updated",label:"Admin Settings Updated"},{value:"admin.user_invited",label:"Admin User Invited"},{value:"admin.user_reactivated",label:"Admin User Reactivated"},{value:"admin.user_removed",label:"Admin User Removed"},{value:"audit.access.denied",label:"Audit Access Denied"},{value:"audit.export",label:"Audit Export"},{value:"auth.key-lease.denied",label:"Key Lease Denied"},{value:"auth.key-lease.issued",label:"Key Lease Issued"},{value:"auth.key-lease.scoped",label:"Scoped Key Lease"},{value:"auth.login",label:"Login"},{value:"auth.logout",label:"Logout"},{value:"auth.recover",label:"Recover Access"},{value:"auth.recover.denied",label:"Recover Access Denied"},{value:"auth.refresh",label:"Refresh Session"},{value:"auth.revoke",label:"Revoke Access"},{value:"auth.revoke.denied",label:"Revoke Access Denied"},{value:"auth.setup-zk",label:"Setup Zero-Knowledge"},{value:"billing.checkout_completed",label:"Billing Checkout Completed"},{value:"billing.checkout_started",label:"Billing Checkout Started"},{value:"billing.payment_failed",label:"Billing Payment Failed"},{value:"billing.payment_succeeded",label:"Billing Payment Succeeded"},{value:"billing.subscription_canceled",label:"Billing Subscription Canceled"},{value:"billing.subscription_updated",label:"Billing Subscription Updated"},{value:"files.delete",label:"File Delete"},{value:"files.delete.denied",label:"File Delete Denied"},{value:"files.history",label:"File History"},{value:"files.history.denied",label:"File History Denied"},{value:"files.list",label:"File List"},{value:"files.read",label:"File Read"},{value:"files.read.denied",label:"File Read Denied"},{value:"files.sync",label:"File Sync"},{value:"files.write",label:"File Write"},{value:"files.write.denied",label:"File Write Denied"},{value:"org.created",label:"Organization Created"},{value:"permissions.check",label:"Permission Check"},{value:"permissions.create",label:"Permission Created"},{value:"permissions.create.denied",label:"Permission Create Denied"},{value:"permissions.delete",label:"Permission Deleted"},{value:"permissions.delete.denied",label:"Permission Delete Denied"},{value:"permissions.list",label:"Permission List"},{value:"permissions.list.denied",label:"Permission List Denied"},{value:"permissions.update",label:"Permission Updated"},{value:"permissions.update.denied",label:"Permission Update Denied"},{value:"permissions.user.denied",label:"Permission User View Denied"},{value:"permissions.user.view",label:"Permission User View"},{value:"reencryption.completed",label:"Re-encryption Completed"}],Te=class extends T.Modal{constructor(e,t,r="users",s=null,a={}){super(e);this.unsubscribeConnection=null;this.auditCursor=null;this.auditHasMore=!1;this.auditFilters={};this.userEmailMap=new Map;this.userLabelMap=new Map;this.vaultRoleMap=new Map;this.principalDirectoryLoaded=!1;this.principalDirectoryPromise=null;this.auditUserEmailsLoaded=!1;this.auditPageSize=50;this.activeTab=r,this.apiClient=t,this.permissionsUserId=s,this.context=a,this.userManager=new it(e,t),this.permissionEditor=new ge(e,t),this.seedCurrentUserIdentity()}onOpen(){let{contentEl:e}=this;e.empty(),this.modalEl.addClass("vaultguard-admin-modal"),e.addClass("vaultguard-admin-modal-content");let t=e.createDiv({cls:"vaultguard-admin-header"});t.createEl("h2",{text:this.permissionsUserId?"VaultGuard - My Vault Access":"VaultGuard - Organization Admin"}),this.statusEl=t.createDiv({cls:"vaultguard-connection-status"}),this.renderConnectionStatus(this.statusEl),this.unsubscribeConnection=this.apiClient.onConnectionStatusChange(()=>{this.renderConnectionStatus(this.statusEl)}),this.tabContainer=e.createDiv({cls:"vaultguard-tab-nav"}),this.renderTabs(),this.contentContainer=e.createDiv({cls:"vaultguard-tab-content"}),this.renderActiveTab()}onClose(){this.unsubscribeConnection&&(this.unsubscribeConnection(),this.unsubscribeConnection=null),this.modalEl.removeClass("vaultguard-admin-modal"),this.contentEl.removeClass("vaultguard-admin-modal-content"),this.contentEl.empty()}renderConnectionStatus(e){e.empty();let t=this.apiClient.isAuthenticated();e.createSpan({cls:"vaultguard-status-dot"}).addClass(t?"vaultguard-status-online":"vaultguard-status-offline"),e.createSpan({text:t?"Authenticated":"Not authenticated",cls:"vaultguard-status-text"})}renderTabs(){this.tabContainer.empty();let e=this.permissionsUserId?[{id:"permissions",label:"My vault access",icon:"shield"}]:[{id:"users",label:"Users",icon:"users"},{id:"permissions",label:"Vault access",icon:"shield"},{id:"audit",label:"Audit Log",icon:"file-text"},{id:"recovery",label:"Recovery",icon:"key"},{id:"settings",label:"Org settings",icon:"settings"}];e.some(t=>t.id===this.activeTab)||(this.activeTab=this.permissionsUserId?"permissions":"users");for(let t of e){let r=this.tabContainer.createDiv({cls:`vaultguard-tab ${this.activeTab===t.id?"vaultguard-tab-active":""}`}),s=r.createSpan({cls:"vaultguard-tab-icon"});(0,T.setIcon)(s,t.icon),r.createSpan({text:t.label}),r.addEventListener("click",()=>{this.activeTab=t.id,this.renderTabs(),this.renderActiveTab()})}}renderActiveTab(){switch(this.contentContainer.empty(),this.activeTab){case"users":this.renderUsersTab();break;case"permissions":this.renderPermissionsTab();break;case"audit":this.renderAuditTab();break;case"recovery":this.renderRecoveryTab();break;case"settings":this.renderSettingsTab();break}}async renderUsersTab(){let e=this.contentContainer.createDiv({cls:"vaultguard-users-tab"}),t=e.createDiv({cls:"vaultguard-toolbar"});new T.ButtonComponent(t).setButtonText("Invite User").setCta().onClick(()=>this.userManager.showInviteDialog(e)),new T.TextComponent(t).setPlaceholder("Search users...").onChange(a=>this.filterUsers(a,s)).inputEl.addClass("vaultguard-search-input");let s=e.createDiv({cls:"vaultguard-user-list"});await this.userManager.renderUserList(s)}filterUsers(e,t){let r=t.querySelectorAll(".vaultguard-user-item"),s=e.toLowerCase();r.forEach(a=>{let n=a.getAttribute("data-username")||"",o=a.getAttribute("data-email")||"",l=n.toLowerCase().includes(s)||o.toLowerCase().includes(s);a.style.display=l?"":"none"})}async renderPermissionsTab(){let e=this.contentContainer.createDiv({cls:"vaultguard-permissions-tab"});e.createEl("h3",{text:this.permissionsUserId?"My vault access":"Current vault access"}),e.createDiv({cls:"setting-item-description vaultguard-admin-tab-description",text:this.permissionsUserId?"Your vault role plus any direct rules returned for your account in the currently bound server vault.":"Path rules for the server vault currently bound to this Obsidian folder."});let t=e.createDiv({cls:"vaultguard-toolbar"}),r=e.createDiv({cls:"vaultguard-permission-tree"});e.addEventListener("vaultguard-refresh-permissions",async()=>{await this.renderPermissionTree(r)}),this.permissionsUserId?t.createSpan({text:"Your currently assigned rule set.",cls:"vaultguard-status-text"}):new T.ButtonComponent(t).setButtonText("Add Rule").setCta().onClick(()=>this.permissionEditor.showAddRuleDialog(e)),await this.renderPermissionTree(r)}async renderPermissionTree(e){e.empty(),e.createDiv({cls:"vaultguard-loading"}).createSpan({text:"Loading permissions..."});try{let r=this.permissionsUserId?this.apiClient.getUserPermissions(this.permissionsUserId):this.apiClient.getPermissions(),[s]=await Promise.all([r,this.hydratePrincipalDirectory()]);e.empty();let a=this.renderPermissionsUserAccessSummary(e);if(!s||s.length===0){e.createDiv({cls:"vaultguard-empty-state",text:a?"No additional direct permission rules are assigned.":this.permissionsUserId?"No direct permission rules were returned for your account.":"No permission rules configured. Click 'Add Rule' to get started."});return}let n=[...s].sort((o,l)=>o.pathPattern.localeCompare(l.pathPattern)||this.formatPrincipalLabel(o).localeCompare(this.formatPrincipalLabel(l)));for(let o of n){let c=e.createDiv({cls:"vaultguard-tree-node"}).createDiv({cls:"vaultguard-tree-node-header"}),d=c.createSpan({cls:"vaultguard-tree-icon"});(0,T.setIcon)(d,o.pathPattern.endsWith("/")?"folder":"file"),c.createSpan({text:o.pathPattern,cls:"vaultguard-tree-path"}).setAttribute("title",o.pathPattern);let p=c.createDiv({cls:"vaultguard-tree-badges"}),f=p.createSpan({cls:"vaultguard-permission-badge"});f.setText(this.formatPrincipalLabel(o)),f.addClass(o.effect==="deny"?"vaultguard-level-none":"vaultguard-level-read");let m=p.createSpan({cls:"vaultguard-permission-badge"});if(m.setText(`${o.effect} ${o.actions.join(", ")}`),m.addClass(o.effect==="deny"?"vaultguard-level-none":this.getRuleLevelClass(o)),!this.permissionsUserId){let v=c.createDiv({cls:"vaultguard-tree-actions"}),A=v.createEl("button",{cls:"vaultguard-icon-btn"});(0,T.setIcon)(A,"pencil"),A.addEventListener("click",I=>{I.stopPropagation(),this.permissionEditor.showEditRuleDialog(e,o)});let k=v.createEl("button",{cls:"vaultguard-icon-btn vaultguard-danger"});(0,T.setIcon)(k,"trash"),k.addEventListener("click",I=>{I.stopPropagation(),this.confirmDeletePermission(o,e)})}}}catch(r){e.empty(),e.createDiv({cls:"vaultguard-error",text:`Failed to load permissions: ${r.message}`})}}formatPrincipalLabel(e){return e.role?`role:${e.role}`:e.userId==="*"?"all users":this.formatUserLabel(e.userId)}renderPermissionsUserAccessSummary(e){let t=this.getPermissionsUserAccessSummary();if(!t)return!1;let r=e.createDiv({cls:"vaultguard-tree-node"}),s=r.createDiv({cls:"vaultguard-tree-node-header"}),a=s.createSpan({cls:"vaultguard-tree-icon"});(0,T.setIcon)(a,"shield-check"),s.createSpan({text:t.pathLabel,cls:"vaultguard-tree-path"});let n=s.createDiv({cls:"vaultguard-tree-badges"}),o=n.createSpan({cls:"vaultguard-permission-badge"});o.setText(this.formatUserLabel(this.permissionsUserId??"")),o.addClass(t.badgeClass);let l=n.createSpan({cls:"vaultguard-permission-badge"});return l.setText(t.badgeText),l.addClass(t.badgeClass),r.createDiv({cls:"setting-item-description vaultguard-admin-tab-description",text:t.description}),!0}getPermissionsUserAccessSummary(){if(!this.permissionsUserId)return null;let e=this.context.currentUser,t=e?.id===this.permissionsUserId,r=[e?.orgRole,...e?.roles??[]].filter(a=>!!a);if(t&&this.rolesIncludeOrgAdmin(r))return{pathLabel:"Entire vault",badgeText:"Full access",badgeClass:"vaultguard-level-admin",description:"Your organization admin role grants read, write, delete, list, and permission management access in this vault."};switch((t?e?.vaultRole:null)??this.vaultRoleMap.get(this.permissionsUserId)??null){case"admin":return{pathLabel:"Entire vault",badgeText:"Full access",badgeClass:"vaultguard-level-admin",description:"Your vault admin role grants read, write, delete, list, and permission management access in this vault."};case"editor":return{pathLabel:"Vault defaults",badgeText:"Read + write",badgeClass:"vaultguard-level-write",description:"Your editor role grants read, list, and write access by default. Direct rules below can narrow or extend that access for specific paths."};case"viewer":return{pathLabel:"Vault defaults",badgeText:"Read only",badgeClass:"vaultguard-level-read",description:"Your viewer role grants read and list access by default. Direct rules below can narrow or extend that access for specific paths."};default:return null}}async hydratePrincipalDirectory(){if(this.seedCurrentUserIdentity(),!this.principalDirectoryLoaded){if(this.principalDirectoryPromise){await this.principalDirectoryPromise;return}this.principalDirectoryPromise=this.loadPrincipalDirectory();try{await this.principalDirectoryPromise,this.principalDirectoryLoaded=!0}finally{this.principalDirectoryPromise=null}}}async loadPrincipalDirectory(){let e=[],t=this.apiClient.getVaultId(),r=[this.context.currentUser?.orgRole,...this.context.currentUser?.roles??[]].filter(a=>!!a),s=!this.permissionsUserId||this.rolesIncludeOrgAdmin(r);t&&e.push(this.apiClient.listVaultMembers(t).then(a=>this.mergeVaultMembersIntoPrincipalDirectory(a)).catch(()=>{})),s&&e.push(this.apiClient.listUsers().then(a=>{this.mergeUsersIntoPrincipalDirectory(a),this.auditUserEmailsLoaded=!0}).catch(()=>{})),await Promise.all(e)}mergeUsersIntoPrincipalDirectory(e){for(let t of e)this.registerUserIdentity({id:t.id,email:t.email,displayName:t.displayName,name:t.name})}mergeVaultMembersIntoPrincipalDirectory(e){for(let t of e)this.vaultRoleMap.set(t.userId,t.role),this.registerUserIdentity({id:t.userId,email:t.email??"",displayName:t.displayName??"",name:t.displayName??""})}seedCurrentUserIdentity(){let e=this.context.currentUser;e?.id&&(this.registerUserIdentity({id:e.id,email:e.email??"",displayName:e.displayName??"",name:e.displayName??""}),e.vaultRole&&this.vaultRoleMap.set(e.id,e.vaultRole))}registerUserIdentity(e){if(!e.id)return;let t=_({id:e.id,email:e.email??"",displayName:e.displayName??"",name:e.name??""}),r=this.userLabelMap.get(e.id);(!r||r===e.id||t!==e.id)&&this.userLabelMap.set(e.id,t),e.email?.trim()&&this.userEmailMap.set(e.id,e.email.trim())}formatUserLabel(e){return e?this.userLabelMap.get(e)??this.userEmailMap.get(e)??e:"Current user"}rolesIncludeOrgAdmin(e){return e.includes("admin")||e.includes("owner")||e.includes("vault-admin")}getRuleLevelClass(e){return e.actions.includes("admin")?"vaultguard-level-admin":e.actions.includes("write")||e.actions.includes("delete")?"vaultguard-level-write":"vaultguard-level-read"}async confirmDeletePermission(e,t){if(await this.showConfirmDialog("Delete Permission Rule",`Delete the ${this.formatPrincipalLabel(e)} rule on "${e.pathPattern}"? This cannot be undone.`))try{await this.apiClient.deletePermission(e.id),new T.Notice("Permission rule deleted."),await this.renderPermissionTree(t)}catch(s){new T.Notice(`Failed to delete: ${s.message}`)}}async renderAuditTab(){if(this.permissionsUserId){this.contentContainer.createDiv({cls:"vaultguard-empty-state",text:"Audit logs are available only in the admin panel."});return}if(!this.auditUserEmailsLoaded)try{let u=await this.apiClient.listUsers();this.mergeUsersIntoPrincipalDirectory(u),this.auditUserEmailsLoaded=!0}catch{}let e=this.contentContainer.createDiv({cls:"vaultguard-audit-tab"}),t=await this.loadAuditVaultRecord();this.renderAuditVaultContext(e,t);let r=e.createDiv({cls:"vaultguard-toolbar vaultguard-audit-filters"}),s=new T.TextComponent(r).setPlaceholder("Search by user, path, IP, or action...");s.inputEl.addClass("vaultguard-search-input"),s.setValue(this.auditFilters.search||"");let a=new T.DropdownComponent(r),n=this.context.features?.billing??!0;for(let u of Ai)!n&&u.value.startsWith("billing.")||a.addOption(u.value,u.label);a.setValue(this.auditFilters.action||"all");let o=new T.TextComponent(r).setPlaceholder("From (YYYY-MM-DD)");o.inputEl.type="date",o.inputEl.addClass("vaultguard-date-input"),o.setValue(this.auditFilters.dateFrom||"");let l=new T.TextComponent(r).setPlaceholder("To (YYYY-MM-DD)");l.inputEl.type="date",l.inputEl.addClass("vaultguard-date-input"),l.setValue(this.auditFilters.dateTo||""),new T.ButtonComponent(r).setButtonText("Apply Filters").onClick(async()=>{this.auditFilters={search:s.getValue(),action:a.getValue(),dateFrom:o.getValue(),dateTo:l.getValue()},await this.fetchAndRenderAuditLog(d,this.auditFilters,!1,t)});let c=this.context.features?.advancedAudit??!0;new T.ButtonComponent(r).setButtonText("Export CSV").onClick(()=>{if(!c){new ve(this.app,"advancedAudit").open();return}this.exportAuditLog()});let d=e.createDiv({cls:"vaultguard-audit-log"});await this.fetchAndRenderAuditLog(d,this.auditFilters,!1,t)}async fetchAndRenderAuditLog(e,t,r=!1,s=null){r||(e.empty(),this.auditCursor=null,this.auditHasMore=!1,e.createDiv({cls:"vaultguard-loading"}).createSpan({text:"Loading audit log..."}));try{let a=await this.apiClient.getAuditLogPage({...t,cursor:r?this.auditCursor:null,limit:this.auditPageSize}),n=a.entries??[];if(this.auditCursor=a.nextCursor??null,this.auditHasMore=!!this.auditCursor,r?e.querySelector(".vaultguard-pagination")?.remove():e.empty(),!n||n.length===0){r||e.createDiv({cls:"vaultguard-empty-state",text:"No audit log entries match your filters."});return}let o;r?(o=e.querySelector(".vaultguard-audit-entry-list"),o||(o=e.createDiv({cls:"vaultguard-audit-entry-list"}))):o=e.createDiv({cls:"vaultguard-audit-entry-list"});for(let l of n)this.renderAuditEntry(o,l,s);if(this.auditHasMore){let l=e.createDiv({cls:"vaultguard-pagination"}),c=new T.ButtonComponent(l);c.setButtonText("Load More").onClick(async()=>{c.setDisabled(!0),c.setButtonText("Loading..."),await this.fetchAndRenderAuditLog(e,t,!0,s)})}}catch(a){r||e.empty(),e.createDiv({cls:"vaultguard-error",text:`Failed to load audit log: ${a.message}`})}}formatTimestamp(e){return new Date(e).toLocaleString(void 0,{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})}async loadAuditVaultRecord(){let e=this.apiClient.getVaultId();if(!e)return null;try{return await this.apiClient.getVaultRecord(e)}catch{return null}}renderAuditVaultContext(e,t){let r=this.apiClient.getVaultId();if(!r&&!t)return;let s=e.createDiv({cls:"vaultguard-audit-vault-context"});s.createDiv({cls:"vaultguard-audit-vault-title",text:t?.name??"Bound vault"});let a=[t?.kind,t?.slug,t?.archived?"archived":t?"active":null,r].filter(n=>!!n);s.createDiv({cls:"vaultguard-audit-vault-meta vaultguard-monospace",text:a.join(" | ")})}renderAuditEntry(e,t,r){let s=e.createDiv({cls:"vaultguard-audit-entry"}),a=s.createDiv({cls:"vaultguard-audit-entry-header"}),n=a.createDiv({cls:"vaultguard-audit-entry-main"}),o=n.createSpan({cls:"vaultguard-action-badge"});o.setText(t.action),o.addClass(`vaultguard-action-${t.action.replace(/[^a-z0-9]+/gi,"_")}`),n.createSpan({cls:`vaultguard-audit-outcome vaultguard-audit-outcome-${t.outcome}`,text:t.outcome}).setAttr("aria-label",`Outcome: ${t.outcome}`),a.createDiv({cls:"vaultguard-audit-entry-time",text:this.formatTimestamp(t.timestamp)});let c=s.createDiv({cls:"vaultguard-audit-detail-grid"});if(this.addAuditDetail(c,"Vault",this.formatAuditVault(t,r),!0),this.addAuditDetail(c,"User",t.userEmail??this.userEmailMap.get(t.userId)??t.userId),this.addAuditDetail(c,"User ID",t.userId,!0),this.addAuditDetail(c,"Resource",t.resourcePath||"-",!0),this.addAuditDetail(c,"IP Address",t.ipAddress||"-"),this.addAuditDetail(c,"Device",t.userAgent||"-"),t.orgId&&this.addAuditDetail(c,"Organization",t.orgId,!0),t.id&&this.addAuditDetail(c,"Event ID",t.id,!0),t.metadata&&Object.keys(t.metadata).length>0){let u=s.createDiv({cls:"vaultguard-audit-metadata"});u.createDiv({cls:"vaultguard-audit-metadata-label",text:"Metadata"}),u.createEl("pre",{cls:"vaultguard-audit-json",text:this.formatAuditJson(t.metadata)})}let d=s.createEl("details",{cls:"vaultguard-audit-raw"});d.createEl("summary",{text:"Raw event data"}),d.createEl("pre",{cls:"vaultguard-audit-json",text:this.formatAuditJson(t)})}addAuditDetail(e,t,r,s=!1){let a=e.createDiv({cls:"vaultguard-audit-detail"});a.createDiv({cls:"vaultguard-audit-detail-label",text:t});let n=a.createDiv({cls:"vaultguard-audit-detail-value"});s&&n.addClass("vaultguard-monospace"),n.setText(this.formatAuditValue(r))}formatAuditVault(e,t){let r=e.vaultId??this.apiClient.getVaultId();return r?t&&t.vaultId===r?`${t.name} (${t.slug}) | ${r}`:r:"-"}formatAuditValue(e){return e==null||e===""?"-":typeof e=="string"?e:typeof e=="number"||typeof e=="boolean"?String(e):this.formatAuditJson(e)}formatAuditJson(e){try{return JSON.stringify(e,null,2)??String(e)}catch{return String(e)}}async exportAuditLog(){try{let e=await this.apiClient.exportAuditLogCsv(this.auditFilters),t=URL.createObjectURL(e),r=document.createElement("a");r.href=t,r.download=`vaultguard-audit-log-${new Date().toISOString().split("T")[0]}.csv`,r.click(),URL.revokeObjectURL(t),new T.Notice("Audit log exported.")}catch(e){new T.Notice(`Export failed: ${e.message}`)}}async renderRecoveryTab(){let e=this.contentContainer.createDiv({cls:"vaultguard-recovery-tab"});e.createEl("h3",{text:"Key Recovery & Re-encryption"}),e.createEl("p",{text:"Manage encryption key recovery for offboarded users and trigger re-encryption of affected files.",cls:"setting-item-description"}),e.createEl("h4",{text:"Re-encrypt Files After Offboarding"}),e.createEl("p",{text:"After revoking a user, re-encrypt all files they had access to with new keys. This ensures the revoked user's old key material cannot decrypt any retained copies. Re-encryption runs automatically on revocation, but you can trigger it manually here.",cls:"setting-item-description"});let t=null;new T.Setting(e).setName("Target User ID").setDesc("The user ID of the revoked user whose files need re-encryption").addText(n=>{t=n,n.setPlaceholder("user-id-here")}),new T.Setting(e).setName("Start Re-encryption").setDesc("This will decrypt and re-encrypt all files the user had access to. May take several minutes for large vaults.").addButton(n=>n.setButtonText("Trigger Re-encryption").setWarning().onClick(async()=>{let o=t?.getValue()?.trim();if(!o){new T.Notice("Please enter a target user ID.");return}if(await this.showConfirmDialog("Confirm Re-encryption",`This will re-encrypt all files that user "${o}" had access to. The process cannot be interrupted once started. Proceed?`))try{n.setDisabled(!0),n.setButtonText("Starting...");let c=await this.apiClient.triggerReEncryption(o);new T.Notice(`Re-encryption job started: ${c.jobId||"unknown"}`),c.jobId&&this.renderJobStatus(e,c.jobId)}catch(c){new T.Notice(`Failed to start re-encryption: ${c.message}`)}finally{n.setDisabled(!1),n.setButtonText("Trigger Re-encryption")}})),e.createEl("h4",{text:"Check Job Status"});let r=null;new T.Setting(e).setName("Job ID").setDesc("Enter a re-encryption job ID to check its progress").addText(n=>{r=n,n.setPlaceholder("job-id-here")}).addButton(n=>n.setButtonText("Check Status").onClick(async()=>{let o=r?.getValue()?.trim();if(!o){new T.Notice("Please enter a job ID.");return}this.renderJobStatus(e,o)})),e.createEl("h4",{text:"Emergency Key Recovery"}),e.createEl("p",{text:"For organizations using end-to-end encryption (hybrid ZK mode): recover a user's encrypted master key using the organization recovery key. This is a sensitive operation and is fully audit-logged.",cls:"setting-item-description"});let s=e.createDiv({cls:"vaultguard-zk-warning"});s.createEl("strong",{text:"When to use this:"}),s.appendText(" Only when a user has lost their encryption passphrase and cannot access their vault. The recovered key allows you to re-encrypt the user's files so they can set a new passphrase. This action is logged and visible in the audit trail.");let a=null;new T.Setting(e).setName("Recover User's Key").setDesc("Enter the user ID to recover their wrapped master key").addText(n=>{a=n,n.setPlaceholder("user-id-here")}).addButton(n=>n.setButtonText("Initiate Recovery").setWarning().onClick(async()=>{let o=a?.getValue()?.trim();if(!o){new T.Notice("Please enter a user ID.");return}if(await this.showConfirmDialog("Confirm Key Recovery",`You are about to recover the encryption master key for user "${o}". This action is irreversible, fully audit-logged, and should only be performed when the user has lost their passphrase. Continue?`))try{let c=await this.apiClient.recoverUserKey(o);if(c.wrappedUMK_org){let d=c.wrappedUMK_org;new T.Notice("Recovery key retrieved.");let u=e.createDiv({cls:"vaultguard-recovery-result"});u.createEl("h4",{text:"Recovery Result"}),u.createEl("p",{text:c.message||"Unwrap this key with the organization recovery private key."});let p=u.createEl("textarea",{cls:"vaultguard-recovery-key-output",attr:{readonly:"true","aria-label":"Wrapped user master key"}});p.value=d,p.rows=4;let f=u.createDiv({cls:"vaultguard-recovery-actions"});new T.ButtonComponent(f).setButtonText("Copy wrapped key").onClick(async()=>{try{await navigator.clipboard.writeText(d),new T.Notice("Wrapped key copied.")}catch{p.select(),new T.Notice("Select and copy the wrapped key manually.")}}),u.createEl("p",{text:"Handle this wrapped key as sensitive recovery material. This action is audit-logged.",cls:"setting-item-description"})}}catch(c){new T.Notice(`Recovery failed: ${c.message}`)}}))}async renderJobStatus(e,t){let r=e.querySelector(".vaultguard-job-status");r&&r.remove();let s=e.createDiv({cls:"vaultguard-job-status"});s.createEl("h4",{text:`Job: ${t}`});try{let n=(await this.apiClient.getReEncryptionJobStatus(t)).job;if(!n){s.createEl("p",{text:"Job not found.",cls:"vaultguard-error"});return}let o=n.status,l=n.processedFiles||0,c=n.totalFiles||0,d=n.failedFiles||0,u=s.createSpan({text:o.toUpperCase(),cls:`vaultguard-badge vaultguard-badge-${o==="completed"?"success":o==="failed"?"error":"warning"}`});s.createEl("p",{text:`Progress: ${l} / ${c} files re-encrypted${d>0?` (${d} failed)`:""}`}),n.startedAt&&s.createEl("p",{text:`Started: ${new Date(n.startedAt).toLocaleString()}`,cls:"setting-item-description"}),n.completedAt&&s.createEl("p",{text:`Completed: ${new Date(n.completedAt).toLocaleString()}`,cls:"setting-item-description"});let p=n.errors||[];if(p.length>0){let f=s.createDiv({cls:"vaultguard-job-errors"});f.createEl("strong",{text:`Errors (${p.length}):`});for(let m of p.slice(0,5))f.createEl("p",{text:m,cls:"vaultguard-error-line"});p.length>5&&f.createEl("p",{text:`...and ${p.length-5} more`,cls:"setting-item-description"})}}catch(a){s.createEl("p",{text:`Failed to fetch status: ${a.message}`,cls:"vaultguard-error"})}}async renderSettingsTab(){let e=this.contentContainer.createDiv({cls:"vaultguard-settings-tab"});e.createDiv({cls:"vaultguard-loading"}).createSpan({text:"Loading settings..."});try{let r=await this.apiClient.getOrgSettings();e.empty(),this.renderOrgSettings(e,r)}catch(r){if(e.empty(),Pr(r)){e.createDiv({cls:"vaultguard-warning",text:"This backend cannot serve organization settings right now. Showing VaultGuard default settings in read-only mode."}),this.renderOrgSettings(e,Cr(this.context.orgId??"",this.context.orgSlug),{readOnly:!0});return}e.createDiv({cls:"vaultguard-error",text:`Failed to load settings: ${r.message}`})}}renderOrgSettings(e,t,r={}){let s=r.readOnly??!1,a={...t,allowedDomains:[...t.allowedDomains??[]],enforceEncryption:!0},n=t.orgName,o=String(t.syncIntervalMinutes),l=String(t.maxSessionDurationHours),c=String(t.autoLockMinutes),d=(t.allowedDomains??[]).join(`
`),u=String(t.retentionDays),p=(P,g)=>{let w=Number.parseInt(g,10);if(!Number.isInteger(w)||w<=0)throw new Error(`${P} must be a whole number greater than 0.`);return w},f=(P,g)=>{let w=Number.parseInt(g,10);if(!Number.isInteger(w)||w<0)throw new Error(`${P} must be a whole number 0 or greater.`);return w},m=P=>Array.from(new Set(P.split(/[\n,]/).map(g=>g.trim().toLowerCase()).filter(g=>g.length>0))),v=()=>{let P=n.trim();if(!P)throw new Error("Organization name is required.");return{...a,orgName:P,syncIntervalMinutes:p("Sync interval",o),enforceEncryption:!0,maxSessionDurationHours:p("Max session duration",l),allowedDomains:m(d),retentionDays:p("Audit log retention",u),autoLockMinutes:f("Auto-lock",c)}};if(e.createDiv({cls:"vaultguard-info-callout",text:"These are organization policies served by the VaultGuard backend. Password policy, key-lease duration, billing, and infrastructure remain deployment-managed."}),e.createEl("h3",{text:"Organization"}),new T.Setting(e).setName("Organization Name").setDesc("Display name for your organization").addText(P=>P.setValue(t.orgName).setDisabled(s).onChange(g=>{n=g})),new T.Setting(e).setName("Organization ID").setDesc("Unique identifier (read-only)").addText(P=>P.setValue(t.orgId).setDisabled(!0)),e.createEl("h3",{text:"Sync Configuration"}),new T.Setting(e).setName("Sync Mode").setDesc("How vault data is synchronized with the backend").addDropdown(P=>P.addOption("realtime","Real-time").addOption("periodic","Periodic").addOption("manual","Manual").setValue(t.syncMode).setDisabled(s).onChange(g=>{a.syncMode=g})),new T.Setting(e).setName("Sync Interval (minutes)").setDesc("How often to sync (only applies to periodic mode)").addText(P=>{P.inputEl.type="number",P.inputEl.min="1",P.inputEl.step="1",P.setValue(String(t.syncIntervalMinutes)).setPlaceholder("15").setDisabled(s).onChange(g=>{o=g})}).settingEl.addClass("vaultguard-number-setting"),e.createEl("h3",{text:"Security Policies"}),new T.Setting(e).setName("Enforce Encryption").setDesc("VaultGuard always encrypts vault data at rest. This policy is always enabled.").addToggle(P=>P.setValue(t.enforceEncryption).setDisabled(!0).onChange(g=>{a.enforceEncryption=g})),new T.Setting(e).setName("Require MFA").setDesc("Require multi-factor authentication for all users").addToggle(P=>P.setValue(t.requireMfa).setDisabled(s).onChange(g=>{a.requireMfa=g})),new T.Setting(e).setName("Max Session Duration (hours)").setDesc("Force re-authentication after this many hours").addText(P=>{P.inputEl.type="number",P.inputEl.min="1",P.inputEl.step="1",P.setValue(String(t.maxSessionDurationHours)).setDisabled(s).onChange(g=>{l=g})}).settingEl.addClass("vaultguard-number-setting"),new T.Setting(e).setName("Auto-Lock (minutes)").setDesc("Lock vault after this many minutes of inactivity (0 = disabled)").addText(P=>{P.inputEl.type="number",P.inputEl.min="0",P.inputEl.step="1",P.setValue(String(t.autoLockMinutes)).setDisabled(s).onChange(g=>{c=g})}).settingEl.addClass("vaultguard-number-setting"),new T.Setting(e).setName("Allowed Email Domains").setDesc("Domains allowed for user invites. Leave blank to allow any domain.").addTextArea(P=>{P.inputEl.rows=3,P.setValue(d).setPlaceholder(`company.com
subsidiary.com`).setDisabled(s).onChange(g=>{d=g})}).settingEl.addClass("vaultguard-admin-textarea-setting"),new T.Setting(e).setName("Audit Log Retention (days)").setDesc("How long to retain audit log entries").addText(P=>{P.inputEl.type="number",P.inputEl.min="1",P.inputEl.step="1",P.setValue(String(t.retentionDays)).setDisabled(s).onChange(g=>{u=g})}).settingEl.addClass("vaultguard-number-setting"),e.createEl("h3",{text:"Deployment-managed controls"}),new T.Setting(e).setName("Password policy").setDesc("Managed by the Cognito user-pool configuration for this deployment."),new T.Setting(e).setName("Key lease duration").setDesc("Managed by backend deployment configuration and refreshed through key-lease APIs."),new T.Setting(e).setName("Infrastructure and billing").setDesc("Managed outside the plugin. Hosted SaaS billing belongs in the web admin panel."),s){new T.Setting(e).addButton(P=>P.setButtonText("Retry Load").onClick(()=>{this.renderActiveTab()}));return}e.createDiv({cls:"vaultguard-settings-actions"}),new T.Setting(e).addButton(P=>{P.setButtonText("Save Settings").setCta().onClick(async()=>{try{let g=v();P.setDisabled(!0),P.setButtonText("Saving..."),await this.apiClient.updateOrgSettings(g),new T.Notice("Organization settings saved."),this.renderActiveTab()}catch(g){new T.Notice(`Failed to save: ${g.message}`)}finally{P.setDisabled(!1),P.setButtonText("Save Settings")}})}).addButton(P=>{P.setButtonText("Reset to Defaults").onClick(async()=>{if(await this.showConfirmDialog("Reset Settings","Are you sure you want to reset all settings to their defaults? This cannot be undone."))try{P.setDisabled(!0),P.setButtonText("Resetting..."),await this.apiClient.resetOrgSettings(),new T.Notice("Settings reset to defaults."),this.renderActiveTab()}catch(w){new T.Notice(`Failed to reset: ${w.message}`)}finally{P.setDisabled(!1),P.setButtonText("Reset to Defaults")}})})}showConfirmDialog(e,t){return new Promise(r=>{new jt(this.app,e,t,r).open()})}},jt=class extends T.Modal{constructor(e,t,r,s){super(e);this.resolved=!1;this.title=t,this.message=r,this.resolvePromise=s}onOpen(){let{contentEl:e}=this;e.empty(),this.modalEl.addClass("vaultguard-dialog-modal"),e.addClass("vaultguard-dialog-content"),e.createEl("h3",{text:this.title}),e.createEl("p",{text:this.message});let t=e.createDiv({cls:"vaultguard-confirm-buttons"});new T.ButtonComponent(t).setButtonText("Cancel").onClick(()=>{this.finish(!1)}),new T.ButtonComponent(t).setButtonText("Confirm").setCta().setWarning().onClick(()=>{this.finish(!0)})}onClose(){this.modalEl.removeClass("vaultguard-dialog-modal"),this.contentEl.removeClass("vaultguard-dialog-content"),this.contentEl.empty(),this.resolved||(this.resolved=!0,this.resolvePromise(!1))}finish(e){this.resolved||(this.resolved=!0,this.resolvePromise(e),this.close())}};var Vr=require("obsidian");var Tr=require("obsidian");var Ri=["dev","prod","staging","stage","test","qa","development","production"],Li=new Set(["users","permissions","audit","settings","login","index.html"]),Ti=new Set(["auth","files","permissions","audit","users","vaults","orgs","billing","re-encryption","signup"]);function Q(h){let i=h.trim();if(!i)return"";let e;try{e=new URL(i)}catch{return i.replace(/\/+$/,"")}let r=Mi(e)?[]:Mr(e.pathname),s=r.map(n=>n.toLowerCase()),a=Ui(r,s);return e.pathname=a.length>0?`/${a.join("/")}`:"",e.search="",e.hash="",e.toString().replace(/\/+$/,"")}async function ot(h,i,e){let t=Q(h);if(!t||!i)return t;let r;try{r=new URL(t)}catch{return t}let s=Di(r);for(let a of s)if(await Bi(a,i,e))return a;return t}function Ii(h,i){let e=new URL(h.toString());return e.pathname=`/${i}`,e.search="",e.hash="",e.toString().replace(/\/+$/,"")}function Mi(h){let i=h.hostname.toLowerCase();return te.apiHostname&&te.websiteHostnames.includes(i)?(h.hostname=te.apiHostname,!0):(i.startsWith("admin.")&&(h.hostname=`api.${h.hostname.slice(6)}`),!1)}function Di(h){let i=Ir(h.pathname),e=new Set,t=nt(h,[]);if(e.add(Q(h.toString())),i.length===0)return Kt(e,h),[...e];let r=i[0],s=i[1];return _e(r)||Ge(r)||e.add(nt(h,[r])),e.add(t),s&&!Ge(r)&&!_e(r)&&(_e(s)||Ge(s))&&e.add(nt(h,[r])),i[i.length-1]==="index.html"&&(i.length>1?e.add(nt(h,i.slice(0,-1))):e.add(t)),Kt(e,h),Kt(e,new URL(t)),[...e]}function Kt(h,i){let e=Ir(i.pathname);if(e.length>1)return;let t=e[0];if(t&&!Vi(t))return;let r=new URL(i.toString());r.pathname="",r.search="",r.hash="";for(let s of Ri)h.add(Ii(r,s))}function nt(h,i){let e=new URL(h.toString());return e.pathname=i.length>0?`/${i.join("/")}`:"",e.search="",e.hash="",Q(e.toString())}function Ir(h){return Mr(h).map(i=>i.toLowerCase())}function Mr(h){return h.split("/").map(i=>i.trim()).filter(i=>i.length>0)}function Ui(h,i){let e=i.findIndex(t=>_e(t)||Ge(t));return e===-1?h:e===0?[]:h.slice(0,e)}function _e(h){return!!h&&Li.has(h.toLowerCase())}function Ge(h){return!!h&&Ti.has(h.toLowerCase())}function Vi(h){return _e(h)||Ge(h)?!1:!h.includes(".")}async function Bi(h,i,e){try{let r=await(0,Tr.requestUrl)({url:`${h}${e??"/vaults"}`,method:"GET",headers:{Authorization:i},throw:!1});return Ni(r)}catch{return!1}}function Ni(h){let i=Lr(h.headers,"content-type")?.toLowerCase()??"",e=Lr(h.headers,"x-request-id"),t=Fi(h.json)?h.json:null,r=h.text??"",s=typeof t?.message=="string"?t.message:r;return lt(s,r,i)||h.status>=500||h.status===404?!1:!!(i.includes("application/json")||e||t&&(Array.isArray(t.rules)||typeof t.message=="string"||typeof t.error=="string"))}function lt(h,i,e){let t=`${h}
${i}`.toLowerCase();return t.includes("authorization header requires 'credential' parameter")||t.includes("authorization header requires 'signature' parameter")||t.includes("authorization header requires 'signedheaders' parameter")||t.includes("x-amz-date")||e.includes("xml")||e.includes("text/html")||i.trim().startsWith("<")}function Lr(h,i){return Object.entries(h).find(([t])=>t.toLowerCase()===i.toLowerCase())?.[1]??null}function Fi(h){return typeof h=="object"&&h!==null}var Dr={baseUrl:"",orgId:"",vaultId:"",maxRetries:3,baseRetryDelayMs:1e3,maxRetryDelayMs:3e4,requestTimeoutMs:3e4,offlineQueueMaxSize:100,healthCheckIntervalMs:3e4};function $i(h){let i="";for(let e=0;e<h.length;e++)i+=String.fromCharCode(h[e]);return btoa(i)}function Oi(h){let i=atob(h),e=new Uint8Array(i.length);for(let t=0;t<i.length;t++)e[t]=i.charCodeAt(t);return e.buffer}var _i=/[\r\n\x00-\x1f\x7f]/g,Gi=128;function Ur(h){return(h??"").replace(_i,"").slice(0,Gi)}var ct=class{constructor(i){this.tokens=null;this.connectionStatus="offline";this.connectionListeners=new Set;this.offlineQueue=[];this.healthCheckTimer=null;this.refreshPromise=null;this.resolvedBaseUrl=null;this.baseUrlResolutionPromise=null;this.agentContextStack=[];this.config={...Dr,...i,baseUrl:Q(i.baseUrl??Dr.baseUrl)}}initialize(i){i&&(this.tokens=i,this.setConnectionStatus("online"))}destroy(){this.stopHealthCheck(),this.offlineQueue=[],this.connectionListeners.clear()}isConnected(){return this.connectionStatus==="online"}isAuthenticated(){return this.tokens!==null}getConnectionStatus(){return this.connectionStatus}onConnectionStatusChange(i){return this.connectionListeners.add(i),()=>this.connectionListeners.delete(i)}setConnectionStatus(i){if(this.connectionStatus!==i){this.connectionStatus=i;for(let e of this.connectionListeners)e(i);i==="online"&&this.flushOfflineQueue()}}startHealthCheck(){this.stopHealthCheck(),this.healthCheckTimer=setInterval(async()=>{await this.checkHealth()},this.config.healthCheckIntervalMs)}stopHealthCheck(){this.healthCheckTimer&&(clearInterval(this.healthCheckTimer),this.healthCheckTimer=null)}async checkHealth(){try{let i=this.tokens?await this.getAuthHeaders():void 0,e=await this.sendRequest("GET","/vaults",{headers:i});this.isSuccessStatus(e.status)?this.setConnectionStatus("online"):this.setConnectionStatus("degraded")}catch(i){this.isNetworkError(i)?this.setConnectionStatus("offline"):this.setConnectionStatus("degraded")}}async login(i){let e=await this.rawRequest("POST","/auth/login",i,{skipAuth:!0});return this.tokens=e.tokens,e}async logout(){try{await this.request("POST","/auth/logout")}finally{this.tokens=null}}async refreshTokens(){let i=await this.syncTokensFromProvider(!0);if(i)return i;throw new dt("Session expired. Please log in again.")}getTokens(){return this.tokens}vaultBase(){if(!this.config.vaultId)throw new Error("VaultGuard: this Obsidian folder is not bound to a server vault yet. Open the VaultGuard sidebar to pick or create one.");return`/vaults/${encodeURIComponent(this.config.vaultId)}`}getVaultId(){return this.config.vaultId}setVaultId(i){this.config={...this.config,vaultId:i}}async listVaults(){return(await this.request("GET","/vaults")).vaults??[]}async createVault(i){return(await this.request("POST","/vaults",i)).vault}async getVaultRecord(i){return(await this.request("GET",`/vaults/${encodeURIComponent(i)}`)).vault}async updateVault(i,e){return(await this.request("PATCH",`/vaults/${encodeURIComponent(i)}`,e)).vault}async archiveVault(i){await this.request("DELETE",`/vaults/${encodeURIComponent(i)}`)}async listVaultMembers(i){return(await this.request("GET",`/vaults/${encodeURIComponent(i)}/members`)).members??[]}async addVaultMember(i,e,t){return(await this.request("POST",`/vaults/${encodeURIComponent(i)}/members`,{userId:e,role:t})).membership}async updateVaultMember(i,e,t){return(await this.request("PATCH",`/vaults/${encodeURIComponent(i)}/members/${encodeURIComponent(e)}`,{role:t})).membership}async removeVaultMember(i,e){await this.request("DELETE",`/vaults/${encodeURIComponent(i)}/members/${encodeURIComponent(e)}`)}async getFiles(i){let e=i?`?prefix=${encodeURIComponent(i)}`:"";return(await this.request("GET",`${this.vaultBase()}/files${e}`)).files??[]}async getFile(i){let e=await this.request("GET",`${this.vaultBase()}/files/${encodeURIComponent(i)}`);return Oi(e.content)}async putFile(i,e,t){return await this.request("PUT",`${this.vaultBase()}/files/${encodeURIComponent(i)}`,{content:$i(new Uint8Array(e)),contentType:t.encryptedKey?"application/octet-stream":"text/markdown"})}async deleteFile(i){await this.request("DELETE",`${this.vaultBase()}/files/${encodeURIComponent(i)}`)}async getFileHistory(i){return this.request("GET",`${this.vaultBase()}/files/${encodeURIComponent(i)}/history`)}async getPermissions(i){let e=i?`?pathFilter=${encodeURIComponent(i)}`:"";return(await this.request("GET",`${this.vaultBase()}/permissions${e}`)).rules??[]}async createPermission(i){return(await this.request("POST",`${this.vaultBase()}/permissions`,i)).rule}async setPermissionLevel(i){return this.request("POST",`${this.vaultBase()}/permissions`,i)}async updatePermission(i,e){return(await this.request("PUT",`${this.vaultBase()}/permissions/${encodeURIComponent(i)}`,e)).rule}async deletePermission(i){await this.request("DELETE",`${this.vaultBase()}/permissions/${encodeURIComponent(i)}`)}async getUserPermissions(i){return(await this.request("GET",`${this.vaultBase()}/permissions/user/${encodeURIComponent(i)}`)).rules??[]}async getPathAccess(i){let e=await this.request("POST",`${this.vaultBase()}/permissions/access`,{path:i.startsWith("/")?i:`/${i}`});return{path:e.path,currentUserLevel:e.currentUserLevel??"none",principals:e.principals??[]}}async getBatchPathAccess(i){if(!Array.isArray(i)||i.length===0)return[];let e=i.filter(r=>typeof r=="string"&&r.trim().length>0).map(r=>r.startsWith("/")?r:`/${r}`);return e.length===0?[]:((await this.request("POST",`${this.vaultBase()}/permissions/access/batch`,{paths:e})).summaries??[]).map(r=>({path:r.path,currentUserLevel:r.currentUserLevel??"none",principals:r.principals??[]}))}async createShare(i){let e=await this.request("POST",`${this.vaultBase()}/shares`,i);return{...e.share,url:e.url}}async listShares(){return(await this.request("GET",`${this.vaultBase()}/shares`)).shares??[]}async resolveShare(i,e){return this.request("GET",`/vaults/${encodeURIComponent(i)}/shares/${encodeURIComponent(e)}`)}async revokeShare(i){await this.request("DELETE",`${this.vaultBase()}/shares/${encodeURIComponent(i)}`)}async listUsers(){return this.request("GET","/users")}async listRoles(){return this.request("GET","/users/roles")}async inviteUser(i){await this.request("POST","/users/invite",i)}async updateUserRole(i,e){await this.request("PUT",`/users/${encodeURIComponent(i)}/role`,{role:e})}async revokeUser(i){await this.request("POST",`/users/${encodeURIComponent(i)}/revoke`)}async reactivateUser(i){await this.request("POST",`/users/${encodeURIComponent(i)}/reactivate`)}async resendInvitation(i){await this.request("POST",`/users/${encodeURIComponent(i)}/resend-invite`)}async updateUserProfile(i,e){await this.request("PUT",`/users/${encodeURIComponent(i)}/profile`,e)}async getUserActivity(i,e=50){return this.request("GET",`/users/${encodeURIComponent(i)}/activity?limit=${e}`)}async getAuditLogPage(i){let e=new URLSearchParams;i.search&&e.set("search",i.search),i.action&&i.action!=="all"&&e.set("action",i.action),i.dateFrom&&e.set("startDate",i.dateFrom),i.dateTo&&e.set("endDate",i.dateTo),i.cursor&&e.set("cursor",i.cursor),e.set("limit",String(i.limit||50));let t=await this.request("GET",`${this.vaultBase()}/audit?${e.toString()}`);return{entries:t.entries??[],count:t.count??t.entries?.length??0,nextCursor:t.nextCursor??null,lastEvaluatedKey:t.lastEvaluatedKey??null}}async getAuditLog(i){return(await this.getAuditLogPage(i)).entries}async exportAuditLogCsv(i={}){let e=await this.getAuthHeaders(),t=await this.sendRequest("POST",`${this.vaultBase()}/audit/export`,{headers:e,body:JSON.stringify({search:i.search,action:i.action&&i.action!=="all"?i.action:void 0,startDate:i.dateFrom,endDate:i.dateTo,outcome:i.outcome,format:"csv"}),contentType:"application/json"});return this.isSuccessStatus(t.status)||await this.handleErrorResponse(t),new Blob([t.arrayBuffer],{type:this.getHeaderValue(t.headers,"content-type")??"text/csv"})}async withAgentContext(i,e,t){this.agentContextStack.push({agentName:Ur(i),leaseId:Ur(e)});try{return await t()}finally{this.agentContextStack.pop()}}async postBridgeAudit(i,e,t={}){let r={action:i,resourcePath:e,metadata:t};await this.request("POST",`${this.vaultBase()}/audit/bridge`,r)}async getOrgSettings(){return this.request("GET",`/orgs/${this.config.orgId}/settings`)}async updateOrgSettings(i){await this.request("PUT",`/orgs/${this.config.orgId}/settings`,i)}async resetOrgSettings(){await this.request("DELETE",`/orgs/${this.config.orgId}/settings`)}async triggerReEncryption(i){return this.request("POST","/re-encryption/trigger",{targetUserId:i})}async getReEncryptionJobStatus(i){return this.request("GET",`/re-encryption/${i}`)}async recoverUserKey(i){return this.request("POST","/auth/recover",{targetUserId:i})}async request(i,e,t){return this.executeWithRetry(async()=>await this.rawRequest(i,e,t))}async requestBinary(i,e){return this.executeWithRetry(async()=>(await this.requestRaw(i,e)).arrayBuffer)}async requestFormData(i,e,t){return this.executeWithRetry(async()=>{let r=await this.getAuthHeaders(),s=await this.sendRequest(i,e,{headers:r,body:JSON.stringify(t),contentType:"application/json"});return this.isSuccessStatus(s.status)||await this.handleErrorResponse(s),s.json})}async requestRaw(i,e){let t=await this.getAuthHeaders(),r=await this.sendRequest(i,e,{headers:t});return this.isSuccessStatus(r.status)||await this.handleErrorResponse(r),r}async rawRequest(i,e,t,r){let s={};if(!r?.skipAuth){let o=await this.getAuthHeaders();Object.assign(s,o)}let a=await this.sendRequest(i,e,{headers:s,body:t&&i!=="GET"?JSON.stringify(t):void 0,contentType:t&&i!=="GET"?"application/json":void 0});this.isSuccessStatus(a.status)||await this.handleErrorResponse(a);let n=this.getHeaderValue(a.headers,"content-length");if(!(a.status===204||n==="0"||a.text.length===0))return this.parseJsonResponse(a)}async getAuthHeaders(){let i=await this.syncTokensFromProvider(!1);if(i&&(this.tokens=i),!this.tokens)throw new Error("Not authenticated. Please log in first.");let e=Date.now();if(this.tokens.expiresAt-e<6e4)try{await this.refreshTokens()}catch{throw new Error("Session expired. Please log in again.")}let t={Authorization:this.tokens.idToken},r=this.config.getSessionId?.();r&&(t["X-VaultGuard-Session-Id"]=r);let s=this.agentContextStack[this.agentContextStack.length-1];return s&&(t["X-VG-Agent-Name"]=s.agentName,t["X-VG-Lease-Id"]=s.leaseId),t}async syncTokensFromProvider(i){if(!this.config.getAuthTokens)return this.tokens;if(this.refreshPromise)return this.refreshPromise;let e=(async()=>{let t=await this.config.getAuthTokens?.(i);return t&&(this.tokens=t),t??null})();this.refreshPromise=e;try{return await e}finally{this.refreshPromise===e&&(this.refreshPromise=null)}}async handleErrorResponse(i){if(i.status===0)throw new gt(i.text?.trim()||"Network request failed with status 0.");let e;try{e=await this.parseErrorBody(i)}catch(t){let r=t instanceof ee?t.apiError:void 0;e={statusCode:i.status,message:t instanceof Error?t.message:this.getResponseStatusText(i),code:r?.code??"UNKNOWN_ERROR",requestId:r?.requestId}}if(i.status===401&&(this.tokens?.refreshToken||this.config.getAuthTokens)){try{await this.refreshTokens()}catch{throw this.tokens=null,new dt("Session expired. Please log in again.")}throw new ut(e.message,e)}throw i.status===403?new Jt(e.message):i.status===429?new ht(e.message):i.status>=500?new pt(e.message,e):new ee(e.message,e)}async executeWithRetry(i,e=0){try{let t=await i();return this.setConnectionStatus("online"),t}catch(t){if(this.isNetworkError(t)){if(e<this.config.maxRetries){let r=this.calculateBackoff(e);return await this.sleep(r),this.executeWithRetry(i,e+1)}throw this.setConnectionStatus("offline"),new gt("Network unavailable. Request will be retried when connection is restored.")}if(this.isRetryable(t)&&e<this.config.maxRetries){let r=this.calculateBackoff(e);return await this.sleep(r),this.executeWithRetry(i,e+1)}throw t}}isRetryable(i){return i instanceof ut||i instanceof ht||i instanceof pt}isNetworkError(i){if(i&&typeof i=="object"&&"status"in i&&i.status===0)return!0;let e=this.extractErrorMessage(i);return e?e.includes("network")||e.includes("timeout")||e.includes("timed out")||e.includes("econnrefused")||e.includes("econnreset")||e.includes("econnaborted")||e.includes("enotfound")||e.includes("etimedout")||e.includes("eai_again")||e.includes("enetunreach")||e.includes("ehostunreach")||e.includes("ehostdown")||e.includes("err_name_not_resolved")||e.includes("errname")||e.includes("err_internet_disconnected")||e.includes("err_network_changed")||e.includes("connection refused")||e.includes("connection reset")||e.includes("connection closed")||e.includes("socket hang up")||e.includes("failed to fetch")||e.includes("net::err_")||e.includes("abort"):!1}extractErrorMessage(i){if(i instanceof Error)return i.message.toLowerCase();if(typeof i=="string")return i.toLowerCase();if(i&&typeof i=="object"){let e=i;if(typeof e.message=="string")return e.message.toLowerCase();if(typeof e.text=="string")return e.text.toLowerCase()}return""}async sendRequest(i,e,t={}){let r=t.headers?.Authorization,s=await this.resolveBaseUrl(r),a=await this.sendRequestToBaseUrl(s,i,e,t);if(!r||!this.isMisroutedResponse(a))return a;let n=await this.resolveBaseUrl(r,e,!0);return!n||n===s?a:this.sendRequestToBaseUrl(n,i,e,t)}async sendRequestToBaseUrl(i,e,t,r={}){return this.withTimeout((0,Vr.requestUrl)({url:`${i}${t}`,method:e,headers:r.headers,body:r.body,contentType:r.contentType,throw:!1}))}async resolveBaseUrl(i,e,t=!1){let r=Q(this.config.baseUrl);if(!r)return r;if(!t&&this.resolvedBaseUrl)return this.resolvedBaseUrl;if(!i)return r;if(!t&&this.baseUrlResolutionPromise)return await this.baseUrlResolutionPromise;let s=ot(r,i,e);t||(this.baseUrlResolutionPromise=s);try{let a=await s;return this.resolvedBaseUrl=a,a}finally{!t&&this.baseUrlResolutionPromise===s&&(this.baseUrlResolutionPromise=null)}}isMisroutedResponse(i){let e=this.getHeaderValue(i.headers,"content-type")?.toLowerCase()??"",t=i.text??"";return lt("",t,e)||e.includes("text/html")||t.trimStart().startsWith("<!DOCTYPE")||t.trimStart().startsWith("<html")}async withTimeout(i){let e=null;try{return await Promise.race([i,new Promise((t,r)=>{e=setTimeout(()=>{r(new Error("Request timeout"))},this.config.requestTimeoutMs)})])}finally{e&&clearTimeout(e)}}async parseErrorBody(i){if(!i.text||i.text.length===0)throw new Error("Empty response body");return this.parseJsonResponse(i)}parseJsonResponse(i){let e=this.getHeaderValue(i.headers,"content-type")?.toLowerCase()??"",t=i.text??"";if(lt("",t,e))throw new ee("The API endpoint appears to be pointing at a website or routed page instead of the VaultGuard REST API. Check the API endpoint in plugin settings. If you pasted a URL ending in /settings, /users, or /orgs/..., keep only the API or CloudFront base URL.",{statusCode:i.status,message:"Misrouted API request",code:"MISROUTED_API_REQUEST"});if(e.includes("text/html")||t.trimStart().startsWith("<!DOCTYPE")||t.trimStart().startsWith("<html"))throw new ee("The API endpoint returned an HTML page instead of JSON. Check that the API Endpoint in plugin settings points to the VaultGuard REST API (e.g. a CloudFront base URL like https://d1234567890.cloudfront.net or your direct API URL), not a website or admin panel URL.",{statusCode:i.status,message:"Non-JSON response from API",code:"HTML_RESPONSE"});try{return i.json}catch{throw new ee(`The API returned an unexpected response (not valid JSON). Status: ${i.status}`,{statusCode:i.status,message:"Invalid JSON in API response",code:"INVALID_JSON"})}}getResponseStatusText(i){return i.text||"Unknown error"}getHeaderValue(i,e){return Object.entries(i).find(([r])=>r.toLowerCase()===e.toLowerCase())?.[1]??null}isSuccessStatus(i){return i>=200&&i<300}calculateBackoff(i){let e=this.config.baseRetryDelayMs*Math.pow(2,i),t=this.secureRandomFraction()*e*.1;return Math.min(e+t,this.config.maxRetryDelayMs)}secureRandomFraction(){return crypto.getRandomValues(new Uint32Array(1))[0]/4294967295}sleep(i){return new Promise(e=>setTimeout(e,i))}queueRequest(i,e,t){return new Promise((r,s)=>{if(this.offlineQueue.length>=this.config.offlineQueueMaxSize){s(new Error("Offline queue is full. Please try again when connection is restored."));return}let a={id:this.generateRequestId(),method:i,path:e,body:t,resolve:r,reject:s,timestamp:Date.now(),retryCount:0};this.offlineQueue.push(a)})}getQueueSize(){return this.offlineQueue.length}async flushOfflineQueue(){let i=[...this.offlineQueue];this.offlineQueue=[];for(let e of i)try{let t=await this.request(e.method,e.path,e.body);e.resolve(t)}catch(t){if(this.connectionStatus==="offline"){this.offlineQueue.push(e,...i.slice(i.indexOf(e)+1));break}e.reject(t)}}generateRequestId(){if(typeof crypto.randomUUID=="function")return`req_${crypto.randomUUID()}`;let i=crypto.getRandomValues(new Uint8Array(16));return`req_${Array.from(i,e=>e.toString(16).padStart(2,"0")).join("")}`}},ee=class extends Error{constructor(i,e){super(i),this.name="VaultGuardError",this.apiError=e}},dt=class extends ee{constructor(i){super(i),this.name="AuthenticationError"}},Jt=class extends ee{constructor(i){super(i),this.name="AuthorizationError"}},ut=class extends ee{constructor(i,e){super(i,e),this.name="RetryableError"}},ht=class extends ee{constructor(i){super(i),this.name="RateLimitError"}},pt=class extends ee{constructor(i,e){super(i,e),this.name="ServerError"}},gt=class extends ee{constructor(i){super(i),this.name="NetworkError"}};var W=require("obsidian");var H=require("obsidian");var zi="vaultguard-fp-panel",ft=class{constructor(i){this.effectivePrincipals=[];this.effectiveAccessAvailable=!1;this.users=[];this.userMap=new Map;this.usersLoading=!1;this.usersLoadError=null;this.draftPrincipalType="user";this.draftPrincipalValue="";this.draftSelectedUserId=null;this.draftLevel="write";this.isDestroyed=!1;this.handleViewportChange=()=>this.positionPanel();this.handleKeyDown=i=>{i.key==="Escape"&&this.destroy()};this.pendingLevelPatches=new Map;this.cfg=i,this.rules=[...i.rules],this.users=re(i.initialUsers??[]),this.userMap=q(this.users),this.effectivePrincipals=this.normalizeEffectivePrincipals(i.effectivePrincipals??[]),this.effectiveAccessAvailable=i.effectiveAccessAvailable===!0,this.mergeEffectivePrincipalsIntoDirectory(),this.usersLoading=i.isAdmin,this.backdropEl=document.body.createDiv({cls:"vaultguard-fp-backdrop"}),this.backdropEl.addEventListener("click",()=>this.destroy()),this.panelEl=document.body.createDiv({cls:zi}),this.render(),this.positionPanel(),window.addEventListener("resize",this.handleViewportChange),window.addEventListener("scroll",this.handleViewportChange,!0),document.addEventListener("keydown",this.handleKeyDown),this.cfg.isAdmin&&this.loadUsers()}destroy(){this.isDestroyed||(this.isDestroyed=!0,window.removeEventListener("resize",this.handleViewportChange),window.removeEventListener("scroll",this.handleViewportChange,!0),document.removeEventListener("keydown",this.handleKeyDown),this.panelEl.remove(),this.backdropEl.remove(),this.cfg.onClose())}setRules(i){this.setData(i)}setData(i,e=this.effectivePrincipals,t=this.effectiveAccessAvailable){this.rules=[...i],this.effectivePrincipals=this.normalizeEffectivePrincipals(e),this.effectiveAccessAvailable=t,this.mergeEffectivePrincipalsIntoDirectory(),this.reconcilePendingLevelPatches(),this.render(),this.positionPanel()}render(){this.panelEl.empty();let i=this.panelEl.createDiv({cls:"vaultguard-fp-header"});i.createEl("h4",{text:this.canManageAccess()?"Manage Access":"Who Has Access"});let e=i.createEl("button",{cls:"vaultguard-icon-btn",attr:{type:"button"}});(0,H.setIcon)(e,"x"),e.addEventListener("click",()=>this.destroy()),this.panelEl.createDiv({cls:"vaultguard-fp-filepath",text:this.cfg.file.path}),this.panelEl.createEl("hr",{cls:"vaultguard-fp-divider"});let t=this.panelEl.createDiv({cls:"vaultguard-fp-list"});this.renderRuleList(t),this.canManageAccess()&&(this.panelEl.createEl("hr",{cls:"vaultguard-fp-divider"}),this.renderAddRuleSection(this.panelEl))}renderRuleList(i){if(this.effectiveAccessAvailable){this.renderEffectiveAccessList(i);return}if(this.rules.length===0){i.createDiv({cls:"vaultguard-fp-empty",text:"No permission rules for this file. Access is based on default role permissions."});return}let e=this.rawRulesForDisplay().sort((t,r)=>{let s=this.ruleLevelRank(t),a=this.ruleLevelRank(r);return s!==a?a-s:this.principalLabel(t).localeCompare(this.principalLabel(r))});for(let t of e)this.renderRuleRow(i,t)}renderEffectiveAccessList(i){if(this.effectivePrincipals.length===0){i.createDiv({cls:"vaultguard-fp-empty",text:"No visible access for this file."});return}for(let e of this.effectivePrincipals)this.renderEffectiveAccessRow(i,e)}renderEffectiveAccessRow(i,e){let t=i.createDiv({cls:"vaultguard-fp-row vaultguard-fp-row-effective"}),r=t.createDiv({cls:"vaultguard-fp-row-avatar"});e.type==="role"?(0,H.setIcon)(r,"users"):e.id==="*"?(0,H.setIcon)(r,"globe"):r.createSpan({cls:"vaultguard-fp-row-initials",text:this.effectivePrincipalInitials(e)});let s=t.createDiv({cls:"vaultguard-fp-row-info"});s.createDiv({cls:"vaultguard-fp-row-name",text:e.label}),s.createDiv({cls:"vaultguard-fp-row-meta",text:e.email||"Effective access"});let a=t.createDiv({cls:"vaultguard-fp-row-level"});if(this.canEditEffectivePrincipal(e)){let o=a.createEl("select",{cls:"vaultguard-fp-level-select"}),l=[{value:"admin",label:"Admin"},{value:"write",label:"Write"},{value:"read",label:"Read"},{value:"none",label:"No Access"}];for(let c of l){let d=o.createEl("option",{text:c.label,attr:{value:c.value}});c.value===e.level&&(d.selected=!0)}o.addEventListener("change",async()=>{Z(o,!0);try{await this.handleEffectivePrincipalLevelChange(e,o.value)}finally{this.isDestroyed||Z(o,!1)}});return}a.createSpan({cls:`vaultguard-fh-badge vaultguard-fh-badge-${e.level}`}).setText(this.formatLevel(e.level))}renderRuleRow(i,e){let t=i.createDiv({cls:"vaultguard-fp-row"}),r=t.createDiv({cls:"vaultguard-fp-row-avatar"});e.role?(0,H.setIcon)(r,"users"):e.userId==="*"?(0,H.setIcon)(r,"globe"):r.createSpan({cls:"vaultguard-fp-row-initials",text:this.userInitials(e.userId)});let s=t.createDiv({cls:"vaultguard-fp-row-info"});s.createDiv({cls:"vaultguard-fp-row-name",text:this.principalLabel(e)});let a=[];e.effect==="deny"&&a.push("Denied"),a.push(e.pathPattern),s.createDiv({cls:"vaultguard-fp-row-meta",text:a.join(" - ")});let n=t.createDiv({cls:"vaultguard-fp-row-level"});if(this.canManageAccess()){let o=n.createEl("select",{cls:"vaultguard-fp-level-select"}),l=[{value:"admin",label:"Admin"},{value:"write",label:"Write"},{value:"read",label:"Read"},{value:"none",label:"No Access"}];for(let d of l){let u=o.createEl("option",{text:d.label,attr:{value:d.value}});d.value===this.displayLevelForRule(e)&&(u.selected=!0)}o.addEventListener("change",async()=>{Z(o,!0);try{await this.handleLevelChange(e,o.value)}finally{this.isDestroyed||Z(o,!1)}});let c=n.createEl("button",{cls:"vaultguard-icon-btn vaultguard-danger",attr:{"aria-label":"Remove rule",type:"button"}});(0,H.setIcon)(c,"trash-2"),c.addEventListener("click",async()=>{$(c,!0);try{await this.handleDeleteRule(e)}finally{!this.isDestroyed&&c.isConnected&&$(c,!1)}})}else{let o=this.displayLevelForRule(e);n.createSpan({cls:`vaultguard-fh-badge vaultguard-fh-badge-${o}`}).setText(this.formatLevel(o))}}renderAddRuleSection(i){this.syncSelectedUserFromDraft();let e=i.createDiv({cls:"vaultguard-fp-add"});e.createDiv({cls:"vaultguard-fp-add-title",text:"Add access"});let t=e.createDiv({cls:"vaultguard-fp-add-form"}),r=t.createEl("select",{cls:"vaultguard-fp-add-input"});r.createEl("option",{text:"User",attr:{value:"user"}}),r.createEl("option",{text:"Role",attr:{value:"role"}}),r.value=this.draftPrincipalType;let s=t.createEl("input",{cls:"vaultguard-fp-add-input vaultguard-fp-add-principal",attr:{type:"text",placeholder:this.draftPrincipalType==="user"?"Search teammates or enter a user ID":"Role name"}});s.value=this.draftPrincipalValue;let a=t.createEl("select",{cls:"vaultguard-fp-add-input"});a.createEl("option",{text:"Read",attr:{value:"read"}}),a.createEl("option",{text:"Write",attr:{value:"write"}}),a.createEl("option",{text:"Admin",attr:{value:"admin"}}),a.createEl("option",{text:"No Access",attr:{value:"none"}}),a.value=this.draftLevel;let n=t.createEl("button",{cls:"vaultguard-fp-add-btn",attr:{type:"button"}});(0,H.setIcon)(n,"plus");let o=e.createDiv({cls:"vaultguard-access-picker"}),l=()=>{if(this.draftPrincipalType=r.value,this.draftPrincipalValue=s.value,this.draftLevel=a.value,this.syncSelectedUserFromDraft(),s.placeholder=this.draftPrincipalType==="user"?"Search teammates or enter a user ID":"Role name",o.empty(),this.draftPrincipalType!=="user"){o.createDiv({cls:"vaultguard-access-picker-note",text:"Role rules apply to everyone assigned to that role."});return}if(o.createDiv({cls:"vaultguard-access-picker-note",text:"Quick add from your team directory"}),this.usersLoading){o.createDiv({cls:"vaultguard-access-picker-state",text:"Loading teammates..."});return}if(this.usersLoadError){o.createDiv({cls:"vaultguard-access-picker-state",text:"Team directory unavailable right now. You can still type a user ID."});return}let d=this.users.filter(m=>m.status!=="revoked");if(d.length===0){o.createDiv({cls:"vaultguard-access-picker-state",text:"No teammates found yet. Invite someone from the Users tab first."});return}let u=d.filter(m=>tt(m,s.value)).slice(0,8);if(u.length===0){o.createDiv({cls:"vaultguard-access-picker-state",text:"No matching teammates."});return}let p=this.existingExactDirectUserLevels(),f=o.createDiv({cls:"vaultguard-access-picker-list"});for(let m of u){let v=p.get(m.id),A=f.createEl("button",{cls:"vaultguard-access-picker-item",attr:{type:"button"}});A.classList.toggle("is-selected",this.draftSelectedUserId===m.id),A.classList.toggle("is-disabled",!!v),A.disabled=!!v,A.createDiv({cls:"vaultguard-access-picker-avatar"}).createSpan({text:Y(m)});let I=A.createDiv({cls:"vaultguard-access-picker-body"});I.createDiv({cls:"vaultguard-access-picker-name",text:_(m)}),I.createDiv({cls:"vaultguard-access-picker-meta",text:rt(m)});let U=A.createSpan({cls:"vaultguard-access-picker-pill"});v?(U.classList.add(`vaultguard-access-picker-pill-level-${v}`),U.setText(`Has ${this.formatLevel(v)}`)):m.status!=="active"?U.setText(Ee(m.status)):U.setText(xe(m.role)),v||A.addEventListener("click",()=>{this.draftSelectedUserId=m.id,this.draftPrincipalValue=me(m),s.value=this.draftPrincipalValue,s.focus(),l()})}},c=async()=>{let d=r.value,u=s.value.trim(),p=a.value;this.draftPrincipalType=d,this.draftPrincipalValue=s.value,this.draftLevel=p,this.syncSelectedUserFromDraft();let f=d==="user"?this.resolveDraftUserId(u):u;if(!f){new H.Notice("Please enter a user ID or role name.");return}if(d==="user"&&this.existingExactDirectUserLevels().get(f)){new H.Notice(`${this.userLabel(f)} already has a direct rule for this file.`);return}$(n,!0);try{let m=this.cfg.file.path,v=m.startsWith("/")?m:`/${m}`,A=d==="user"?this.userLabel(f):f,k=d==="user"?f:"*",I=await this.cfg.apiClient.setPermissionLevel({userId:k,role:d==="role"?f:null,pathPattern:v,level:p});new H.Notice(p==="none"?`Access blocked for ${A}.`:`Access granted to ${A}.`),this.draftPrincipalValue="",this.draftSelectedUserId=null,I?.level&&d==="user"&&(this.patchEffectivePrincipalLevel(k,I.level),this.optimisticRender()),await this.cfg.onRulesChanged()}catch(m){new H.Notice(`Failed to add: ${m.message}`)}finally{!this.isDestroyed&&n.isConnected&&$(n,!1)}};r.addEventListener("change",()=>{let d=r.value;d!==this.draftPrincipalType&&(this.draftPrincipalValue="",s.value=""),d!=="user"&&(this.draftSelectedUserId=null),l()}),s.addEventListener("input",()=>{l()}),s.addEventListener("keydown",d=>{d.key==="Enter"&&(d.preventDefault(),c())}),a.addEventListener("change",()=>{this.draftLevel=a.value}),n.addEventListener("click",()=>{c()}),l()}async handleLevelChange(i,e){try{let t=i.role?"*":this.resolveCanonicalUserId(i.userId),r=await this.cfg.apiClient.setPermissionLevel({userId:t,role:i.role??null,pathPattern:this.targetRulePath(),level:e});r?.level&&!i.role&&(this.patchEffectivePrincipalLevel(t,r.level),this.optimisticRender()),new H.Notice("Permission updated."),await this.cfg.onRulesChanged()}catch(t){new H.Notice(`Failed to update: ${t.message}`)}}async handleEffectivePrincipalLevelChange(i,e){if(i.type==="user")try{let t=this.resolveCanonicalUserId(i.id),r=await this.cfg.apiClient.setPermissionLevel({userId:t,role:null,pathPattern:this.targetRulePath(),level:e});r?.level&&(this.patchEffectivePrincipalLevel(t,r.level),this.optimisticRender()),new H.Notice("Permission updated."),await this.cfg.onRulesChanged()}catch(t){new H.Notice(`Failed to update: ${t.message}`)}}optimisticRender(){this.isDestroyed||this.panelEl?.isConnected&&this.render()}patchEffectivePrincipalLevel(i,e){this.pendingLevelPatches||(this.pendingLevelPatches=new Map),this.pendingLevelPatches.set(i,e),this.reconcilePendingLevelPatches()}reconcilePendingLevelPatches(){this.pendingLevelPatches||(this.pendingLevelPatches=new Map);for(let[i,e]of[...this.pendingLevelPatches]){let t=this.effectivePrincipals.find(r=>r.type==="user"&&this.resolveCanonicalUserId(r.id)===i);t&&t.level===e&&this.pendingLevelPatches.delete(i)}if(this.pendingLevelPatches.size!==0){this.effectivePrincipals=this.effectivePrincipals.map(i=>{if(i.type!=="user")return i;let e=this.pendingLevelPatches.get(this.resolveCanonicalUserId(i.id));return e?{...i,level:e}:i});for(let[i,e]of this.pendingLevelPatches){if(e==="none")continue;this.effectivePrincipals.some(r=>r.type==="user"&&this.resolveCanonicalUserId(r.id)===i)||this.effectivePrincipals.push({id:i,label:this.userLabel(i),level:e,type:"user"})}}}async handleDeleteRule(i){try{await this.cfg.apiClient.deletePermission(i.id),new H.Notice("Permission rule removed."),await this.cfg.onRulesChanged()}catch(e){new H.Notice(`Failed to delete: ${e.message}`)}}async loadUsers(){try{let i=await this.cfg.apiClient.listUsers();if(this.isDestroyed)return;this.users=re(i),this.userMap=q(this.users),this.usersLoadError=null}catch(i){if(this.isDestroyed)return;this.usersLoadError=i.message}finally{this.usersLoading=!1,this.isDestroyed||(this.render(),this.positionPanel())}}principalLabel(i){return i.role?`Role: ${i.role}`:i.userId==="*"?"Everyone":this.userLabel(i.userId)}currentLevel(i){return i.effect==="deny"?this.deniedActionsCapLevel(i.actions):i.actions.includes("admin")?"admin":i.actions.includes("write")||i.actions.includes("delete")?"write":i.actions.includes("read")?"read":"none"}effectiveLevelForRulePrincipal(i){if(this.effectivePrincipals.length===0||i.role||i.userId==="*")return null;let e=this.resolveCanonicalUserId(i.userId),t=this.effectivePrincipals.find(r=>r.type!=="user"?!1:this.resolveCanonicalUserId(r.id)===e);return t?t.level:null}displayLevelForRule(i){let e=this.currentLevel(i);if(i.effect==="deny"||i.role||i.userId==="*"||!this.ruleTargetsCurrentPath(i))return e;let t=this.resolveCanonicalUserId(i.userId);for(let r of this.rules){if(r===i||r.role||r.userId==="*"||this.ruleTargetsCurrentPath(r)||this.resolveCanonicalUserId(r.userId)!==t)continue;let s=this.currentLevel(r);this.levelRank(s)>this.levelRank(e)&&(e=s)}return e}formatLevel(i){switch(i){case"admin":return"Admin";case"write":return"Write";case"read":return"Read";default:return"No Access"}}levelToActions(i){switch(i){case"admin":return["read","write","delete","admin","list"];case"write":return["read","write","delete","list"];case"read":return["read","list"];default:return["read","list"]}}buildLevelMutation(i,e="none"){if(i==="none")return{actions:["read","write","delete","admin","list"],effect:"deny"};let t=this.levelRank(i),r=this.levelRank(e);if(t<r){let s=[];return t<1&&s.push("read","list"),t<2&&s.push("write","delete"),t<3&&s.push("admin"),{actions:s,effect:"deny"}}return{actions:this.levelToActions(i),effect:"allow"}}ruleLevelRank(i){return i.effect==="deny"?this.levelRank(this.deniedActionsCapLevel(i.actions)):i.actions.includes("admin")?3:i.actions.includes("write")?2:i.actions.includes("read")?1:0}userLabel(i){let e=this.userMap.get(i);return e?_(e):i}existingExactDirectUserLevels(){let i=new Map;for(let e of this.rules){if(e.role||e.userId==="*"||!this.ruleTargetsCurrentPath(e))continue;let t=this.currentLevel(e),r=i.get(e.userId);(!r||this.levelRank(t)>=this.levelRank(r))&&i.set(e.userId,t)}return i}targetRulePath(){return this.cfg.file.path.startsWith("/")?this.cfg.file.path:`/${this.cfg.file.path}`}ruleTargetsCurrentPath(i){return this.normalizeRulePath(i.pathPattern)===this.normalizeRulePath(this.targetRulePath())}findExactRuleForPrincipal(i){return this.rules.find(e=>this.ruleTargetsCurrentPath(e)?i.role?e.role===i.role:!e.role&&this.resolveCanonicalUserId(e.userId)===this.resolveCanonicalUserId(i.userId):!1)??null}normalizeRulePath(i){return i.replace(/^\/+/,"").replace(/\/+$/,"")}resolveCanonicalUserId(i){return fe(this.users,i)}findExactUserRuleForCurrentPath(i){let e=this.resolveCanonicalUserId(i);return this.rules.find(t=>!t.role&&this.resolveCanonicalUserId(t.userId)===e&&this.ruleTargetsCurrentPath(t))??null}rawRulesForDisplay(){let i=new Set;for(let e of this.rules)e.role||e.userId==="*"||!this.ruleTargetsCurrentPath(e)||i.add(this.resolveCanonicalUserId(e.userId));return i.size===0?[...this.rules]:this.rules.filter(e=>e.role||e.userId==="*"||this.ruleTargetsCurrentPath(e)?!0:!i.has(this.resolveCanonicalUserId(e.userId)))}syncSelectedUserFromDraft(){if(this.draftPrincipalType!=="user"){this.draftSelectedUserId=null;return}let i=this.draftSelectedUserId?this.userMap.get(this.draftSelectedUserId)??null:null;i&&this.normalizeValue(this.draftPrincipalValue)===this.normalizeValue(me(i))||(this.draftSelectedUserId=Oe(this.users,this.draftPrincipalValue)?.id??null)}resolveDraftUserId(i){let e=this.draftSelectedUserId?this.userMap.get(this.draftSelectedUserId)??null:null;return e&&this.normalizeValue(i)===this.normalizeValue(me(e))?e.id:fe(this.users,i)}normalizeValue(i){return i.trim().toLowerCase()}levelRank(i){switch(i){case"admin":return 3;case"write":return 2;case"read":return 1;default:return 0}}deniedActionsCapLevel(i){return i.includes("read")||i.includes("list")?"none":i.includes("write")||i.includes("delete")?"read":i.includes("admin")?"write":"none"}initials(i){return i==="*"?"*":et(i)}userInitials(i){if(i==="*")return"*";let e=this.userMap.get(i);return e?Y(e):this.initials(i)}normalizeEffectivePrincipals(i){let e=new Map;for(let t of i){let r=t.type==="user"?this.resolveCanonicalUserId(t.id):t.id,s=t.email?.trim().toLowerCase(),a=t.type==="user"?`user:${s||r}`:`role:${r}`,n={...t,id:r},o=e.get(a);(!o||this.levelRank(n.level)>this.levelRank(o.level))&&e.set(a,n)}return[...e.values()].sort((t,r)=>{let s=this.levelRank(r.level)-this.levelRank(t.level);return s!==0?s:t.label.localeCompare(r.label)})}mergeEffectivePrincipalsIntoDirectory(){let i=new Set(this.users.map(t=>t.id)),e=[];for(let t of this.effectivePrincipals)t.type!=="user"||t.id==="*"||i.has(t.id)||!t.label&&!t.email||(e.push({id:t.id,email:t.email??"",displayName:t.label,name:t.label,role:"viewer",status:"active",lastActive:"",createdAt:"",mfaEnabled:!1,deviceCount:0,type:"user"}),i.add(t.id));e.length!==0&&(this.users=re([...this.users,...e]),this.userMap=q(this.users))}effectivePrincipalInitials(i){if(i.id==="*")return"*";let e=this.userMap.get(i.id)||(i.email?this.userMap.get(i.email)??this.userMap.get(i.email.toLowerCase()):void 0);return e?Y(e):this.initials(i.label||i.email||i.id)}canManageAccess(){return this.cfg.canManageAccess??this.cfg.isAdmin}canEditEffectivePrincipal(i){return!(!this.canManageAccess()||i.type!=="user"||this.isCurrentUserPrincipal(i)||!this.cfg.allowAdminPerFileRestrictions&&i.vaultRole==="admin")}isCurrentUserPrincipal(i){if(i.type!=="user")return!1;let e=this.resolveCanonicalUserId(this.cfg.currentUserId),t=this.resolveCanonicalUserId(i.id),r=this.cfg.currentUserEmail?.trim().toLowerCase()??"",s=i.email?.trim().toLowerCase()??"";return i.id===this.cfg.currentUserId||t===e||r.length>0&&s===r}positionPanel(){if(!this.cfg.anchorEl.isConnected){this.destroy();return}let i=12,e=8,t=this.cfg.anchorEl.getBoundingClientRect(),r=Math.max(280,window.innerWidth-i*2),s=Math.min(380,r);this.panelEl.style.width=`${s}px`;let a=this.panelEl.offsetHeight||420,n=t.bottom+e,o=window.innerHeight-n-i,l=n;o<Math.min(a,220)&&(l=Math.max(i,t.top-a-e));let c=Math.max(i,Math.min(t.right-s,window.innerWidth-s-i)),d=Math.max(220,window.innerHeight-l-i);this.panelEl.style.top=`${l}px`,this.panelEl.style.left=`${c}px`,this.panelEl.style.maxHeight=`${d}px`}};var Br="vaultguard-file-header",mt=class{constructor(i){this.activeHeader=null;this.activePanel=null;this.activePopover=null;this.activePath=null;this.ruleCache=new Map;this.CACHE_TTL_MS=6e4;this.users=[];this.userMap=new Map;this.usersLoaded=!1;this.usersLoadPromise=null;this.vaultMembers=[];this.vaultMembersLoaded=!1;this.vaultMembersLoadPromise=null;this.pendingLevelPatches=new Map;this.ctx=i}async update(i={}){let e=this.ctx.app.workspace.getActiveViewOfType(W.MarkdownView);if(!e||!e.file){this.remove();return}let t=e.file,r=e.containerEl.querySelector(".view-content");if(!r)return;let s=this.activeHeader?.isConnected&&this.activeHeader.parentElement===r&&this.activePath===t.path,a=this.activeHeader;(!s||!a)&&(this.remove(),this.removeFromContainer(r),a=createDiv({cls:Br}),r.insertBefore(a,r.firstChild),this.activeHeader=a,this.activePath=t.path),!this.usersLoaded&&!this.usersLoadPromise&&(this.usersLoadPromise=this.loadUsers()),!this.vaultMembersLoaded&&!this.vaultMembersLoadPromise&&(this.vaultMembersLoadPromise=this.loadVaultMembers());let n=this.ruleCache.get(t.path),o=!!(n?.rules&&this.ctx.getPermissionLevel);if(n?.rules&&!o?(this.renderHeader(a,t,n.rules,this.optionsFromData(n)),this.updateActivePanel(n.rules,this.optionsFromData(n))):this.renderSkeleton(a,t),!(i.force===!0||!n?.rules||this.isCacheStale(n)||!!(n?.rules&&this.ctx.getPermissionLevel)))return;let c=!!n?.rules;c&&this.setRefreshing(a,!0);try{let d=await this.fetchHeaderDataForPath(t.path,i.force===!0);if(!a.isConnected||this.activeHeader!==a||this.activePath!==t.path)return;this.renderHeader(a,t,d.rules,this.optionsFromData(d)),this.updateActivePanel(d.rules,this.optionsFromData(d))}catch{if(!a.isConnected||this.activeHeader!==a||this.activePath!==t.path)return;let d=await this.fetchCurrentUserLevel(t.path);if(!a.isConnected||this.activeHeader!==a||this.activePath!==t.path)return;this.renderHeader(a,t,[],{includeVaultMemberDefaults:!1,currentUserLevel:d}),this.updateActivePanel([],{includeVaultMemberDefaults:!1,currentUserLevel:d})}finally{c&&a.isConnected&&this.setRefreshing(a,!1)}}setRefreshing(i,e){let t=i.querySelector(".vaultguard-fh-refresh-indicator");if(e){if(t)return;let r=i.createSpan({cls:"vaultguard-fh-refresh-indicator vaultguard-sb-spinner",attr:{"aria-label":"Refreshing permissions"}});(0,W.setIcon)(r,"loader")}else t&&t.remove()}remove(){this.activeHeader?.isConnected&&this.activeHeader.remove(),this.activeHeader=null,this.activePath=null,this.closePanel(),this.closePopover()}invalidateCache(i){if(i){this.ruleCache.delete(i);return}this.invalidateDirectoryCache(),this.ruleCache.clear()}setContext(i){i.currentUserId!==void 0&&(this.ctx.currentUserId=i.currentUserId),i.currentUserEmail!==void 0&&(this.ctx.currentUserEmail=i.currentUserEmail),i.currentUserRole!==void 0&&(this.ctx.currentUserRole=i.currentUserRole),i.isAdmin!==void 0&&(this.ctx.isAdmin=i.isAdmin),i.allowAdminPerFileRestrictions!==void 0&&(this.ctx.allowAdminPerFileRestrictions=i.allowAdminPerFileRestrictions),this.ruleCache.clear(),this.vaultMembers=[],this.vaultMembersLoaded=!1,this.vaultMembersLoadPromise=null,this.closePanel(),this.closePopover()}destroy(){this.remove(),this.ruleCache.clear()}removeFromContainer(i){let e=i.querySelector(`.${Br}`);e&&e.remove(),this.closePanel(),this.closePopover()}closePanel(){this.activePanel&&(this.activePanel.destroy(),this.activePanel=null)}closePopover(){this.activePopover&&(this.activePopover.remove(),this.activePopover=null)}invalidateDirectoryCache(){this.users=[],this.userMap=new Map,this.usersLoaded=!1,this.usersLoadPromise=null,this.vaultMembers=[],this.vaultMembersLoaded=!1,this.vaultMembersLoadPromise=null}async loadUsers(){try{let i=await this.ctx.apiClient.listUsers();if(this.users=re(i),this.userMap=q(this.users),this.usersLoaded=!0,this.activeHeader?.isConnected&&this.activePath){let e=this.ruleCache.get(this.activePath);if(e?.rules){let t=this.ctx.app.workspace.getActiveViewOfType(W.MarkdownView);t?.file?.path===this.activePath&&this.renderHeader(this.activeHeader,t.file,e.rules,this.optionsFromData(e))}}}catch{}finally{this.usersLoadPromise=null}}async loadVaultMembers(){let i=this.ctx.apiClient.getVaultId();if(!i){this.vaultMembers=[],this.vaultMembersLoaded=!0,this.vaultMembersLoadPromise=null;return}try{if(this.vaultMembers=await this.ctx.apiClient.listVaultMembers(i),this.vaultMembersLoaded=!0,this.mergeVaultMembersIntoDirectory(),this.activeHeader?.isConnected&&this.activePath){let e=this.ruleCache.get(this.activePath);if(e?.rules){let t=this.ctx.app.workspace.getActiveViewOfType(W.MarkdownView);t?.file?.path===this.activePath&&this.renderHeader(this.activeHeader,t.file,e.rules,this.optionsFromData(e))}}}catch{this.vaultMembers=[],this.vaultMembersLoaded=!1}finally{this.vaultMembersLoadPromise=null}}mergeVaultMembersIntoDirectory(){if(this.vaultMembers.length===0)return;let i=new Set(this.users.map(t=>t.id)),e=[];for(let t of this.vaultMembers)i.has(t.userId)||!t.displayName&&!t.email||(e.push({id:t.userId,email:t.email??"",displayName:t.displayName??"",name:t.displayName??"",role:this.mapVaultRoleToUserRole(t.role),status:"active",lastActive:"",createdAt:t.joinedAt,mfaEnabled:!1,deviceCount:0,type:"user"}),i.add(t.userId));e.length!==0&&(this.users=re([...this.users,...e]),this.userMap=q(this.users))}mapVaultRoleToUserRole(i){switch(i){case"admin":return"admin";case"editor":return"editor";default:return"viewer"}}async loadVaultMembersIfNeeded(){if(!this.vaultMembersLoaded){if(this.vaultMembersLoadPromise){await this.vaultMembersLoadPromise;return}this.vaultMembersLoadPromise=this.loadVaultMembers(),await this.vaultMembersLoadPromise}}resolveUserLabel(i){if(i==="*")return"Everyone";let e=this.userMap.get(i);return e?_(e):i}resolveUserInitials(i){if(i==="*")return"*";let e=this.userMap.get(i);return e?Y(e):this.initials(i)}async fetchRulesForPath(i,e=!1){return(await this.fetchHeaderDataForPath(i,e)).rules}async fetchHeaderDataForPath(i,e=!1){let t=this.ruleCache.get(i);if(!e&&t?.rules&&t.access!==void 0&&t.currentUserLevel!==void 0&&!this.isCacheStale(t)){let n=await this.fetchCurrentUserLevel(i),o=n==="unknown"?t.currentUserLevel:n,l=this.combineCurrentUserLevel(t.access,o);return l!==t.currentUserLevel&&this.ruleCache.set(i,{...t,currentUserLevel:l}),{rules:t.rules,rulesAvailable:t.rulesAvailable===!0,access:t.access??null,currentUserLevel:l}}if(t?.inFlight)return t.inFlight;let r=this.fetchPathAccessForHeader(i),s=this.fetchCurrentUserLevel(i),a=Promise.all([r,s,this.loadVaultMembersIfNeeded()]).then(async([n,o])=>{let l=this.combineCurrentUserLevel(n,o),c=await this.fetchEditableRulesForPath(i,l),d=c.rules.filter(p=>this.ruleMatchesPath(p.pathPattern,i));n&&this.mergePathAccessIntoDirectory(n.principals);let u=n&&this.applyPendingPatchesToAccess(n);return this.ruleCache.set(i,{rules:d,rulesAvailable:c.rulesAvailable,access:u,currentUserLevel:l,fetchedAt:Date.now()}),{rules:d,rulesAvailable:c.rulesAvailable,access:u,currentUserLevel:l}}).catch(n=>{let o=this.ruleCache.get(i)??t;if(o?.rules)return{rules:o.rules,rulesAvailable:o.rulesAvailable===!0,access:o.access??null,currentUserLevel:o.currentUserLevel??"unknown"};throw n}).finally(()=>{let n=this.ruleCache.get(i);n?.inFlight===a&&(n.rules?this.ruleCache.set(i,{rules:n.rules,rulesAvailable:n.rulesAvailable,access:n.access,currentUserLevel:n.currentUserLevel,fetchedAt:n.fetchedAt}):t?.rules?this.ruleCache.set(i,{rules:t.rules,rulesAvailable:t.rulesAvailable,access:t.access,currentUserLevel:t.currentUserLevel,fetchedAt:t.fetchedAt}):this.ruleCache.delete(i))});return this.ruleCache.set(i,{rules:t?.rules,rulesAvailable:t?.rulesAvailable,access:t?.access,currentUserLevel:t?.currentUserLevel,fetchedAt:t?.fetchedAt??0,inFlight:a}),a}async fetchEditableRulesForPath(i,e){if(!this.ctx.isAdmin&&e!=="admin")return{rules:[],rulesAvailable:!1};try{return{rules:this.ctx.isAdmin?await this.ctx.apiClient.getPermissions():await this.ctx.apiClient.getPermissions(i),rulesAvailable:!0}}catch{return{rules:[],rulesAvailable:!1}}}mergePathAccessIntoDirectory(i){if(i.length===0)return;let e=new Set(this.users.map(r=>r.id)),t=[];for(let r of i)e.has(r.userId)||!r.displayName&&!r.email||(t.push({id:r.userId,email:r.email??"",displayName:r.displayName??"",name:r.displayName??"",role:this.mapVaultRoleToUserRole(r.role??"viewer"),status:"active",lastActive:"",createdAt:"",mfaEnabled:!1,deviceCount:0,type:"user"}),e.add(r.userId));t.length!==0&&(this.users=re([...this.users,...t]),this.userMap=q(this.users))}optionsFromAccess(i){return i?{currentUserLevel:i.currentUserLevel,accessPrincipals:this.pathAccessToPrincipals(i.principals)}:{}}optionsFromData(i){let e=this.optionsFromAccess(i.access);return i.currentUserLevel!==void 0&&i.currentUserLevel!=="unknown"&&(e.currentUserLevel=i.currentUserLevel,e.accessPrincipals=this.withCurrentUserPrincipalLevel(e.accessPrincipals,i.currentUserLevel)),e}combineCurrentUserLevel(i,e){if(e==="none")return"none";let t=i?.currentUserLevel;return t&&(e==="unknown"||this.levelRank(t)>this.levelRank(e))?t:e}withCurrentUserPrincipalLevel(i,e){if(!i||e==="unknown")return i;let t=this.resolveCanonicalUserId(this.ctx.currentUserId),r=this.ctx.currentUserEmail?.trim().toLowerCase()??"",s=!1,a=i.map(n=>{if(n.type!=="user")return n;let o=this.resolveCanonicalUserId(n.id),l=n.email?.trim().toLowerCase()??"";return n.id===this.ctx.currentUserId||o===t||r.length>0&&l===r?(s=!0,{...n,id:t||o,level:e}):n});return!s&&e!=="none"&&a.push({id:t,label:this.resolveUserLabel(t),level:e,type:"user"}),a.sort((n,o)=>{let l=this.levelRank(o.level)-this.levelRank(n.level);return l!==0?l:n.label.localeCompare(o.label)})}async fetchPathAccessForHeader(i){try{if(typeof this.ctx.apiClient.getBatchPathAccess=="function"){let e=await this.ctx.apiClient.getBatchPathAccess([i]),t=this.normalizeAccessPath(i),r=e.find(s=>this.normalizeAccessPath(s.path)===t);if(r)return r}}catch{}try{return await this.ctx.apiClient.getPathAccess(i)}catch{return null}}normalizeAccessPath(i){let e=i.trim().replace(/\/+/g,"/");return e.startsWith("/")?e:`/${e}`}pathAccessToPrincipals(i){return i.map(e=>{let t=e.displayName||e.email||this.resolveUserLabel(e.userId),r=e.role?.toLowerCase(),s=r==="admin"||r==="editor"||r==="viewer"?r:void 0;return{id:e.userId,email:e.email,label:t,level:e.level,type:"user",...s?{vaultRole:s}:{}}}).sort((e,t)=>{let r=this.levelRank(t.level)-this.levelRank(e.level);return r!==0?r:e.label.localeCompare(t.label)})}isCacheStale(i){return Date.now()-i.fetchedAt>=this.CACHE_TTL_MS}renderSkeleton(i,e){i.empty(),i.dataset.vaultguardCurrentUserLevel="loading";let t=i.createDiv({cls:"vaultguard-fh-inner"});t.createDiv({cls:"vaultguard-fh-level"}).createSpan({cls:"vaultguard-fh-badge vaultguard-fh-badge-loading"}).createSpan({cls:"vaultguard-fh-shimmer"}).setText("Loading...");let o=t.createDiv({cls:"vaultguard-fh-access"}).createDiv({cls:"vaultguard-fh-avatar-group"});for(let l=0;l<3;l++)o.createDiv({cls:"vaultguard-fh-chip-skeleton"})}renderHeader(i,e,t,r={}){i.empty();let s=i.createDiv({cls:"vaultguard-fh-inner"}),a=this.resolveMyLevel(e.path,t,r);i.dataset.vaultguardCurrentUserLevel=a;let n=s.createDiv({cls:"vaultguard-fh-level"}),o=n.createSpan({cls:"vaultguard-fh-lock-icon"});(0,W.setIcon)(o,this.iconForLevel(a)),n.createSpan({cls:`vaultguard-fh-badge vaultguard-fh-badge-${a}`}).setText(this.formatLevel(a)),s.createDiv({cls:"vaultguard-fh-separator"});let c=s.createDiv({cls:"vaultguard-fh-access"});this.renderAccessList(c,e,t,r);let d=s.createDiv({cls:"vaultguard-fh-actions"});if(this.canManageFile(e,t,r)){let u=d.createEl("button",{cls:"vaultguard-fh-btn vaultguard-fh-btn-manage"}),p=u.createSpan({cls:"vaultguard-fh-btn-icon"});(0,W.setIcon)(p,"settings"),u.createSpan({text:"Manage"}),u.addEventListener("click",f=>{f.stopPropagation(),this.closePopover(),this.togglePanel(i,e,t,r)})}else{let u=d.createEl("button",{cls:"vaultguard-fh-btn vaultguard-fh-btn-view"}),p=u.createSpan({cls:"vaultguard-fh-btn-icon"});(0,W.setIcon)(p,"info"),u.createSpan({text:"Details"}),u.addEventListener("click",f=>{f.stopPropagation(),this.closePopover(),this.togglePanel(i,e,t,r)})}}visibleAccessPrincipals(i,e={}){let t=e.accessPrincipals??this.buildVisibleAccessPrincipals(i,e);return e.currentUserLevel&&e.currentUserLevel!=="unknown"?this.withCurrentUserPrincipalLevel(t,e.currentUserLevel)??t:t}renderAccessList(i,e,t,r={}){let s=this.visibleAccessPrincipals(t,r),a=4,n=s.slice(0,a),o=s.length-a;if(s.length===0){i.createSpan({cls:"vaultguard-fh-no-access",text:r.includeVaultMemberDefaults===!1?"Access details unavailable":"No visible access"});return}let l=i.createDiv({cls:"vaultguard-fh-shared-count"}),c=l.createSpan({cls:"vaultguard-fh-shared-count-icon"});(0,W.setIcon)(c,"users"),l.createSpan({text:`${s.length}`});let d=i.createDiv({cls:"vaultguard-fh-avatar-group"});for(let u of n){let p=d.createDiv({cls:`vaultguard-fh-chip vaultguard-fh-chip-${u.level}`,attr:{"aria-label":`${u.label} (${this.formatLevel(u.level)})`}});if(u.type==="user"&&u.id!=="*"&&p.classList.add("vaultguard-fh-chip-clickable"),u.type==="role"){let m=p.createSpan({cls:"vaultguard-fh-chip-icon"});(0,W.setIcon)(m,"users")}else if(u.id==="*"){let m=p.createSpan({cls:"vaultguard-fh-chip-icon"});(0,W.setIcon)(m,"globe")}else p.createSpan({cls:`vaultguard-fh-chip-initials vaultguard-fh-initials-${u.level}`,text:this.resolveUserInitials(u.id)}).setAttribute("aria-label",u.label);p.createSpan({cls:"vaultguard-fh-chip-label",text:u.label}),p.createSpan({cls:`vaultguard-fh-chip-level vaultguard-fh-dot-${u.level}`}).setText(this.formatLevel(u.level)),u.type==="user"&&u.id!=="*"&&p.addEventListener("click",m=>{m.stopPropagation(),this.showUserPopover(p,u.id,u.level,e,t,r)})}if(o>0){let u=d.createSpan({cls:"vaultguard-fh-overflow",text:`+${o}`});u.setAttribute("aria-label",`${o} more people have access`),u.addEventListener("click",p=>{p.stopPropagation(),this.closePopover();let f=this.ruleCache.get(e.path);this.togglePanel(this.activeHeader,e,t,this.optionsFromData(f??{}))})}}showUserPopover(i,e,t,r,s,a={}){if(this.activePopover){this.closePopover();return}let n=this.userMap.get(e),o=document.body.createDiv({cls:"vaultguard-fh-popover"});this.activePopover=o;let l=document.body.createDiv({cls:"vaultguard-fh-popover-backdrop"});l.addEventListener("click",()=>this.closePopover());let c=o.createDiv({cls:"vaultguard-fh-popover-inner"}),d=c.createDiv({cls:"vaultguard-fh-popover-header"});d.createDiv({cls:`vaultguard-fh-popover-avatar vaultguard-fh-initials-${t}`}).setText(this.resolveUserInitials(e));let p=d.createDiv({cls:"vaultguard-fh-popover-name-col"});p.createDiv({cls:"vaultguard-fh-popover-name",text:this.resolveUserLabel(e)}),n?p.createDiv({cls:"vaultguard-fh-popover-email",text:n.email}):p.createDiv({cls:"vaultguard-fh-popover-email",text:e});let f=c.createDiv({cls:"vaultguard-fh-popover-info"}),m=f.createDiv({cls:"vaultguard-fh-popover-row"});m.createSpan({cls:"vaultguard-fh-popover-label",text:"Access"});let v=this.findExactUserRuleForFile(s,e,r);if(this.canEditUserRow(e,r,s,a)){let I=m.createEl("select",{cls:"vaultguard-fh-popover-level-select"}),U=[{value:"admin",label:"Admin"},{value:"write",label:"Write"},{value:"read",label:"Read"},{value:"none",label:"No Access"}];for(let P of U){let g=I.createEl("option",{text:P.label,attr:{value:P.value}});P.value===t&&(g.selected=!0)}let V=m.createSpan({cls:"vaultguard-sb-spinner vaultguard-fh-popover-spinner"});V.style.display="none",(0,W.setIcon)(V,"loader"),I.addEventListener("change",async()=>{let P=I.value;Z(I,!0),V.style.display="";try{let g=await this.upsertUserFileAccess(r,e,P,v,t);this.closePopover(),g&&this.patchCachedPrincipalLevel(r.path,g.canonicalUserId,g.effectiveLevel),await this.update({force:!0}),await this.ctx.onRulesChanged?.(r.path)}catch(g){let w=g?.message??"unknown error";new W.Notice(`Failed to update permission: ${w}`),console.error(`[VaultGuard] upsertUserFileAccess(${e} \u2192 ${P}) on ${r.path}`,g),Z(I,!1),V.style.display="none"}})}else m.createSpan({cls:`vaultguard-fh-badge vaultguard-fh-badge-${t}`}).setText(this.formatLevel(t));if(n){let I=f.createDiv({cls:"vaultguard-fh-popover-row"});I.createSpan({cls:"vaultguard-fh-popover-label",text:"Role"}),I.createSpan({cls:"vaultguard-fh-popover-value",text:xe(n.role)});let U=f.createDiv({cls:"vaultguard-fh-popover-row"});U.createSpan({cls:"vaultguard-fh-popover-label",text:"Status"}),U.createSpan({cls:`vaultguard-fh-popover-status vaultguard-fh-popover-status-${n.status}`}).setText(Ee(n.status))}if(this.ctx.isAdmin){let I=c.createDiv({cls:"vaultguard-fh-popover-actions"}),U=I.createEl("button",{cls:"vaultguard-fh-popover-btn",attr:{type:"button"}}),V=U.createSpan({cls:"vaultguard-fh-btn-icon"});(0,W.setIcon)(V,"pencil"),U.createSpan({text:"Edit Name"});let P=I.createDiv({cls:"vaultguard-fh-popover-edit-form"});P.style.display="none";let g=P.createEl("input",{cls:"vaultguard-fh-popover-edit-input",attr:{type:"text",placeholder:"First Last",value:n?_(n):""}}),w=P.createEl("button",{cls:"vaultguard-fh-popover-edit-save",text:"Save",attr:{type:"button"}});U.addEventListener("click",R=>{R.stopPropagation();let S=P.style.display!=="none";P.style.display=S?"none":"flex",S||(g.focus(),g.select())});let y=async()=>{let R=g.value.trim();if(R){$(w,!0,{label:"Saving"});try{await this.ctx.apiClient.updateUserProfile(e,{displayName:R}),this.usersLoaded=!1,this.usersLoadPromise=this.loadUsers(),this.closePopover(),this.invalidateCache(),await this.update({force:!0})}catch{$(w,!1),w.textContent="Failed",setTimeout(()=>{w.textContent="Save",w.disabled=!1},1500)}}};w.addEventListener("click",R=>{R.stopPropagation(),y()}),g.addEventListener("keydown",R=>{R.key==="Enter"&&(R.preventDefault(),y())});let x=I.createEl("button",{cls:"vaultguard-fh-popover-btn",attr:{type:"button"}}),E=x.createSpan({cls:"vaultguard-fh-btn-icon"});(0,W.setIcon)(E,"settings"),x.createSpan({text:"Manage Permissions"}),x.addEventListener("click",R=>{if(R.stopPropagation(),this.closePopover(),!this.activePanel){let S=this.ruleCache.get(r.path);this.togglePanel(this.activeHeader,r,s,this.optionsFromData(S??{}))}})}this.positionPopover(o,i),o.dataset.backdropId="active";let A=this.activePopover.previousElementSibling,k=this.closePopover.bind(this);this.closePopover=()=>{l.remove(),this.closePopover=k,k()}}positionPopover(i,e){let t=e.getBoundingClientRect(),r=6,s=260,a=t.bottom+r,n=t.left+t.width/2-s/2;n=Math.max(8,Math.min(n,window.innerWidth-s-8)),a+200>window.innerHeight&&(a=t.top-r-200),i.style.top=`${a}px`,i.style.left=`${n}px`,i.style.width=`${s}px`}togglePanel(i,e,t,r={}){if(this.activePanel){this.closePanel();return}let s=this.panelEffectiveAccess(t,r);this.activePanel=new ft({app:this.ctx.app,apiClient:this.ctx.apiClient,file:e,rules:t,effectivePrincipals:s.principals,effectiveAccessAvailable:s.available,canManageAccess:this.canManageFile(e,t,r),isAdmin:this.ctx.isAdmin,currentUserId:this.ctx.currentUserId,currentUserEmail:this.ctx.currentUserEmail,allowAdminPerFileRestrictions:this.ctx.allowAdminPerFileRestrictions===!0,anchorEl:i,initialUsers:this.users,onRulesChanged:async()=>{this.invalidateCache(e.path),await this.update({force:!0}),await this.ctx.onRulesChanged?.(e.path)},onClose:()=>{this.activePanel=null}})}updateActivePanel(i,e){if(!this.activePanel)return;let t=this.panelEffectiveAccess(i,e);this.activePanel.setData(i,t.principals,t.available)}panelEffectiveAccess(i,e={}){let t=e.accessPrincipals!==void 0;return{principals:t?this.visibleAccessPrincipals(i,e).map(r=>({id:r.id,email:r.email,label:r.label,level:r.level,type:r.type,...r.vaultRole?{vaultRole:r.vaultRole}:{}})):[],available:t}}async upsertUserFileAccess(i,e,t,r,s){await this.ensureUsersLoaded();let a=this.resolveCanonicalUserId(e);return t==="unknown"?null:{effectiveLevel:(await this.ctx.apiClient.setPermissionLevel({userId:a,role:null,pathPattern:this.fileRulePath(i),level:t}))?.level??t,canonicalUserId:a}}patchCachedPrincipalLevel(i,e,t){if(t==="unknown")return;this.pendingLevelPatches||(this.pendingLevelPatches=new Map);let r=this.resolveCanonicalUserId(e),s=this.pendingLevelPatches.get(i);s||(s=new Map,this.pendingLevelPatches.set(i,s)),s.set(r,t);let a=this.ruleCache.get(i);if(!a?.access)return;let n=this.applyPendingPatchesToAccess(a.access,i);this.ruleCache.set(i,{...a,access:n})}applyPendingPatchesToAccess(i,e=null){this.pendingLevelPatches||(this.pendingLevelPatches=new Map);let t=e??i.path,r=this.pendingLevelPatches.get(t);if(!r||r.size===0)return i;for(let[a,n]of[...r]){let o=i.principals.find(l=>this.resolveCanonicalUserId(l.userId)===a);o&&o.level===n&&r.delete(a)}if(r.size===0)return this.pendingLevelPatches.delete(t),i;let s=i.principals.map(a=>{let n=r.get(this.resolveCanonicalUserId(a.userId));return n?{...a,level:n}:a});for(let[a,n]of r){if(n==="none")continue;s.some(l=>this.resolveCanonicalUserId(l.userId)===a)||s.push({userId:a,level:n})}return{...i,principals:s}}buildLevelMutation(i,e="none"){if(i==="none")return{actions:["read","write","delete","admin","list"],effect:"deny"};let t=this.levelRank(i),r=this.levelRank(e);if(t<r){let s=[];return t<1&&s.push("read","list"),t<2&&s.push("write","delete"),t<3&&s.push("admin"),{actions:s,effect:"deny"}}return{actions:this.levelToActions(i),effect:"allow"}}resolvePrincipalLevelForFile(i,e,t){let r=this.ruleCache.get(e.path),s=r?this.optionsFromData(r):{};return this.visibleAccessPrincipals(t,s).find(a=>a.type==="user"&&this.resolveCanonicalUserId(a.id)===this.resolveCanonicalUserId(i))?.level??"none"}findExactUserRuleForFile(i,e,t){let r=this.normalizeRulePath(this.fileRulePath(t)),s=this.resolveCanonicalUserId(e);return i.find(a=>!a.role&&this.resolveCanonicalUserId(a.userId)===s&&this.normalizeRulePath(a.pathPattern)===r)??null}fileRulePath(i){return i.path.startsWith("/")?i.path:`/${i.path}`}normalizeRulePath(i){return i.replace(/^\/+/,"").replace(/\/+$/,"")}async ensureUsersLoaded(){if(!this.usersLoaded){if(this.usersLoadPromise){await this.usersLoadPromise;return}this.usersLoadPromise=this.loadUsers(),await this.usersLoadPromise}}resolveCanonicalUserId(i){let e=i.trim(),t=fe(this.users,e);if(t!==e)return t;let r=e.toLowerCase();return this.vaultMembers.find(a=>a.userId.toLowerCase()===r||a.email?.trim().toLowerCase()===r)?.userId??e}async fetchCurrentUserLevel(i){if(!this.ctx.getPermissionLevel)return"unknown";try{return this.permissionLevelToAccessLevel(await this.ctx.getPermissionLevel(i))}catch{return"unknown"}}permissionLevelToAccessLevel(i){return i>=3?"admin":i>=2?"write":i>=1?"read":"none"}buildVisibleAccessPrincipals(i,e={}){let t=new Map,r=e.includeVaultMemberDefaults!==!1,s=(n,o,l,c)=>{let d=this.resolveCanonicalUserId(n),u=`user:${d}`,p=t.get(u);this.shouldReplacePrincipalAccess(p,o,l,c)&&t.set(u,{id:d,label:this.resolveUserLabel(d),level:o,type:"user",specificity:l,denied:c})},a=(n,o,l,c)=>{let d=`role:${n}`,u=t.get(d);this.shouldReplacePrincipalAccess(u,o,l,c)&&t.set(d,{id:n,label:n,level:o,type:"role",specificity:l,denied:c})};if(r)for(let n of this.vaultMembers){let o=this.levelForVaultMemberRole(n.role);o!=="none"&&s(this.resolveCanonicalUserId(n.userId),o,Number.NEGATIVE_INFINITY,!1)}for(let n of i){let o=this.ruleAccessLevel(n),l=this.patternSpecificity(n.pathPattern),c=n.effect==="deny";if(n.role){let d=this.vaultMembers.filter(u=>u.role===n.role);if(d.length>0)for(let u of d)s(u.userId,o,l,c);else a(n.role,o,l,c);continue}if(n.userId==="*"&&this.vaultMembers.length>0){for(let d of this.vaultMembers)s(d.userId,o,l,c);continue}s(this.resolveCanonicalUserId(n.userId),o,l,c)}return[...t.values()].sort((n,o)=>{let l=this.levelRank(o.level)-this.levelRank(n.level);return l!==0?l:n.label.localeCompare(o.label)})}shouldReplacePrincipalAccess(i,e,t,r){return!i||t>i.specificity?!0:t<i.specificity?!1:r&&!i.denied?!0:!r&&i.denied?!1:this.levelRank(e)>this.levelRank(i.level)}levelForVaultMemberRole(i){switch(i){case"admin":return"admin";case"editor":return"write";default:return"read"}}canManageFile(i,e,t={}){return this.resolveMyLevel(i.path,e,t)==="admin"}canEditUserRow(i,e,t,r={}){return i===this.ctx.currentUserId||!this.ctx.allowAdminPerFileRestrictions&&this.isTargetVaultAdminOrOwner(i,r)?!1:this.ctx.isAdmin?!0:this.canManageFile(e,t,r)}isTargetVaultAdminOrOwner(i,e={}){let t=this.resolveCanonicalUserId(i);return e.accessPrincipals?.find(a=>a.type==="user"&&this.resolveCanonicalUserId(a.id)===t)?.vaultRole==="admin"?!0:this.vaultMembers.find(a=>this.resolveCanonicalUserId(a.userId)===t)?.role==="admin"}resolveMyLevel(i,e,t={}){if(t.currentUserLevel)return t.currentUserLevel;if(this.ctx.currentUserRole==="admin"||this.ctx.currentUserRole==="owner")return"admin";let r=this.levelForCurrentVaultMember(),s=Number.NEGATIVE_INFINITY;for(let a of e){if(!(a.userId===this.ctx.currentUserId||a.userId==="*"||a.role&&this.ctx.currentUserRole===a.role))continue;let o=this.patternSpecificity(a.pathPattern);if(o>s)s=o,r=this.ruleAccessLevel(a);else if(o===s){let l=this.ruleAccessLevel(a);this.levelRank(l)>this.levelRank(r)&&(r=l)}}return s===Number.NEGATIVE_INFINITY,r}levelForCurrentVaultMember(){let i=this.vaultMembers.find(e=>e.userId===this.ctx.currentUserId);return i?this.levelForVaultMemberRole(i.role):this.ctx.currentUserRole==="editor"?"write":"read"}ruleLevelString(i){return i.actions.includes("admin")?"admin":i.actions.includes("write")||i.actions.includes("delete")?"write":i.actions.includes("read")?"read":"none"}ruleAccessLevel(i){return i.effect!=="deny"?this.ruleLevelString(i):i.actions.includes("read")||i.actions.includes("list")?"none":i.actions.includes("write")||i.actions.includes("delete")?"read":i.actions.includes("admin")?"write":"none"}ruleMatchesPath(i,e){let t=i.replace(/^\/+/,"").replace(/\/+$/,""),r=e.replace(/^\/+/,"").replace(/\/+$/,"");return r===t||!t.includes("*")&&r.startsWith(t+"/")||t==="*"||t==="**"?!0:t.includes("*")?this.matchGlob(r,t):!1}matchGlob(i,e){let t="^",r=0;for(;r<e.length;){let s=e[r];s==="*"?e[r+1]==="*"?e[r+2]==="/"?(t+="(?:.+/)?",r+=3):(t+=".*",r+=2):(t+="[^/]*",r++):".+^${}()|[]\\".includes(s)?(t+="\\"+s,r++):(t+=s,r++)}t+="$";try{return new RegExp(t).test(i)}catch{return!1}}patternSpecificity(i){let e=0;return e+=(i.match(/\//g)||[]).length*10,i.includes("*")||(e+=100),i.includes("**")&&(e-=50),e+=i.length,e}levelRank(i){switch(i){case"admin":return 3;case"write":return 2;case"read":return 1;default:return 0}}levelToActions(i){switch(i){case"admin":return["read","write","delete","admin","list"];case"write":return["read","write","delete","list"];case"read":return["read","list"];default:return["read","list"]}}formatLevel(i){switch(i){case"unknown":return"Unknown";case"admin":return"Admin";case"write":return"Write";case"read":return"Read";default:return"No Access"}}iconForLevel(i){switch(i){case"admin":return"shield";case"write":return"edit";case"read":return"eye";case"unknown":return"help-circle";default:return"lock"}}initials(i){return i==="*"?"*":i.split(/[\s@._-]+/).filter(Boolean).slice(0,2).map(t=>t[0]?.toUpperCase()??"").join("")}};var vt=require("obsidian"),oe=require("@codemirror/state"),Fr=require("@codemirror/view");var Nr="__vaultguardReadOnlyCompartment",Yt="vaultguard-readonly-banner",Qt="vaultguard-noaccess-overlay",yt=class{constructor(i){this.started=!1;this.ctx=i}start(){this.started||(this.started=!0,this.ctx.plugin.registerEvent(this.ctx.app.workspace.on("file-open",()=>{setTimeout(()=>{this.applyToActiveView()},0)})),this.ctx.plugin.registerEvent(this.ctx.app.workspace.on("active-leaf-change",()=>{setTimeout(()=>{this.applyToActiveView()},0)})),this.ctx.plugin.registerEvent(this.ctx.app.workspace.on("layout-change",()=>{setTimeout(()=>{this.applyToActiveView()},0)})),this.applyToActiveView())}refreshAll(){this.ctx.app.workspace.iterateAllLeaves(i=>{let e=i.view;e instanceof vt.MarkdownView&&this.applyToView(e)})}destroy(){this.ctx.app.workspace.iterateAllLeaves(i=>{let e=i.view;e instanceof vt.MarkdownView&&(this.setEditable(e,!0),this.removeBanner(e),this.removeNoAccessOverlay(e))}),this.started=!1}async applyToActiveView(){let i=this.ctx.app.workspace.getActiveViewOfType(vt.MarkdownView);i&&await this.applyToView(i)}async applyToView(i){if(!i.file)return;let e=i.file.path,t=await this.ctx.getPermissionLevel(e),r=t>=2,s=t>=1;if(i.file?.path===e&&i.containerEl.isConnected){if(this.setEditable(i,r),!s){if(!this.ctx.isLoggedIn()){this.removeNoAccessOverlay(i),this.showBanner(i);return}this.removeBanner(i),this.showNoAccessOverlay(i);return}this.removeNoAccessOverlay(i),r?this.removeBanner(i):this.showBanner(i)}}setEditable(i,e){let t=this.getCodeMirror(i);if(!t)return;let r=e?[]:this.buildLockExtension(),s=t,a=s[Nr];a?t.dispatch({effects:a.reconfigure(r)}):(a=new oe.Compartment,s[Nr]=a,t.dispatch({effects:oe.StateEffect.appendConfig.of(a.of(r))}));let n=t.contentDOM;n&&(n.contentEditable=e?"true":"false")}buildLockExtension(){return[Fr.EditorView.editable.of(!1),oe.EditorState.readOnly.of(!0),oe.EditorState.transactionFilter.of(i=>i.docChanged&&i.annotation(oe.Transaction.userEvent)?[]:i)]}getCodeMirror(i){return i.editor.cm??null}showBanner(i){let e=i.containerEl.querySelector(".view-content");if(!e||e.querySelector(`.${Yt}`))return;let t=document.createElement("div");t.className=Yt,t.textContent="Read-only \u2014 your access to this file doesn't include editing.";let r=e.querySelector(".vaultguard-file-header");r?r.insertAdjacentElement("afterend",t):e.insertBefore(t,e.firstChild)}removeBanner(i){i.containerEl.querySelector(`.${Yt}`)?.remove()}showNoAccessOverlay(i){let e=i.containerEl.querySelector(".view-content");if(!(e instanceof HTMLElement)||e.querySelector(`.${Qt}`))return;getComputedStyle(e).position==="static"&&(e.style.position="relative");let r=document.createElement("div");r.className=Qt;let s=document.createElement("div");s.className="vaultguard-noaccess-card";let a=document.createElement("div");a.className="vaultguard-noaccess-title",a.textContent="No access to this file",s.appendChild(a);let n=document.createElement("div");n.className="vaultguard-noaccess-body",n.textContent="You don't have permission to view this file. Contact a vault admin if you think this is a mistake.",s.appendChild(n);let o=document.createElement("button");o.className="vaultguard-noaccess-close",o.type="button",o.textContent="Close tab",o.addEventListener("click",()=>{i.leaf.detach()}),s.appendChild(o),r.appendChild(s),e.appendChild(r)}removeNoAccessOverlay(i){i.containerEl.querySelector(`.${Qt}`)?.remove()}};var bt=require("obsidian");var Hi=6e4,qi=5e3,Wi=50,$r=!1,wt=class extends bt.Events{constructor(e){super();this.cfg=e;this.cache=new Map;this.inFlight=new Map;this.vaultDefaultPermission=null;this.warmupPromise=null;this.noneStreak=new Map;this.lastNoticeAt=new Map;this.metadataCacheDeleteAvailable=!1;let t=e.app.metadataCache;this.metadataCacheDeleteAvailable=typeof t.deletePath=="function",!this.metadataCacheDeleteAvailable&&!$r&&(console.warn("[VaultGuard] metadataCache.deletePath unavailable in this Obsidian version \u2014 backlinks/tags from restricted files may persist until restart"),$r=!0),this.on("changed",(...r)=>{let s=r[0]??{};this.handleChanged(s.path,s.serverConfirmed===!0)})}get inFlightWarmup(){return this.warmupPromise}async getPermission(e){let t=this.cache.get(e);if(t&&!this.isExpired(t))return t.level;let r=this.cfg.getSession();if(!r)return 0;if(r.role==="admin"||r.role==="owner")return this.cache.set(e,{level:3,fetchedAt:Date.now()}),3;let s=this.resolvePermissionFromCache(e);if(s>0)return this.cache.set(e,{level:s,fetchedAt:0}),s;let a=this.inFlight.get(e);if(a)return a;let n=this.probeServer(e);this.inFlight.set(e,n);try{return await n}finally{this.inFlight.delete(e)}}getCachedPermission(e){return this.cache.get(e)?.level}async warm(e,t){if(this.warmupPromise)return this.warmupPromise;let r=this.runWarm(e,t);this.warmupPromise=r;try{await r}finally{this.warmupPromise===r&&(this.warmupPromise=null)}}async runWarm(e,t){let r=this.cfg.getSession();if(!r||r.role==="admin"||r.role==="owner")return;let s=e.filter(o=>this.ruleAppliesToCurrentUser(o,r,t)&&!this.ruleIsExpired(o)),a=s.some(o=>this.isGlobPattern(o.pathPattern)),n=this.deriveDefaultPermissionLevel(r,t);n!==null&&(this.vaultDefaultPermission=n,a||this.cache.set("",{level:n,fetchedAt:0}));for(let o of s){if(this.isGlobPattern(o.pathPattern))continue;let l=this.ruleToPermissionLevel(o),c=this.normalizeVaultPath(o.pathPattern),d=this.cache.get(c);if(o.effect==="deny"){this.cache.set(c,{level:0,fetchedAt:0});continue}d&&d.level===0||d&&d.level>=l||this.cache.set(c,{level:l,fetchedAt:0})}}emit(e,t){this.trigger(e,t??{})}invalidate(e){e===void 0?(this.cache.clear(),this.inFlight.clear()):(this.cache.delete(e),this.inFlight.delete(e))}clearAllCache(){this.invalidate()}async sweepLeavesAfterWarm(){await this.sweepLeaves(!0)}async handleChanged(e,t){if(e!==void 0){this.invalidate(e);let s;try{s=await this.getPermission(e)}catch(a){this.cfg.log(`Permission store: per-path re-resolve skipped "${e}" (resolve failed: ${a.message})`),await this.sweepLeaves(t,e);return}if(s===0&&this.metadataCacheDeleteAvailable)try{this.cfg.app.metadataCache.deletePath(e)}catch(a){this.cfg.log(`[VaultGuard] metadataCache.deletePath('${e}') threw: ${a.message}`)}await this.sweepLeaves(t,e);return}let r=Array.from(this.cache.keys()).filter(s=>s!=="");for(let s of r)this.cache.delete(s),this.inFlight.delete(s);if(this.metadataCacheDeleteAvailable)for(let s of r){let a;try{a=await this.getPermission(s)}catch(n){this.cfg.log(`Permission store: wildcard re-resolve skipped "${s}" (resolve failed: ${n.message})`);continue}if(a===0)try{this.cfg.app.metadataCache.deletePath(s)}catch(n){this.cfg.log(`[VaultGuard] metadataCache.deletePath('${s}') threw: ${n.message}`)}}await this.sweepLeaves(t)}async sweepLeaves(e,t){let r=[];this.cfg.app.workspace.iterateAllLeaves(a=>{let o=a.view?.file?.path;o||(o=a.getViewState?.()?.state?.file),o&&(t!==void 0&&o!==t||r.push({leaf:a,path:o}))});let s=0;for(let{leaf:a,path:n}of r){s>0&&s%Wi===0&&await new Promise(l=>setTimeout(l,0)),s+=1;let o;try{o=await this.getPermission(n)}catch(l){this.cfg.log(`Permission store: sweep skipped "${n}" (resolve failed: ${l.message})`);continue}if(o===0)if(e)this.noneStreak.set(n,2),await this.detachLeafWithNotice(a,n);else{let l=(this.noneStreak.get(n)??0)+1;this.noneStreak.set(n,l),l>=2&&await this.detachLeafWithNotice(a,n)}else this.noneStreak.delete(n)}}async detachLeafWithNotice(e,t){let r=Date.now(),s=this.lastNoticeAt.get(t)??0;try{e.detach()}catch(a){this.cfg.log(`Permission store: leaf.detach failed for "${t}": ${a.message}`)}r-s>qi&&(new bt.Notice(`Access revoked: ${this.basename(t)}`),this.lastNoticeAt.set(t,r))}async probeServer(e){try{if(this.cfg.isOnline()){let t=await this.cfg.fetchPermissionLevelFromServer(e);return this.cache.set(e,{level:t,fetchedAt:Date.now()}),t}return this.resolvePermissionFromCache(e)}catch(t){return this.cfg.isNetworkError(t)?(this.cfg.onOfflineDetected?.(),this.resolvePermissionFromCache(e)):(this.cfg.log(`Permission check failed for "${e}", falling back to cache: ${t}`),this.resolvePermissionFromCache(e))}}resolvePermissionFromCache(e){let t=e.split("/");for(let s=t.length;s>0;s--){let a=t.slice(0,s).join("/"),n=this.cache.get(a);if(n&&!this.isExpired(n))return n.level}let r=this.cache.get("");return r&&!this.isExpired(r)?r.level:0}isExpired(e){return e.fetchedAt===0?!1:Date.now()-e.fetchedAt>Hi}deriveDefaultPermissionLevel(e,t){let r=t??this.deriveSessionVaultRole(e);if(!r)return null;switch(r){case"admin":return 3;case"editor":return 2;case"viewer":return 1;default:return null}}deriveSessionVaultRole(e){let t=e.role;return t==="admin"||t==="owner"?"admin":t==="editor"?"editor":t==="member"?"viewer":null}ruleAppliesToCurrentUser(e,t,r){return e.userId==="*"||e.userId===t.userId||t.email&&e.userId.trim().toLowerCase()===t.email.trim().toLowerCase()?!0:e.role?[...r?[r]:[],...t.roles?.length?t.roles:[t.role]].includes(e.role):!1}ruleToPermissionLevel(e){return e.effect==="deny"?0:e.actions.includes("admin")?3:e.actions.includes("write")||e.actions.includes("delete")?2:e.actions.includes("read")||e.actions.includes("list")?1:0}ruleIsExpired(e){return typeof e.expiresAt=="string"&&e.expiresAt<=new Date().toISOString()}isGlobPattern(e){return e.includes("*")||e.includes("?")||e.includes("[")}normalizeVaultPath(e){return e.replace(/^\/+/,"")}basename(e){let t=e.lastIndexOf("/");return t>=0?e.slice(t+1):e}};var Et=require("obsidian"),ji="https://api.github.com/repos/peter70700/vaultguard-obsidian/releases/latest",Ki="https://github.com/peter70700/vaultguard-obsidian/releases",Or=1440*60*1e3,Ji=3e4,Yi=15e3,xt=class{constructor(i){this.plugin=i;this.startupTimer=null;this.intervalTimer=null}start(){this.startupTimer!==null||this.intervalTimer!==null||(this.startupTimer=window.setTimeout(()=>{this.startupTimer=null,this.runCheck(),this.intervalTimer=window.setInterval(()=>{this.runCheck()},Or)},Ji))}stop(){this.startupTimer!==null&&(window.clearTimeout(this.startupTimer),this.startupTimer=null),this.intervalTimer!==null&&(window.clearInterval(this.intervalTimer),this.intervalTimer=null)}async checkNow(){return this.runCheck({force:!0})}async runCheck(i={}){if(this.plugin.settings.disableUpdateChecks)return{latest:null,isNewer:!1};let e=this.plugin.settings.updateCheckState??{lastCheckedAt:0,lastSeenVersion:""};if(!i.force&&Date.now()-e.lastCheckedAt<Or)return{latest:null,isNewer:!1};let t=null,r=!1;try{let s=await(0,Et.requestUrl)({url:ji,method:"GET",headers:{Accept:"application/vnd.github+json"},throw:!1});if(s.status===200&&s.json&&typeof s.json=="object"){let a=typeof s.json.tag_name=="string"?s.json.tag_name.trim():"",n=typeof s.json.html_url=="string"?s.json.html_url:Ki;if(a){t=a;let o=this.plugin.manifest.version;Qi(a,o)>0&&(r=!0,(i.force||a!==e.lastSeenVersion)&&(this.notifyNewVersion(o,a,n),e.lastSeenVersion=a))}}}catch{}e.lastCheckedAt=Date.now(),this.plugin.settings.updateCheckState=e;try{await this.plugin.saveSettings()}catch{}return{latest:t,isNewer:r}}notifyNewVersion(i,e,t){let r=document.createDocumentFragment();r.appendChild(document.createTextNode(`VaultGuard ${e} is available (you're on ${i}). `));let s=document.createElement("a");s.href=t,s.textContent="View release",s.setAttribute("target","_blank"),s.setAttribute("rel","noopener noreferrer"),r.appendChild(s),new Et.Notice(r,Yi)}};function Qi(h,i){let e=a=>a.replace(/^v/i,"").split(".").map(n=>{let o=parseInt(n,10);return Number.isFinite(o)?o:0}),t=e(h),r=e(i),s=Math.max(t.length,r.length);for(let a=0;a<s;a++){let n=(t[a]??0)-(r[a]??0);if(n!==0)return n}return 0}function Me(){let h=Xi();if(typeof h!="function")return null;let i=[()=>{try{return h("@electron/remote")?.safeStorage??null}catch{return null}},()=>{try{let e=h("electron");return e?.remote?.safeStorage??e?.safeStorage??null}catch{return null}}];for(let e of i){let t=e();if(!(!t||typeof t.isEncryptionAvailable!="function"))try{if(t.isEncryptionAvailable())return t}catch{}}return null}function Xi(){let h=typeof window<"u"?window:void 0;if(typeof h?.require=="function")return h.require;let i=globalThis;if(typeof i.require=="function")return i.require;try{let e=require;if(typeof e=="function")return e}catch{}return null}var Xt=new Uint8Array([86,71,49,0]),_r=1,Se=8,ke=12,Zi=16,De=32,Zt="vaultguard.at-rest.kek.v1",er="VG1",Gr=2,St=class{constructor(i){this.lak=null;this.cryptoKey=null;this.safeStorage=null;this.method=null;this.status={kind:"uninitialized"};this.storage=i}async init(){this.safeStorage=Me();let i=await this.storage.loadWrappedLak();if(i)try{this.lak=await this.unwrapLak(i)}catch(e){return this.status={kind:"needs-recovery",reason:`Could not unwrap the local at-rest key: ${e instanceof Error?e.message:String(e)}. Restore from your recovery code in Settings \u2192 VaultGuard, or run "Decrypt vault at rest" if you intend to discard the encrypted files.`},!1}else{let e=crypto.getRandomValues(new Uint8Array(De)),t=await this.wrapLak(e);await this.storage.saveWrappedLak(t),i=t,this.lak=e}return this.cryptoKey=await crypto.subtle.importKey("raw",this.lak,{name:"AES-GCM"},!1,["encrypt","decrypt"]),this.status={kind:"unlocked",method:this.method},!0}isReady(){return this.cryptoKey!==null}getStatus(){return this.status}lock(){this.lak&&(this.lak.fill(0),this.lak=null),this.cryptoKey=null,this.method?this.status={kind:"locked",method:this.method==="ephemeral"?"localstorage-fallback":this.method}:this.status={kind:"uninitialized"}}async reset(){this.lock(),await this.storage.clearWrappedLak();try{typeof localStorage<"u"&&localStorage.removeItem(Zt)}catch{}this.status={kind:"uninitialized"}}isEncrypted(i){let e=i instanceof Uint8Array?i:new Uint8Array(i);if(e.length<Se+ke+Zi)return!1;for(let t=0;t<Xt.length;t++)if(e[t]!==Xt[t])return!1;return e[4]===_r}async encryptString(i){let e=new TextEncoder().encode(i);return this.encryptBytes(e)}async decryptString(i){let e=await this.decryptBytes(i);return new TextDecoder().decode(e)}async encryptBinary(i){let e=i instanceof Uint8Array?i:new Uint8Array(i);return this.encryptBytes(e)}async decryptBinary(i){return this.decryptBytes(i)}async encryptBytes(i){if(!this.cryptoKey)throw new Error("AtRestCipher: not initialised. Call init() first.");let e=crypto.getRandomValues(new Uint8Array(ke)),t=new Uint8Array(await crypto.subtle.encrypt({name:"AES-GCM",iv:e},this.cryptoKey,i)),r=new Uint8Array(Se+ke+t.length);return r.set(Xt,0),r[4]=_r,r.set(e,Se),r.set(t,Se+ke),r.buffer}async decryptBytes(i){if(!this.cryptoKey)throw new Error("AtRestCipher: not initialised. Call init() first.");let e=i instanceof Uint8Array?i:new Uint8Array(i);if(!this.isEncrypted(e))throw new Error("AtRestCipher: bytes do not have the expected magic header.");let t=e.slice(Se,Se+ke),r=e.slice(Se+ke);return await crypto.subtle.decrypt({name:"AES-GCM",iv:t},this.cryptoKey,r)}async wrapLak(i){if(this.safeStorage)try{let a=this.safeStorage.encryptString(this.bytesToBase64(i)),n=a instanceof Uint8Array?a:new Uint8Array(a);return this.method="safe-storage",`ss:${this.bytesToBase64(n)}`}catch{}let e=await this.getOrCreateFallbackKek(),t=await crypto.subtle.importKey("raw",e,{name:"AES-GCM"},!1,["encrypt","decrypt"]),r=crypto.getRandomValues(new Uint8Array(ke)),s=new Uint8Array(await crypto.subtle.encrypt({name:"AES-GCM",iv:r},t,i));return this.method="localstorage-fallback",`ls:${this.bytesToBase64(r)}:${this.bytesToBase64(s)}`}async unwrapLak(i){if(i.startsWith("ss:")){if(!this.safeStorage)throw new Error("OS keychain (safeStorage) is unavailable on this device \u2014 the local at-rest key cannot be unwrapped.");let e=this.base64ToBytes(i.slice(3)),t=this.safeStorage.decryptString(e);return this.method="safe-storage",this.base64ToBytes(t)}if(i.startsWith("ls:")){let[,e,t]=i.split(":");if(!e||!t)throw new Error("Malformed wrapped LAK blob (ls).");let r=await this.getOrCreateFallbackKek(),s=await crypto.subtle.importKey("raw",r,{name:"AES-GCM"},!1,["encrypt","decrypt"]),a=this.base64ToBytes(e),n=this.base64ToBytes(t),o=new Uint8Array(await crypto.subtle.decrypt({name:"AES-GCM",iv:a},s,n));return this.method="localstorage-fallback",o}throw new Error("Unknown wrapped LAK envelope format.")}async getOrCreateFallbackKek(){if(typeof localStorage>"u")return this.method="ephemeral",crypto.getRandomValues(new Uint8Array(De));let i=localStorage.getItem(Zt);if(i)return this.base64ToBytes(i);let e=crypto.getRandomValues(new Uint8Array(De));return localStorage.setItem(Zt,this.bytesToBase64(e)),e}async exportRecoveryCode(){if(!this.lak)throw new Error("AtRestCipher: cannot export recovery code while locked. Unlock first.");let i=this.bytesToHex(this.lak),e=await this.recoveryChecksum(this.lak),t=this.bytesToHex(e),r=this.groupBy(i+t,4);return`${er}-${r.join("-")}`}async restoreFromRecoveryCode(i){let e=i.replace(/\s+/g,"").toUpperCase();if(!e.startsWith(`${er}-`))return!1;let t=e.slice(er.length+1).replace(/-/g,""),r=(De+Gr)*2;if(t.length!==r||!/^[0-9A-F]+$/.test(t))return!1;let s=t.slice(0,De*2),a=t.slice(De*2),n=this.hexToBytes(s),o=await this.recoveryChecksum(n);if(this.bytesToHex(o).toUpperCase()!==a)return!1;this.safeStorage||(this.safeStorage=Me());let l=await this.wrapLakBytes(n);return await this.storage.saveWrappedLak(l),this.lak&&this.lak.fill(0),this.lak=n,this.cryptoKey=await crypto.subtle.importKey("raw",this.lak,{name:"AES-GCM"},!1,["encrypt","decrypt"]),this.status={kind:"unlocked",method:this.method},!0}async recoveryChecksum(i){let e=await crypto.subtle.digest("SHA-256",i);return new Uint8Array(e).slice(0,Gr)}async wrapLakBytes(i){return this.wrapLak(i)}bytesToBase64(i){let e="";for(let t=0;t<i.length;t++)e+=String.fromCharCode(i[t]);return typeof btoa=="function"?btoa(e):Buffer.from(e,"binary").toString("base64")}base64ToBytes(i){let e=typeof atob=="function"?atob(i):Buffer.from(i,"base64").toString("binary"),t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}bytesToHex(i){let e="";for(let t=0;t<i.length;t++)e+=i[t].toString(16).padStart(2,"0");return e}hexToBytes(i){let e=new Uint8Array(i.length/2);for(let t=0;t<e.length;t++)e[t]=parseInt(i.substring(t*2,t*2+2),16);return e}groupBy(i,e){let t=[];for(let r=0;r<i.length;r+=e)t.push(i.slice(r,r+e));return t}};var G=require("obsidian");var kt=class extends G.Modal{constructor(e){super(e.app);this.rules=[];this.users=[];this.userMap=new Map;this.usersLoading=!1;this.usersLoadError=null;this.draftPrincipalType="user";this.draftPrincipalValue="";this.draftSelectedUserId=null;this.draftLevel="write";this.permissionsLoaded=!1;this.isClosed=!1;this.canManage=!1;this.currentUserLevel="none";this.accessSummary=null;this.pendingLevelPatches=new Map;this.cfg=e,this.permissionEditor=new ge(e.app,e.apiClient),this.canManage=e.isAdmin,this.usersLoading=e.isAdmin}async onOpen(){this.isClosed=!1,this.permissionsLoaded=!1,this.modalEl.addClass("vaultguard-path-perms-modal"),this.contentEl.addClass("vaultguard-path-perms-content"),this.renderLoading();try{this.accessSummary=await this.cfg.apiClient.getPathAccess(this.cfg.path).catch(()=>null),this.currentUserLevel=this.accessSummary?.currentUserLevel??"none",this.mergeAccessSummaryIntoDirectory(),this.canManage=this.cfg.isAdmin||this.currentUserLevel==="admin",this.usersLoading=this.cfg.isAdmin,this.cfg.isAdmin&&this.loadUsers(),this.rules=this.canManage?await this.cfg.apiClient.getPermissions(this.cfg.path).catch(()=>[]):[],this.permissionsLoaded=!0,this.render()}catch(e){this.renderError(e.message)}}onClose(){this.isClosed=!0,this.modalEl.removeClass("vaultguard-path-perms-modal"),this.contentEl.removeClass("vaultguard-path-perms-content"),this.contentEl.empty()}renderLoading(){this.contentEl.empty(),this.contentEl.createDiv({cls:"vaultguard-loading",text:"Loading permissions..."})}renderError(e){this.contentEl.empty(),this.renderHeader(),this.contentEl.createDiv({cls:"vaultguard-error",text:`Failed to load permissions: ${e}`})}render(){this.contentEl.empty(),this.renderHeader(),this.renderMyAccess(),this.renderAccessList(),this.canManage&&this.renderAddSection()}renderHeader(){let e=this.contentEl.createDiv({cls:"vaultguard-pp-header"}),t=e.createSpan({cls:"vaultguard-pp-header-icon"});(0,G.setIcon)(t,this.cfg.isFolder?"folder":"file-text");let r=e.createDiv({cls:"vaultguard-pp-header-text"});r.createEl("h3",{text:this.cfg.isFolder?"Folder Permissions":"File Permissions"}),r.createDiv({cls:"vaultguard-pp-path",text:this.cfg.path})}renderMyAccess(){let e=this.contentEl.createDiv({cls:"vaultguard-pp-my-access"}),t=this.resolveMyLevel(),r=e.createDiv({cls:"vaultguard-pp-my-row"}),s=r.createSpan({cls:"vaultguard-pp-my-icon"});(0,G.setIcon)(s,t==="admin"?"shield":t==="write"?"edit":t==="read"?"eye":"lock"),r.createSpan({cls:"vaultguard-pp-my-label",text:"Your access:"}),r.createSpan({cls:`vaultguard-fh-badge vaultguard-fh-badge-${t}`}).setText(this.formatLevel(t))}renderAccessList(){let e=this.contentEl.createDiv({cls:"vaultguard-pp-section"});e.createDiv({cls:"vaultguard-pp-section-title",text:"Who has access"});let t=e.createDiv({cls:"vaultguard-pp-list"});if(this.accessSummary?.principals.length){this.renderEffectiveAccessRows(t,this.accessSummary.principals);return}if(this.rules.length===0){t.createDiv({cls:"vaultguard-pp-empty",text:"Access details unavailable."});return}let r=this.rawRulesForDisplay().sort((s,a)=>{let n=this.ruleLevelRank(s),o=this.ruleLevelRank(a);return n!==o?o-n:this.principalLabel(s).localeCompare(this.principalLabel(a))});for(let s of r)this.renderRuleRow(t,s)}renderEffectiveAccessRows(e,t){let r=this.normalizeAccessPrincipals(t).sort((s,a)=>{let n=this.levelRank(a.level)-this.levelRank(s.level);return n!==0?n:this.accessPrincipalLabel(s).localeCompare(this.accessPrincipalLabel(a))});for(let s of r)this.renderEffectiveAccessRow(e,s)}renderEffectiveAccessRow(e,t){let r=e.createDiv({cls:"vaultguard-pp-row vaultguard-pp-row-effective"});r.createDiv({cls:"vaultguard-pp-avatar"}).createSpan({cls:"vaultguard-pp-initials",text:this.userInitials(t.userId)});let a=r.createDiv({cls:"vaultguard-pp-info"});a.createDiv({cls:"vaultguard-pp-name",text:this.accessPrincipalLabel(t)}),a.createDiv({cls:"vaultguard-pp-meta",text:t.email||"Effective access"});let n=r.createDiv({cls:"vaultguard-pp-level"});if(this.canEditAccessPrincipal(t)){let l=n.createEl("select",{cls:"vaultguard-pp-select"}),c=[{value:"admin",label:"Admin"},{value:"write",label:"Write"},{value:"read",label:"Read"},{value:"none",label:"No Access"}];for(let d of c){let u=l.createEl("option",{text:d.label,attr:{value:d.value}});d.value===t.level&&(u.selected=!0)}l.addEventListener("change",async()=>{Z(l,!0);try{await this.handleAccessPrincipalLevelChange(t,l.value),new G.Notice("Permission updated."),await this.refresh()}catch(d){new G.Notice(`Failed: ${d.message}`),Z(l,!1)}});return}n.createSpan({cls:`vaultguard-fh-badge vaultguard-fh-badge-${t.level}`}).setText(this.formatLevel(t.level))}renderRuleRow(e,t){let r=e.createDiv({cls:"vaultguard-pp-row"}),s=r.createDiv({cls:"vaultguard-pp-avatar"});t.role?(0,G.setIcon)(s,"users"):t.userId==="*"?(0,G.setIcon)(s,"globe"):s.createSpan({cls:"vaultguard-pp-initials",text:this.userInitials(t.userId)});let a=r.createDiv({cls:"vaultguard-pp-info"});a.createDiv({cls:"vaultguard-pp-name",text:this.principalLabel(t)});let n=[];t.effect==="deny"&&n.push("Denied"),n.push(t.pathPattern),a.createDiv({cls:"vaultguard-pp-meta",text:n.join(" \xB7 ")});let o=r.createDiv({cls:"vaultguard-pp-level"});if(this.canManage){let l=o.createEl("select",{cls:"vaultguard-pp-select"}),c=[{value:"admin",label:"Admin"},{value:"write",label:"Write"},{value:"read",label:"Read"},{value:"none",label:"No Access"}];for(let u of c){let p=l.createEl("option",{text:u.label,attr:{value:u.value}});u.value===this.displayLevelForRule(t)&&(p.selected=!0)}l.addEventListener("change",async()=>{Z(l,!0);try{await this.handleRuleLevelChange(t,l.value),new G.Notice("Permission updated."),await this.refresh()}catch(u){new G.Notice(`Failed: ${u.message}`),Z(l,!1)}});let d=o.createEl("button",{cls:"vaultguard-icon-btn vaultguard-danger",attr:{"aria-label":"Remove",type:"button"}});(0,G.setIcon)(d,"trash-2"),d.addEventListener("click",async()=>{$(d,!0);try{await this.cfg.apiClient.deletePermission(t.id),new G.Notice("Rule removed."),await this.refresh()}catch(u){new G.Notice(`Failed: ${u.message}`),d.isConnected&&$(d,!1)}})}else{let l=this.displayLevelForRule(t);o.createSpan({cls:`vaultguard-fh-badge vaultguard-fh-badge-${l}`}).setText(this.formatLevel(l))}}renderAddSection(){this.syncSelectedUserFromDraft();let e=this.contentEl.createDiv({cls:"vaultguard-pp-section"});e.createDiv({cls:"vaultguard-pp-section-title",text:"Add access"});let t=e.createDiv({cls:"vaultguard-pp-add-form"}),r=t.createEl("select",{cls:"vaultguard-pp-input"});r.createEl("option",{text:"User",attr:{value:"user"}}),r.createEl("option",{text:"Role",attr:{value:"role"}}),r.value=this.draftPrincipalType;let s=t.createEl("input",{cls:"vaultguard-pp-input vaultguard-pp-input-principal",attr:{type:"text",placeholder:this.draftPrincipalType==="user"?"Search teammates or enter a user ID":"Role name"}});s.value=this.draftPrincipalValue;let a=t.createEl("select",{cls:"vaultguard-pp-input"});a.createEl("option",{text:"Read",attr:{value:"read"}}),a.createEl("option",{text:"Write",attr:{value:"write"}}),a.createEl("option",{text:"Admin",attr:{value:"admin"}}),a.createEl("option",{text:"No Access",attr:{value:"none"}}),a.value=this.draftLevel;let n=new G.ButtonComponent(t).setButtonText("Add").setCta();n.buttonEl.type="button";let o=e.createDiv({cls:"vaultguard-access-picker"}),l=()=>{if(this.draftPrincipalType=r.value,this.draftPrincipalValue=s.value,this.draftLevel=a.value,this.syncSelectedUserFromDraft(),s.placeholder=this.draftPrincipalType==="user"?"Search teammates or enter a user ID":"Role name",o.empty(),this.draftPrincipalType!=="user"){o.createDiv({cls:"vaultguard-access-picker-note",text:"Role rules apply to everyone assigned to that role."});return}if(o.createDiv({cls:"vaultguard-access-picker-note",text:"Quick add from your team directory"}),this.usersLoading){o.createDiv({cls:"vaultguard-access-picker-state",text:"Loading teammates..."});return}if(this.usersLoadError){o.createDiv({cls:"vaultguard-access-picker-state",text:"Team directory unavailable right now. You can still type a user ID."});return}let u=this.users.filter(v=>v.status!=="revoked");if(u.length===0){o.createDiv({cls:"vaultguard-access-picker-state",text:"No teammates found yet. Invite someone from the Users tab first."});return}let p=u.filter(v=>tt(v,s.value)).slice(0,8);if(p.length===0){o.createDiv({cls:"vaultguard-access-picker-state",text:"No matching teammates."});return}let f=this.existingExactDirectUserLevels(),m=o.createDiv({cls:"vaultguard-access-picker-list"});for(let v of p){let A=f.get(v.id),k=m.createEl("button",{cls:"vaultguard-access-picker-item",attr:{type:"button"}});k.classList.toggle("is-selected",this.draftSelectedUserId===v.id),k.classList.toggle("is-disabled",!!A),k.disabled=!!A,k.createDiv({cls:"vaultguard-access-picker-avatar"}).createSpan({text:Y(v)});let U=k.createDiv({cls:"vaultguard-access-picker-body"});U.createDiv({cls:"vaultguard-access-picker-name",text:_(v)}),U.createDiv({cls:"vaultguard-access-picker-meta",text:rt(v)});let V=k.createSpan({cls:"vaultguard-access-picker-pill"});A?(V.classList.add(`vaultguard-access-picker-pill-level-${A}`),V.setText(`Has ${this.formatLevel(A)}`)):v.status!=="active"?V.setText(Ee(v.status)):V.setText(xe(v.role)),A||k.addEventListener("click",()=>{this.draftSelectedUserId=v.id,this.draftPrincipalValue=me(v),s.value=this.draftPrincipalValue,s.focus(),l()})}},c=async()=>{let u=r.value,p=s.value.trim(),f=a.value;this.draftPrincipalType=u,this.draftPrincipalValue=s.value,this.draftLevel=f,this.syncSelectedUserFromDraft();let m=u==="user"?this.resolveDraftUserId(p):p;if(!m){new G.Notice("Please enter a user ID or role name.");return}if(u==="user"&&this.existingExactDirectUserLevels().get(m)){new G.Notice(`${this.userLabel(m)} already has a direct rule for this path.`);return}$(n.buttonEl,!0,{label:"Adding"});try{let v=this.toRulePath(this.cfg.path),A=u==="user"?this.userLabel(m):m,k=u==="user"?m:"*",I=await this.cfg.apiClient.setPermissionLevel({userId:k,role:u==="role"?m:null,pathPattern:v,level:f});new G.Notice(f==="none"?`Access blocked for ${A}.`:`Access granted to ${A}.`),this.draftPrincipalValue="",this.draftSelectedUserId=null,I?.level&&u==="user"&&(this.patchAccessSummaryPrincipalLevel(k,I.level),this.optimisticRender()),await this.refresh()}catch(v){new G.Notice(`Failed: ${v.message}`)}finally{!this.isClosed&&n.buttonEl.isConnected&&$(n.buttonEl,!1)}};r.addEventListener("change",()=>{let u=r.value;u!==this.draftPrincipalType&&(this.draftPrincipalValue="",s.value=""),u!=="user"&&(this.draftSelectedUserId=null),l()}),s.addEventListener("input",()=>{l()}),s.addEventListener("keydown",u=>{u.key==="Enter"&&(u.preventDefault(),c())}),a.addEventListener("change",()=>{this.draftLevel=a.value}),n.onClick(()=>{c()}),l(),e.createDiv({cls:"vaultguard-pp-advanced"}).createEl("button",{cls:"vaultguard-pp-advanced-btn",text:"Advanced rule editor...",attr:{type:"button"}}).addEventListener("click",()=>{let u=this.toRulePath(this.cfg.path);this.permissionEditor.showAddRuleForPath(u,async()=>{await this.refresh()})})}async handleRuleLevelChange(e,t){let r=e.role?"*":this.resolveCanonicalUserId(e.userId),s=await this.cfg.apiClient.setPermissionLevel({userId:r,role:e.role??null,pathPattern:this.toRulePath(this.cfg.path),level:t});s?.level&&!e.role&&(this.patchAccessSummaryPrincipalLevel(r,s.level),this.optimisticRender())}async handleAccessPrincipalLevelChange(e,t){let r=this.resolveCanonicalUserId(e.userId),s=await this.cfg.apiClient.setPermissionLevel({userId:r,role:null,pathPattern:this.toRulePath(this.cfg.path),level:t});s?.level&&(this.patchAccessSummaryPrincipalLevel(r,s.level),this.optimisticRender())}optimisticRender(){this.isClosed||typeof this.contentEl?.appendChild!="function"||this.render()}patchAccessSummaryPrincipalLevel(e,t){this.pendingLevelPatches||(this.pendingLevelPatches=new Map),this.pendingLevelPatches.set(e,t),this.accessSummary&&this.reconcilePendingLevelPatches()}async refresh(){try{this.accessSummary=await this.cfg.apiClient.getPathAccess(this.cfg.path).catch(()=>this.accessSummary),this.reconcilePendingLevelPatches(),this.currentUserLevel=this.accessSummary?.currentUserLevel??this.currentUserLevel,this.mergeAccessSummaryIntoDirectory(),this.canManage=this.cfg.isAdmin||this.currentUserLevel==="admin",this.rules=this.canManage?await this.cfg.apiClient.getPermissions(this.cfg.path).catch(()=>[]):[],this.permissionsLoaded=!0,this.render(),this.cfg.onRulesChanged?.()}catch(e){this.renderError(e.message)}}reconcilePendingLevelPatches(){if(!this.accessSummary)return;this.pendingLevelPatches||(this.pendingLevelPatches=new Map);for(let[t,r]of[...this.pendingLevelPatches]){let s=this.accessSummary.principals.find(a=>this.resolveCanonicalUserId(a.userId)===t);s&&s.level===r&&this.pendingLevelPatches.delete(t)}if(this.pendingLevelPatches.size===0)return;let e=this.accessSummary.principals.map(t=>{let r=this.pendingLevelPatches.get(this.resolveCanonicalUserId(t.userId));return r?{...t,level:r}:t});for(let[t,r]of this.pendingLevelPatches){if(r==="none")continue;e.some(a=>this.resolveCanonicalUserId(a.userId)===t)||e.push({userId:t,level:r})}this.accessSummary={...this.accessSummary,principals:e}}async loadUsers(){try{let e=await this.cfg.apiClient.listUsers();if(this.isClosed)return;this.users=re(e),this.userMap=q(this.users),this.usersLoadError=null}catch(e){if(this.isClosed)return;this.usersLoadError=e.message}finally{this.usersLoading=!1,!this.isClosed&&this.permissionsLoaded&&this.render()}}toRulePath(e){let t=e;return t.startsWith("/")||(t="/"+t),this.cfg.isFolder&&!t.endsWith("/")&&(t+="/"),t}resolveMyLevel(){if(this.cfg.currentUserRole==="admin"||this.cfg.currentUserRole==="owner")return"admin";if(this.currentUserLevel!=="none")return this.currentUserLevel;let e="none",t=-1;for(let r of this.rules){if(!(r.userId===this.cfg.currentUserId||r.userId==="*"||r.role&&this.cfg.currentUserRole===r.role))continue;let a=this.patternSpecificity(r.pathPattern);if(a>t)t=a,e=this.currentLevel(r);else if(a===t){let n=this.currentLevel(r);this.levelRank(n)>this.levelRank(e)&&(e=n)}}return e==="none"&&t===-1?this.cfg.currentUserRole==="editor"?"write":"read":e}principalLabel(e){return e.role?`Role: ${e.role}`:e.userId==="*"?"Everyone":this.userLabel(e.userId)}currentLevel(e){return e.effect==="deny"?this.deniedActionsCapLevel(e.actions):e.actions.includes("admin")?"admin":e.actions.includes("write")||e.actions.includes("delete")?"write":e.actions.includes("read")?"read":"none"}effectiveLevelForRulePrincipal(e){let t=this.accessSummary?.principals;if(!t||t.length===0||e.role||e.userId==="*")return null;let r=this.resolveCanonicalUserId(e.userId),s=t.find(a=>this.resolveCanonicalUserId(a.userId)===r);return s?s.level:null}displayLevelForRule(e){let t=this.currentLevel(e);if(e.effect==="deny"||e.role||e.userId==="*"||!this.ruleTargetsCurrentPath(e))return t;let r=this.resolveCanonicalUserId(e.userId);for(let s of this.rules){if(s===e||s.role||s.userId==="*"||this.ruleTargetsCurrentPath(s)||this.resolveCanonicalUserId(s.userId)!==r)continue;let a=this.currentLevel(s);this.levelRank(a)>this.levelRank(t)&&(t=a)}return t}formatLevel(e){switch(e){case"admin":return"Admin";case"write":return"Write";case"read":return"Read";default:return"No Access"}}levelToActions(e){switch(e){case"admin":return["read","write","delete","admin","list"];case"write":return["read","write","delete","list"];case"read":return["read","list"];default:return["read","list"]}}buildLevelMutation(e,t="none"){if(e==="none")return{actions:["read","write","delete","admin","list"],effect:"deny"};let r=this.levelRank(e),s=this.levelRank(t);if(r<s){let a=[];return r<1&&a.push("read","list"),r<2&&a.push("write","delete"),r<3&&a.push("admin"),{actions:a,effect:"deny"}}return{actions:this.levelToActions(e),effect:"allow"}}ruleLevelString(e){return e.actions.includes("admin")?"admin":e.actions.includes("write")||e.actions.includes("delete")?"write":e.actions.includes("read")?"read":"none"}ruleLevelRank(e){return e.effect==="deny"?this.levelRank(this.deniedActionsCapLevel(e.actions)):e.actions.includes("admin")?3:e.actions.includes("write")?2:e.actions.includes("read")?1:0}userLabel(e){let t=this.userMap.get(e);return t?_(t):e}accessPrincipalLabel(e){return e.displayName||e.email||this.userLabel(e.userId)}normalizeAccessPrincipals(e){let t=new Map;for(let r of e){let s=this.resolveCanonicalUserId(r.userId),n=r.email?.trim().toLowerCase()||s,o={...r,userId:s},l=t.get(n);(!l||this.levelRank(o.level)>this.levelRank(l.level))&&t.set(n,o)}return[...t.values()]}canEditAccessPrincipal(e){if(!this.canManage||e.userId===this.cfg.currentUserId)return!1;let t=e.role?.toLowerCase();return!(!this.cfg.allowAdminPerFileRestrictions&&t==="admin")}existingExactDirectUserLevels(){let e=new Map;for(let t of this.rules){if(t.role||t.userId==="*"||!this.ruleTargetsCurrentPath(t))continue;let r=this.currentLevel(t),s=e.get(t.userId);(!s||this.levelRank(r)>=this.levelRank(s))&&e.set(t.userId,r)}return e}ruleTargetsCurrentPath(e){return this.normalizeRulePath(e.pathPattern)===this.normalizeRulePath(this.toRulePath(this.cfg.path))}findExactRuleForPrincipal(e){return this.rules.find(t=>this.ruleTargetsCurrentPath(t)?e.role?t.role===e.role:!t.role&&this.resolveCanonicalUserId(t.userId)===this.resolveCanonicalUserId(e.userId):!1)??null}findExactUserRuleForCurrentPath(e){let t=this.resolveCanonicalUserId(e);return this.rules.find(r=>!r.role&&this.resolveCanonicalUserId(r.userId)===t&&this.ruleTargetsCurrentPath(r))??null}rawRulesForDisplay(){let e=new Set;for(let t of this.rules)t.role||t.userId==="*"||!this.ruleTargetsCurrentPath(t)||e.add(this.resolveCanonicalUserId(t.userId));return e.size===0?[...this.rules]:this.rules.filter(t=>t.role||t.userId==="*"||this.ruleTargetsCurrentPath(t)?!0:!e.has(this.resolveCanonicalUserId(t.userId)))}normalizeRulePath(e){return e.replace(/^\/+/,"").replace(/\/+$/,"")}resolveCanonicalUserId(e){return fe(this.users,e)}mergeAccessSummaryIntoDirectory(){let e=this.accessSummary?.principals??[];if(e.length===0)return;let t=new Set(this.users.map(s=>s.id)),r=[];for(let s of e)t.has(s.userId)||!s.displayName&&!s.email||(r.push({id:s.userId,email:s.email??"",displayName:s.displayName??s.email??s.userId,name:s.displayName??s.email??s.userId,role:this.mapVaultRoleToUserRole(s.role),status:"active",lastActive:"",createdAt:"",mfaEnabled:!1,deviceCount:0,type:"user"}),t.add(s.userId));r.length!==0&&(this.users=re([...this.users,...r]),this.userMap=q(this.users))}mapVaultRoleToUserRole(e){switch(e){case"admin":return"admin";case"editor":return"editor";case"viewer":return"viewer";default:return"custom"}}syncSelectedUserFromDraft(){if(this.draftPrincipalType!=="user"){this.draftSelectedUserId=null;return}let e=this.draftSelectedUserId?this.userMap.get(this.draftSelectedUserId)??null:null;e&&this.normalizeValue(this.draftPrincipalValue)===this.normalizeValue(me(e))||(this.draftSelectedUserId=Oe(this.users,this.draftPrincipalValue)?.id??null)}resolveDraftUserId(e){let t=this.draftSelectedUserId?this.userMap.get(this.draftSelectedUserId)??null:null;return t&&this.normalizeValue(e)===this.normalizeValue(me(t))?t.id:fe(this.users,e)}normalizeValue(e){return e.trim().toLowerCase()}levelRank(e){switch(e){case"admin":return 3;case"write":return 2;case"read":return 1;default:return 0}}patternSpecificity(e){let t=0;return t+=(e.match(/\//g)||[]).length*10,e.includes("*")||(t+=100),e.includes("**")&&(t-=50),t+=e.length,t}initials(e){return e==="*"?"*":et(e)}userInitials(e){if(e==="*")return"*";let t=this.userMap.get(e);return t?Y(t):this.initials(e)}deniedActionsCapLevel(e){return e.includes("read")||e.includes("list")?"none":e.includes("write")||e.includes("delete")?"read":e.includes("admin")?"write":"none"}};var rr=require("obsidian");var ze="vaultguard-fe-decoration",tr="vaultguard-fe-hidden",es=12e4,ts=15e3,rs=300,is=1e3,zr=100,Pt=class{constructor(i){this.cache=new Map;this.inFlightPaths=new Map;this.observer=null;this.observedContainer=null;this.enabled=!1;this.isDecorating=!1;this.debounceTimer=null;this.attachRetryTimer=null;this.users=[];this.userMap=new Map;this.usersLoaded=!1;this.usersLoadPromise=null;this.vaultMembersLoaded=!1;this.vaultMembersLoadPromise=null;this.batchAccessUnavailable=!1;this.config=i}enable(){if(this.enabled){this.observeFileExplorer(),this.scheduleDecorate();return}this.enabled=!0,this.observeFileExplorer(),this.scheduleDecorate()}disable(){this.enabled=!1,this.cancelDebounce(),this.cancelAttachRetry(),this.stopObserver(),this.removeAllDecorations()}refresh(){this.cache.clear(),this.inFlightPaths.clear(),this.enabled&&this.scheduleDecorate()}invalidate(i){i?(this.cache.delete(i),this.inFlightPaths.delete(i)):(this.cache.clear(),this.inFlightPaths.clear(),this.clearUserDirectory()),this.enabled&&this.scheduleDecorate()}setConfig(i){let e=i.currentUserId!==void 0&&i.currentUserId!==this.config.currentUserId;i.currentUserId!==void 0&&(this.config.currentUserId=i.currentUserId),i.currentUserRole!==void 0&&(this.config.currentUserRole=i.currentUserRole),this.cache.clear(),this.inFlightPaths.clear(),e&&this.clearUserDirectory(),this.enabled&&this.scheduleDecorate()}destroy(){this.disable(),this.cache.clear(),this.inFlightPaths.clear()}observeFileExplorer(){let i=this.getFileExplorerContainer();if(!i){this.stopObserver(),this.scheduleAttachRetry();return}this.cancelAttachRetry(),!(this.observer&&this.observedContainer===i)&&(this.stopObserver(),this.observedContainer=i,this.observer=new MutationObserver(()=>{this.isDecorating||this.scheduleDecorate()}),this.observer.observe(i,{childList:!0,subtree:!0}))}stopObserver(){this.observer&&(this.observer.disconnect(),this.observer=null),this.observedContainer=null}getFileExplorerContainer(){let i=this.config.app.workspace.getLeavesOfType("file-explorer");if(i.length===0)return null;let e=i[0];return e.isDeferred===!0?(typeof e.loadIfDeferred=="function"&&e.loadIfDeferred().then(()=>{this.enabled&&this.scheduleDecorate()}),this.scheduleAttachRetry(),null):e.view.containerEl}scheduleDecorate(){this.cancelDebounce(),this.debounceTimer=setTimeout(()=>{this.debounceTimer=null,this.decorateAll()},rs)}cancelDebounce(){this.debounceTimer&&(clearTimeout(this.debounceTimer),this.debounceTimer=null)}scheduleAttachRetry(){!this.enabled||this.attachRetryTimer||(this.attachRetryTimer=setTimeout(()=>{this.attachRetryTimer=null,this.enabled&&(this.observeFileExplorer(),this.scheduleDecorate())},is))}cancelAttachRetry(){this.attachRetryTimer&&(clearTimeout(this.attachRetryTimer),this.attachRetryTimer=null)}async decorateAll(){if(!this.enabled)return;if(!this.isReady()){this.removeAllDecorations();return}let i=this.getFileExplorerContainer();if(!i){this.observeFileExplorer();return}this.observeFileExplorer();let e=this.getExplorerItems(i),t=[],r=[],s=new Set;for(let a of e){let n=this.getItemPath(a);if(!n)continue;let o=this.isExplorerFileItem(a);t.push({item:a,path:n,isFile:o}),!s.has(n)&&this.needsFetch(n)&&(s.add(n),r.push(n))}await this.loadPrincipalDirectoryIfNeeded(),r.length>0&&await this.fetchAccessForPaths(r),this.isDecorating=!0;try{for(let{item:a,path:n,isFile:o}of t){let l=this.cache.get(n),c=l??this.fallbackEntry(),d=l?this.shouldHideItem(o,l):!1;a.classList.toggle(tr,d),this.applyDecoration(a,c)}}finally{this.isDecorating=!1}}needsFetch(i){if(this.inFlightPaths.has(i))return!1;let e=this.cache.get(i);return e?e.source!=="backend"?Date.now()-e.fetchedAt>=ts:Date.now()-e.fetchedAt>=es:!0}getExplorerItems(i){let e=Array.from(i.querySelectorAll(".nav-file-title, .nav-folder-title"));return e.length>0?e:Array.from(i.querySelectorAll("[data-path]")).filter(t=>!t.classList.contains(ze)&&!t.closest(`.${ze}`)&&!!(t.classList.contains("nav-file-title")||t.classList.contains("nav-folder-title")||t.classList.contains("tree-item-self")||t.closest(".nav-file")||t.closest(".nav-folder")))}isExplorerFileItem(i){return i.classList.contains("nav-file-title")?!0:i.classList.contains("nav-folder-title")?!1:!!i.closest(".nav-file, .nav-folder")?.classList.contains("nav-file")}applyDecoration(i,e){this.removeDecoration(i);let t=createDiv({cls:ze}),r=t.createSpan({cls:`vaultguard-fe-level-dot vaultguard-fe-dot-${e.level}`});if(r.title=this.formatLevel(e.level),e.sharedWith>0){let a=t.createSpan({cls:"vaultguard-fe-share-indicator"}).createSpan({cls:"vaultguard-fe-avatar-stack"}),n=3,o=e.principals.slice(0,n);for(let l of o){let c=a.createSpan({cls:`vaultguard-fe-mini-avatar vaultguard-fe-avatar-${l.level}`});l.type==="role"?(0,rr.setIcon)(c,"users"):l.id==="*"?(0,rr.setIcon)(c,"globe"):c.setText(this.initials(l.id,l.label)),c.title=`${l.label} (${this.formatLevel(l.level)})`}e.sharedWith>n&&a.createSpan({cls:"vaultguard-fe-avatar-overflow",text:`+${e.sharedWith-n}`})}i.appendChild(t)}removeDecoration(i){let e=i.querySelector(`.${ze}`);e&&e.remove()}removeAllDecorations(){let i=this.getFileExplorerContainer();if(i){this.isDecorating=!0;try{let e=Array.from(i.querySelectorAll(`.${ze}`));for(let r of e)r.remove();let t=Array.from(i.querySelectorAll(`.${tr}`));for(let r of t)r.classList.remove(tr)}finally{this.isDecorating=!1}}}shouldHideItem(i,e){return e.level==="none"&&i}fallbackEntry(){return{level:"unknown",sharedWith:0,principals:[],fetchedAt:0,source:"fallback"}}getItemPath(i){let e=i.dataset.path;return e||(i.closest("[data-path]")?.dataset.path??null)}async fetchAccessForPaths(i){if(!this.isReady())return;let e=[],t=[];for(let r of i){let s=this.inFlightPaths.get(r);s?t.push(s):e.push(r)}for(let r=0;r<e.length;r+=zr){let s=e.slice(r,r+zr),a=this.fetchPathDataChunk(s);for(let n of s)this.inFlightPaths.set(n,a);t.push(a),a.finally(()=>{for(let n of s)this.inFlightPaths.get(n)===a&&this.inFlightPaths.delete(n)})}t.length>0&&await Promise.allSettled(t)}async fetchPathDataChunk(i){await Promise.allSettled([this.fetchBatchChunk(i)]),await this.fetchEffectiveLevelsForPaths(i)}async fetchBatchChunk(i){if(this.batchAccessUnavailable){await this.fetchPerPathFallback(i);return}try{let e=await this.config.apiClient.getBatchPathAccess(i),t=new Map(e.map(s=>[this.normalizePath(s.path),s])),r=Date.now();for(let s of i){let a=this.normalizePath(s),n=t.get(a);n&&this.cache.set(s,this.summaryToCacheEntry(n,r))}}catch(e){if(this.shouldSilentlySkipAccessFetch(e))return;if(this.isMissingBatchAccessRoute(e)){this.batchAccessUnavailable=!0,await this.fetchPerPathFallback(i);return}console.warn("[VaultGuard] Batch access fetch failed, falling back to per-path:",e?.message??e),await this.fetchPerPathFallback(i)}}async fetchEffectiveLevelsForPaths(i){if(!this.config.getPermissionLevel)return;let e=Date.now();await Promise.allSettled(i.map(async t=>{let r=await this.config.getPermissionLevel(t);this.mergeEffectiveLevel(t,this.permissionLevelToAccessLevel(r),e)}))}mergeEffectiveLevel(i,e,t){let r=this.cache.get(i);this.cache.set(i,{level:e,sharedWith:r?.sharedWith??0,principals:r?.principals??[],fetchedAt:t,source:r?.source??"level-only"})}async fetchPerPathFallback(i){let e=Date.now();await Promise.allSettled(i.map(async t=>{try{let r=await this.config.apiClient.getPathAccess(t);this.cache.set(t,this.summaryToCacheEntry(r,e))}catch{}}))}isReady(){return this.config.isReady?this.config.isReady():!0}shouldSilentlySkipAccessFetch(i){let e=i instanceof Error?i.message.toLowerCase():String(i).toLowerCase();return e.includes("not authenticated")||e.includes("please log in")||e.includes("session expired")||e.includes("api endpoint appears to be pointing at a website")}isMissingBatchAccessRoute(i){let e=i instanceof Error?i.message.toLowerCase():String(i).toLowerCase();return e.includes("route not found")&&e.includes("/permissions/access/batch")}normalizePath(i){let e=i.trim().replace(/\/+/g,"/");return e.startsWith("/")?e:`/${e}`}summaryToCacheEntry(i,e){let t=i.principals.filter(r=>r.userId!==this.config.currentUserId).filter(r=>r.level!=="none").map(r=>({id:r.userId,label:this.principalLabel(r),level:r.level,type:"user"})).sort((r,s)=>this.levelRank(s.level)-this.levelRank(r.level));return{level:i.currentUserLevel,sharedWith:t.length,principals:t,fetchedAt:e,source:"backend"}}principalLabel(i){if(i.displayName)return i.displayName;if(i.email)return i.email;let e=this.userMap.get(i.userId);return e?_(e):i.userId}async loadUsersIfNeeded(){if(!this.usersLoaded){if(this.usersLoadPromise){await this.usersLoadPromise;return}this.usersLoadPromise=(async()=>{try{let i=await this.config.apiClient.listUsers();this.mergeUsersIntoDirectory(i),this.usersLoaded=!0}catch{this.usersLoaded=!0}finally{this.usersLoadPromise=null}})(),await this.usersLoadPromise}}async loadVaultMembersIfNeeded(){if(!this.vaultMembersLoaded){if(this.vaultMembersLoadPromise){await this.vaultMembersLoadPromise;return}this.vaultMembersLoadPromise=(async()=>{let i=this.config.apiClient.getVaultId,e=typeof i=="function"?i.call(this.config.apiClient):"";if(!e){this.vaultMembersLoaded=!0;return}try{if(typeof this.config.apiClient.listVaultMembers!="function"){this.vaultMembersLoaded=!0;return}let t=await this.config.apiClient.listVaultMembers(e);this.mergeVaultMembersIntoDirectory(t),this.vaultMembersLoaded=!0}catch{this.vaultMembersLoaded=!1}finally{this.vaultMembersLoadPromise=null}})(),await this.vaultMembersLoadPromise}}async loadPrincipalDirectoryIfNeeded(){await Promise.allSettled([this.loadUsersIfNeeded(),this.loadVaultMembersIfNeeded()])}mergeUsersIntoDirectory(i){if(i.length===0)return;let e=new Map(this.users.map(t=>[t.id,t]));for(let t of i)e.set(t.id,t);this.users=[...e.values()],this.userMap=q(this.users)}mergeVaultMembersIntoDirectory(i){if(i.length===0)return;let e=new Map(this.users.map(r=>[r.id,r])),t=!1;for(let r of i){let s=e.get(r.userId);s&&this.shouldKeepExistingIdentity(s,r)||!r.displayName&&!r.email||(e.set(r.userId,{id:r.userId,email:r.email??"",displayName:r.displayName??"",name:r.displayName??"",role:this.mapVaultRoleToUserRole(r.role),status:"active",lastActive:"",createdAt:r.joinedAt,mfaEnabled:!1,deviceCount:0,type:"user"}),t=!0)}t&&(this.users=[...e.values()],this.userMap=q(this.users))}clearUserDirectory(){this.users=[],this.userMap=new Map,this.usersLoaded=!1,this.usersLoadPromise=null,this.vaultMembersLoaded=!1,this.vaultMembersLoadPromise=null}shouldKeepExistingIdentity(i,e){return i.displayName?.trim()||i.name?.trim()?!0:!!(i.email?.trim()&&!e.displayName?.trim())}mapVaultRoleToUserRole(i){switch(i){case"admin":return"admin";case"editor":return"editor";default:return"viewer"}}levelRank(i){switch(i){case"admin":return 3;case"write":return 2;case"read":return 1;default:return 0}}formatLevel(i){switch(i){case"admin":return"Admin";case"write":return"Write";case"read":return"Read";case"none":return"No Access";case"unknown":return"Checking permissions"}}permissionLevelToAccessLevel(i){return i>=3?"admin":i>=2?"write":i>=1?"read":"none"}initials(i,e){if(i==="*")return"*";let t=this.userMap.get(i);return t?Y(t):(e&&e!==i?e:i).split(/[\s@._-]+/).filter(Boolean).slice(0,2).map(a=>a[0]?.toUpperCase()??"").join("")}};var z=require("obsidian");var se="vaultguard-files-view",ss=6e4,as=120,Hr=100,Ct=class extends z.ItemView{constructor(e){super(e);this.config=null;this.ruleCache=new Map;this.accessCache=new Map;this.filterLevel="all";this.filterUser="all";this.filterRole="all";this.filterShared=!1;this.searchQuery="";this.sortMode="name-asc";this.entries=[];this.allRules=[];this.knownUsers=[];this.knownRoles=[];this.userMap=new Map;this.isLoading=!1;this.hasLoadedOnce=!1;this.contentEl_=null;this.revoked=!1;this.revokeReason="";this.leaseExpiresAt=null;this.batchAccessUnavailable=!1;this.userSelectEl=null;this.roleSelectEl=null;this.levelSelectEl=null;this.sortSelectEl=null;this.sharedToggleEl=null;this.searchInputEl=null;this.searchDebounce=null}configure(e){this.config=e}getViewType(){return se}getDisplayText(){return"VaultGuard Files"}getIcon(){return"vaultguard-shield"}async onOpen(){let e=this.containerEl.children[1];if(e.empty(),e.addClass("vaultguard-sidebar"),this.contentEl_=e,!this.config){this.renderNotLoggedIn(e);return}this.renderShell(e),await this.loadEntries()}async onClose(){this.searchDebounce!==null&&(window.clearTimeout(this.searchDebounce),this.searchDebounce=null),this.ruleCache.clear(),this.accessCache.clear(),this.entries=[],this.allRules=[],this.knownUsers=[],this.knownRoles=[],this.userSelectEl=null,this.roleSelectEl=null,this.levelSelectEl=null,this.sortSelectEl=null,this.sharedToggleEl=null,this.searchInputEl=null}async reload(){this.ruleCache.clear(),this.accessCache.clear(),this.userMap=new Map,this.contentEl_&&(this.config&&!this.contentEl_.querySelector(".vaultguard-sb-list")&&(this.contentEl_.empty(),this.renderShell(this.contentEl_)),this.config&&await this.loadEntries())}renderNotLoggedIn(e){let r=e.createDiv({cls:"vaultguard-sb-header"}).createDiv({cls:"vaultguard-sb-title-row"}),s=r.createSpan({cls:"vaultguard-sb-title-icon"});(0,z.setIcon)(s,"vaultguard-shield"),r.createSpan({cls:"vaultguard-sb-title-text",text:"VaultGuard Files"});let a=e.createDiv({cls:"vaultguard-sb-empty"}),n=a.createDiv({cls:"vaultguard-sb-empty-icon"});(0,z.setIcon)(n,"lock"),a.createEl("p",{text:"Log in to VaultGuard to see file permissions and sharing status."}),a.createEl("p",{text:'Use the shield icon in the ribbon or run "VaultGuard: Login" from the command palette.',cls:"vaultguard-sb-empty-hint"})}showRevocationNotice(e){this.revoked=!0,this.revokeReason=e,this.contentEl_&&(this.contentEl_.empty(),this.renderRevocationNotice(this.contentEl_))}updateLeaseExpiry(e){this.leaseExpiresAt=e;let t=this.contentEl_?.querySelector(".vaultguard-lease-warning");t&&this.renderLeaseExpiryContent(t)}renderRevocationNotice(e){let t=e.createDiv({cls:"vaultguard-revocation-notice"});t.createEl("h3",{text:"Access Revoked"}),t.createEl("p",{text:"Your access to this vault has been revoked by an administrator."}),this.revokeReason&&t.createEl("p",{text:`Reason: ${this.revokeReason}`}),t.createEl("p",{text:"All locally cached data has been securely wiped. If you believe this is an error, contact your organization administrator."}),t.createEl("p",{text:"To regain access, you must be re-invited to the organization. A new invitation will create fresh encryption keys.",cls:"setting-item-description"})}renderLeaseStatus(e){if(!this.leaseExpiresAt)return;let t=e.createDiv({cls:"vaultguard-lease-warning"});this.renderLeaseExpiryContent(t)}renderLeaseExpiryContent(e){if(e.empty(),!this.leaseExpiresAt){e.style.display="none";return}let t=this.leaseExpiresAt-Date.now(),r=Math.max(0,Math.floor(t/(1e3*60*60))),s=Math.max(0,Math.floor(t%(1e3*60*60)/(1e3*60)));e.style.display="",t<=0?(e.addClass("mod-critical"),e.setText("Offline key lease expired. Reconnect to continue accessing files.")):t<1800*1e3?(e.addClass("mod-critical"),e.setText(`Key lease expires in ${s}m. Reconnect soon to avoid losing offline access.`)):t<7200*1e3?(e.removeClass("mod-critical"),e.setText(`Offline access: ${r}h ${s}m remaining`)):e.style.display="none"}renderShell(e){if(this.revoked){this.renderRevocationNotice(e);return}this.renderLeaseStatus(e);let t=e.createDiv({cls:"vaultguard-sb-header"}),r=t.createDiv({cls:"vaultguard-sb-title-row"}),s=r.createSpan({cls:"vaultguard-sb-title-icon"});(0,z.setIcon)(s,"vaultguard-shield"),r.createSpan({cls:"vaultguard-sb-title-text",text:"VaultGuard Files"});let a=r.createEl("button",{cls:"vaultguard-sb-menu-btn clickable-icon",attr:{"aria-label":"VaultGuard menu",title:"VaultGuard menu"}});(0,z.setIcon)(a,"more-horizontal"),a.addEventListener("click",P=>{P.preventDefault(),P.stopPropagation(),this.config?.onOpenMenu?this.config.onOpenMenu(P):this.config?.onOpenSettings?.()});let n=r.createEl("button",{cls:"vaultguard-sb-refresh-btn clickable-icon",attr:{"aria-label":"Refresh"}});(0,z.setIcon)(n,"refresh-cw"),n.addEventListener("click",()=>this.reload());let l=t.createDiv({cls:"vaultguard-sb-search-row"}).createDiv({cls:"vaultguard-sb-search-wrap"}),c=l.createSpan({cls:"vaultguard-sb-search-icon"});(0,z.setIcon)(c,"search");let d=l.createEl("input",{cls:"vaultguard-sb-search",attr:{placeholder:"Filter files...",type:"text",spellcheck:"false"}});this.searchInputEl=d;let u=l.createEl("button",{cls:"vaultguard-sb-search-clear",attr:{"aria-label":"Clear search",type:"button",title:"Clear search"}});(0,z.setIcon)(u,"x"),u.style.display="none",u.addEventListener("click",P=>{P.preventDefault(),P.stopPropagation(),this.clearSearch(),d.focus()}),d.addEventListener("input",()=>{let P=d.value;u.style.display=P.length>0?"":"none",this.searchDebounce!==null&&window.clearTimeout(this.searchDebounce),this.searchDebounce=window.setTimeout(()=>{this.searchDebounce=null,this.searchQuery=P.toLowerCase().trim(),this.renderEntries()},as)}),d.addEventListener("keydown",P=>{P.key==="Escape"&&d.value.length>0&&(P.preventDefault(),P.stopPropagation(),this.clearSearch())});let p=t.createDiv({cls:"vaultguard-sb-filter-row"}),f=p.createEl("select",{cls:"vaultguard-sb-filter-select",attr:{"aria-label":"Filter by access level"}});for(let[P,g]of[["all","All Levels"],["admin","Admin"],["write","Write"],["read","Read"],["none","No Access"]])f.createEl("option",{value:P,text:g});f.value=this.filterLevel,f.addEventListener("change",()=>{this.filterLevel=f.value,this.renderEntries()}),this.levelSelectEl=f;let m=p.createEl("label",{cls:"vaultguard-sb-filter-toggle",attr:{title:"Show only files shared with at least one other user or role"}}),v=m.createEl("input",{type:"checkbox"});v.checked=this.filterShared,m.createSpan({text:"Shared only"}),v.addEventListener("change",()=>{this.filterShared=v.checked,this.renderEntries()}),this.sharedToggleEl=v;let A=t.createDiv({cls:"vaultguard-sb-filter-row"}),k=A.createEl("select",{cls:"vaultguard-sb-filter-select",attr:{"aria-label":"Filter by user"}});k.createEl("option",{value:"all",text:"All Users"}),k.addEventListener("change",()=>{this.filterUser=k.value,this.renderEntries()}),this.userSelectEl=k;let I=A.createEl("select",{cls:"vaultguard-sb-filter-select",attr:{"aria-label":"Filter by role"}});I.createEl("option",{value:"all",text:"All Roles"}),I.addEventListener("change",()=>{this.filterRole=I.value,this.renderEntries()}),this.roleSelectEl=I;let V=t.createDiv({cls:"vaultguard-sb-filter-row"}).createEl("select",{cls:"vaultguard-sb-filter-select",attr:{"aria-label":"Sort order"}});for(let[P,g]of[["name-asc","Sort: Name A-Z"],["name-desc","Sort: Name Z-A"],["level-desc","Sort: Access High \u2192 Low"],["shared-desc","Sort: Most Shared First"]])V.createEl("option",{value:P,text:g});V.value=this.sortMode,V.addEventListener("change",()=>{this.sortMode=V.value,this.renderEntries()}),this.sortSelectEl=V,t.createDiv({cls:"vaultguard-sb-chips"}),e.createDiv({cls:"vaultguard-sb-list"})}clearSearch(){if(this.searchInputEl){this.searchInputEl.value="";let e=this.searchInputEl.parentElement?.querySelector(".vaultguard-sb-search-clear");e&&(e.style.display="none")}this.searchDebounce!==null&&(window.clearTimeout(this.searchDebounce),this.searchDebounce=null),this.searchQuery="",this.renderEntries()}clearAllFilters(){if(this.filterLevel="all",this.filterUser="all",this.filterRole="all",this.filterShared=!1,this.searchQuery="",this.levelSelectEl&&(this.levelSelectEl.value="all"),this.userSelectEl&&(this.userSelectEl.value="all"),this.roleSelectEl&&(this.roleSelectEl.value="all"),this.sharedToggleEl&&(this.sharedToggleEl.checked=!1),this.searchInputEl){this.searchInputEl.value="";let e=this.searchInputEl.parentElement?.querySelector(".vaultguard-sb-search-clear");e&&(e.style.display="none")}this.searchDebounce!==null&&(window.clearTimeout(this.searchDebounce),this.searchDebounce=null),this.renderEntries()}hasActiveFilters(){return this.filterLevel!=="all"||this.filterUser!=="all"||this.filterRole!=="all"||this.filterShared||this.searchQuery.length>0}async loadEntries(){if(!(!this.config||!this.contentEl_)){this.isLoading=!0,this.renderEntries();try{let e=this.app.vault.getAllLoadedFiles(),t=[];for(let a of e)a instanceof z.TFile&&t.push(a.path);this.allRules=[];let[r,s]=await Promise.all([this.loadRulesIfAllowed(),this.loadAccessSummaries(t),this.loadUsersIfNeeded()]).then(([a,n])=>[a,n]);this.allRules=r,this.allRules.length>0&&this.ruleCache.set("__all__",{rules:this.allRules,fetchedAt:Date.now()}),this.mergePathAccessIntoDirectory([...s.values()]),this.extractUsersAndRoles(this.allRules,[...s.values()]),this.populateFilterDropdowns(),this.entries=t.map(a=>this.buildEntry(a,this.allRules,s.get(this.normalizePath(a))))}catch{this.entries=[]}finally{this.isLoading=!1,this.hasLoadedOnce=!0,this.renderEntries()}}}async loadUsersIfNeeded(){if(!(this.userMap.size>0))try{let e=await this.config.apiClient.listUsers();this.userMap=q(e)}catch{}}async loadRulesIfAllowed(){if(!this.config||!this.isViewerEffectivelyAdmin())return[];try{return await this.config.apiClient.getPermissions()}catch{return[]}}async loadAccessSummaries(e){let t=new Map;if(!this.config||e.length===0)return t;let r=[],s=Date.now();for(let a of e){let n=this.normalizePath(a),o=this.accessCache.get(n);o&&s-o.fetchedAt<ss?t.set(n,o.summary):r.push(a)}for(let a=0;a<r.length;a+=Hr){let n=r.slice(a,a+Hr);for(let o of await this.fetchAccessChunk(n)){let l=this.normalizePath(o.path);this.accessCache.set(l,{summary:o,fetchedAt:s}),t.set(l,o)}}return await this.applyEffectiveLevels(e,t,s),t}async fetchAccessChunk(e){if(!this.config)return[];if(this.batchAccessUnavailable)return this.fetchAccessPerPath(e);try{let t=await this.config.apiClient.getBatchPathAccess(e),r=new Map(t.map(s=>[this.normalizePath(s.path),s]));return e.flatMap(s=>{let a=this.normalizePath(s),n=r.get(a);return n?[n]:[]})}catch(t){return this.isMissingBatchAccessRoute(t)&&(this.batchAccessUnavailable=!0),this.fetchAccessPerPath(e)}}async fetchAccessPerPath(e){return this.config?(await Promise.allSettled(e.map(r=>this.config.apiClient.getPathAccess(r)))).flatMap(r=>r.status==="fulfilled"?[r.value]:[]):[]}async applyEffectiveLevels(e,t,r){this.config?.getPermissionLevel&&await Promise.allSettled(e.map(async s=>{let a=this.permissionLevelToAccessLevel(await this.config.getPermissionLevel(s)),n=this.normalizePath(s),o=t.get(n),l=o?{...o,currentUserLevel:a}:{path:n,currentUserLevel:a,principals:[]};t.set(n,l),this.accessCache.set(n,{summary:l,fetchedAt:r})}))}isMissingBatchAccessRoute(e){let t=e instanceof Error?e.message.toLowerCase():String(e).toLowerCase();return t.includes("route not found")&&t.includes("/permissions/access/batch")}resolveUserLabel(e){if(e==="*")return"Everyone";let t=this.userMap.get(e);return t?_(t):e}principalLabel(e){return e.displayName?e.displayName:e.email?e.email:this.resolveUserLabel(e.userId)}mergePathAccessIntoDirectory(e){if(e.length===0)return;let t=new Map;for(let r of this.userMap.values())t.set(r.id,r);for(let r of e)for(let s of r.principals)t.has(s.userId)||!s.displayName&&!s.email||t.set(s.userId,{id:s.userId,email:s.email??"",displayName:s.displayName??"",name:s.displayName??"",role:this.mapVaultRoleToUserRole(s.role),status:"active",lastActive:"",createdAt:"",mfaEnabled:!1,deviceCount:0,type:"user"});this.userMap=q([...t.values()])}mapVaultRoleToUserRole(e){return e==="admin"||e==="editor"||e==="viewer"?e:"custom"}extractUsersAndRoles(e,t=[]){let r=new Map,s=new Set,a=this.config?.currentUserId??"",n=new Set;for(let o of this.userMap.values())n.has(o.id)||(n.add(o.id),o.id!==a&&o.status!=="revoked"&&r.set(o.id,_(o)));for(let o of t)for(let l of o.principals)l.role&&s.add(l.role),l.userId!==a&&l.level!=="none"&&!r.has(l.userId)&&r.set(l.userId,this.principalLabel(l));for(let o of e)o.role&&s.add(o.role),o.userId==="*"&&r.set("*","Everyone"),o.userId&&o.userId!=="*"&&o.userId!==a&&!r.has(o.userId)&&r.set(o.userId,this.resolveUserLabel(o.userId));this.knownUsers=[...r.entries()].map(([o,l])=>({id:o,label:l})).sort((o,l)=>o.id==="*"&&l.id!=="*"?-1:l.id==="*"&&o.id!=="*"?1:o.label.localeCompare(l.label)),this.knownRoles=[...s].sort()}populateFilterDropdowns(){if(this.userSelectEl){let e=this.userSelectEl.value;for(;this.userSelectEl.options.length>1;)this.userSelectEl.remove(1);for(let t of this.knownUsers)this.userSelectEl.createEl("option",{value:t.id,text:t.id==="*"?"Everyone (*)":t.label});Array.from(this.userSelectEl.options).some(t=>t.value===e)?this.userSelectEl.value=e:(this.userSelectEl.value="all",this.filterUser="all")}if(this.roleSelectEl){let e=this.roleSelectEl.value;for(;this.roleSelectEl.options.length>1;)this.roleSelectEl.remove(1);for(let t of this.knownRoles)this.roleSelectEl.createEl("option",{value:t,text:t});Array.from(this.roleSelectEl.options).some(t=>t.value===e)?this.roleSelectEl.value=e:(this.roleSelectEl.value="all",this.filterRole="all")}}buildEntry(e,t,r){let s=e.split("/").pop()??e;if(r){let p=r.principals.filter(v=>v.userId!==this.config.currentUserId).filter(v=>v.level!=="none").map(v=>({id:v.userId,label:this.principalLabel(v),level:v.level,type:"user",role:v.role})).sort((v,A)=>{let k=this.levelRank(A.level)-this.levelRank(v.level);return k!==0?k:v.label.localeCompare(A.label)}),f=new Set,m=new Set;for(let v of p)f.add(v.id),v.role&&m.add(v.role);return{path:e,name:s,lowerPath:e.toLowerCase(),lowerName:s.toLowerCase(),level:r.currentUserLevel,sharedWith:p.length,principals:p.map(({id:v,label:A,level:k,type:I})=>({id:v,label:A,level:k,type:I})),userIds:f,roleIds:m}}let a=t.filter(p=>this.ruleMatchesPath(p.pathPattern,e)),n=this.resolveMyLevel(a),o=new Map,l=(p,f,m,v)=>!p||m>p.specificity?!0:m<p.specificity?!1:v&&!p.denied?!0:!v&&p.denied?!1:this.levelRank(f)>this.levelRank(p.level);for(let p of a){let f=p.effect==="deny"?"none":this.ruleLevelString(p),m=this.patternSpecificity(p.pathPattern),v=p.effect==="deny";if(p.role){let k=`role:${p.role}`;if(!l(o.get(k),f,m,v))continue;o.set(k,{id:p.role,label:p.role,level:f,type:"role",specificity:m,denied:v});continue}if(p.userId===this.config.currentUserId)continue;let A=`user:${p.userId}`;l(o.get(A),f,m,v)&&o.set(A,{id:p.userId,label:this.resolveUserLabel(p.userId),level:f,type:"user",specificity:m,denied:v})}let c=[...o.values()].filter(p=>p.level!=="none").map(({id:p,label:f,level:m,type:v})=>({id:p,label:f,level:m,type:v})).sort((p,f)=>this.levelRank(f.level)-this.levelRank(p.level)),d=new Set,u=new Set;for(let p of c)p.type==="user"?d.add(p.id):u.add(p.id);return{path:e,name:s,lowerPath:e.toLowerCase(),lowerName:s.toLowerCase(),level:n,sharedWith:c.length,principals:c,userIds:d,roleIds:u}}renderEntries(){if(!this.contentEl_)return;let e=this.contentEl_.querySelector(".vaultguard-sb-list"),t=this.contentEl_.querySelector(".vaultguard-sb-chips");if(!e)return;if(e.empty(),t&&t.empty(),this.isLoading){let l=e.createDiv({cls:"vaultguard-sb-loading"}),c=l.createSpan({cls:"vaultguard-sb-spinner"});(0,z.setIcon)(c,"loader"),l.createSpan({text:"Loading permissions..."});return}t&&this.hasActiveFilters()&&this.renderFilterChips(t);let r=this.entries.length,s=this.entries.length,a=this.entries;if(this.isViewerEffectivelyAdmin()||(a=a.filter(l=>l.level!=="none")),this.filterLevel!=="all"&&(a=a.filter(l=>l.level===this.filterLevel)),this.filterShared&&(a=a.filter(l=>l.sharedWith>0)),this.filterUser!=="all"){let l=this.filterUser;a=a.filter(c=>c.userIds.has(l))}if(this.filterRole!=="all"){let l=this.filterRole;a=a.filter(c=>c.roleIds.has(l))}if(this.searchQuery){let l=this.searchQuery;a=a.filter(c=>c.lowerName.includes(l)||c.lowerPath.includes(l))}a=this.applySort(a);let n=e.createDiv({cls:"vaultguard-sb-summary"});this.hasActiveFilters()&&a.length!==r?n.createSpan({text:`${a.length} of ${r} files`,cls:"vaultguard-sb-summary-count"}):n.createSpan({text:`${a.length} ${a.length===1?"file":"files"}`,cls:"vaultguard-sb-summary-count"});let o=a.filter(l=>l.sharedWith>0).length;if(o>0&&n.createSpan({text:`${o} shared`,cls:"vaultguard-sb-summary-shared"}),a.length===0){let l=e.createDiv({cls:"vaultguard-sb-empty"}),c=l.createDiv({cls:"vaultguard-sb-empty-icon"});if(this.hasActiveFilters()){(0,z.setIcon)(c,"filter"),l.createEl("p",{text:"No files match the current filters."}),l.createEl("button",{cls:"vaultguard-sb-empty-action",text:"Clear filters"}).addEventListener("click",()=>this.clearAllFilters());return}if(!this.isViewerEffectivelyAdmin()&&s>0){(0,z.setIcon)(c,"lock"),l.createEl("p",{text:"You don't have read permission to any files in this vault yet."}),l.createEl("p",{text:"Ask your organization admin to grant you access. Newly granted permissions appear here within a few seconds of the next sync.",cls:"vaultguard-sb-empty-hint"});return}(0,z.setIcon)(c,"file-x"),l.createEl("p",{text:"No files in this vault yet."}),l.createEl("p",{text:this.isViewerEffectivelyAdmin()?"Create a note in Obsidian and it will sync here automatically.":"When your admin adds files (or grants you access to existing ones), they'll appear here.",cls:"vaultguard-sb-empty-hint"});return}for(let l of a)this.renderEntry(e,l)}renderFilterChips(e){let t=(s,a)=>{let n=e.createDiv({cls:"vaultguard-sb-chip"});n.createSpan({cls:"vaultguard-sb-chip-label",text:s});let o=n.createEl("button",{cls:"vaultguard-sb-chip-clear",attr:{"aria-label":`Remove ${s}`,type:"button",title:"Remove filter"}});(0,z.setIcon)(o,"x"),o.addEventListener("click",l=>{l.preventDefault(),l.stopPropagation(),a()})};if(this.searchQuery&&t(`Search: "${this.searchQuery}"`,()=>this.clearSearch()),this.filterLevel!=="all"&&t(`Level: ${this.formatLevel(this.filterLevel)}`,()=>{this.filterLevel="all",this.levelSelectEl&&(this.levelSelectEl.value="all"),this.renderEntries()}),this.filterShared&&t("Shared only",()=>{this.filterShared=!1,this.sharedToggleEl&&(this.sharedToggleEl.checked=!1),this.renderEntries()}),this.filterUser!=="all"){let s=this.knownUsers.find(n=>n.id===this.filterUser)?.label??this.filterUser,a=this.filterUser==="*"?"Everyone":s;t(`User: ${a}`,()=>{this.filterUser="all",this.userSelectEl&&(this.userSelectEl.value="all"),this.renderEntries()})}this.filterRole!=="all"&&t(`Role: ${this.filterRole}`,()=>{this.filterRole="all",this.roleSelectEl&&(this.roleSelectEl.value="all"),this.renderEntries()}),(this.searchQuery?1:0)+(this.filterLevel!=="all"?1:0)+(this.filterShared?1:0)+(this.filterUser!=="all"?1:0)+(this.filterRole!=="all"?1:0)>1&&e.createEl("button",{cls:"vaultguard-sb-chip-clear-all",text:"Clear all",attr:{type:"button"}}).addEventListener("click",a=>{a.preventDefault(),this.clearAllFilters()})}applySort(e){let t=[...e];switch(this.sortMode){case"name-asc":t.sort((r,s)=>r.lowerName.localeCompare(s.lowerName)||r.lowerPath.localeCompare(s.lowerPath));break;case"name-desc":t.sort((r,s)=>s.lowerName.localeCompare(r.lowerName)||s.lowerPath.localeCompare(r.lowerPath));break;case"level-desc":t.sort((r,s)=>{let a=this.levelRank(s.level)-this.levelRank(r.level);return a!==0?a:r.lowerName.localeCompare(s.lowerName)});break;case"shared-desc":t.sort((r,s)=>{let a=s.sharedWith-r.sharedWith;return a!==0?a:r.lowerName.localeCompare(s.lowerName)});break}return t}renderEntry(e,t){let r=e.createDiv({cls:"vaultguard-sb-entry"});r.addEventListener("click",()=>{let u=this.app.vault.getAbstractFileByPath(t.path);u instanceof z.TFile&&this.app.workspace.getLeaf(!1).openFile(u)});let s=r.createDiv({cls:"vaultguard-sb-entry-left"}),a=s.createSpan({cls:"vaultguard-sb-entry-icon"});(0,z.setIcon)(a,"file-text");let n=s.createDiv({cls:"vaultguard-sb-entry-info"}),o=n.createDiv({cls:"vaultguard-sb-entry-name"});this.renderHighlighted(o,t.name,this.searchQuery);let l=t.path.includes("/")?t.path.substring(0,t.path.lastIndexOf("/")):"";if(l){let u=n.createDiv({cls:"vaultguard-sb-entry-path"});this.renderHighlighted(u,l,this.searchQuery)}let c=r.createDiv({cls:"vaultguard-sb-entry-right"});if(c.createSpan({cls:`vaultguard-sb-badge vaultguard-sb-badge-${t.level}`}).setText(this.formatLevel(t.level)),t.sharedWith>0){let u=c.createDiv({cls:"vaultguard-sb-avatars"}),p=4,f=t.principals.slice(0,p);for(let m of f){let v=u.createSpan({cls:`vaultguard-sb-avatar vaultguard-sb-avatar-${m.level}`});m.type==="role"?(0,z.setIcon)(v,"users"):m.id==="*"?(0,z.setIcon)(v,"globe"):v.setText(this.initials(m.id)),v.title=`${m.label} (${this.formatLevel(m.level)})`}t.sharedWith>p&&u.createSpan({cls:"vaultguard-sb-avatar-overflow",text:`+${t.sharedWith-p}`})}}renderHighlighted(e,t,r){if(!r){e.setText(t);return}let s=t.toLowerCase(),a=0,n=s.indexOf(r,a);if(n===-1){e.setText(t);return}for(;n!==-1;)n>a&&e.appendText(t.slice(a,n)),e.createSpan({cls:"vaultguard-sb-match",text:t.slice(n,n+r.length)}),a=n+r.length,n=s.indexOf(r,a);a<t.length&&e.appendText(t.slice(a))}normalizePath(e){let t=e.trim().replace(/\/+/g,"/");return t.startsWith("/")?t:`/${t}`}ruleMatchesPath(e,t){let r=e.replace(/^\/+/,"").replace(/\/+$/,""),s=t.replace(/^\/+/,"").replace(/\/+$/,"");return s===r||r.endsWith("/")&&s.startsWith(r)||!r.includes("*")&&s.startsWith(r+"/")||r==="*"||r==="**"?!0:r.includes("*")?this.matchGlob(s,r):!1}matchGlob(e,t){let r="^",s=0;for(;s<t.length;){let a=t[s];a==="*"?t[s+1]==="*"?t[s+2]==="/"?(r+="(?:.+/)?",s+=3):(r+=".*",s+=2):(r+="[^/]*",s++):".+^${}()|[]\\".includes(a)?(r+="\\"+a,s++):(r+=a,s++)}r+="$";try{return new RegExp(r).test(e)}catch{return!1}}isViewerEffectivelyAdmin(){let e=this.config?.currentUserRole;return e==="admin"||e==="owner"}resolveMyLevel(e){if(!this.config)return"read";let t=this.config.currentUserRole;if(t==="admin"||t==="owner")return"admin";let r="none",s=-1;for(let a of e){if(!(a.userId===this.config.currentUserId||a.userId==="*"||a.role&&t===a.role))continue;let o=this.patternSpecificity(a.pathPattern);if(o>s)s=o,r=a.effect==="deny"?"none":this.ruleLevelString(a);else if(o===s){let l=a.effect==="deny"?"none":this.ruleLevelString(a);this.levelRank(l)>this.levelRank(r)&&(r=l)}}return r==="none"&&s===-1?t==="editor"?"write":"read":r}ruleLevelString(e){return e.actions.includes("admin")?"admin":e.actions.includes("write")||e.actions.includes("delete")?"write":e.actions.includes("read")?"read":"none"}patternSpecificity(e){let t=0;return t+=(e.match(/\//g)||[]).length*10,e.includes("*")||(t+=100),e.includes("**")&&(t-=50),t+=e.length,t}levelRank(e){switch(e){case"admin":return 3;case"write":return 2;case"read":return 1;default:return 0}}permissionLevelToAccessLevel(e){return e>=3?"admin":e>=2?"write":e>=1?"read":"none"}formatLevel(e){switch(e){case"admin":return"Admin";case"write":return"Write";case"read":return"Read";default:return"No Access"}}initials(e){if(e==="*")return"*";let t=this.userMap.get(e);return t?Y(t):e.split(/[\s@._-]+/).filter(Boolean).slice(0,2).map(s=>s[0]?.toUpperCase()??"").join("")}};var Ue=["vaultguard_list","vaultguard_search","vaultguard_read","vaultguard_apply_patch","vaultguard_create"],ns="2025-06-18",qr={list:{internal:"vaultguard_list",description:"List vault files visible to this lease, with their effective permission. Filters out hidden, excluded, and out-of-scope paths.",inputSchema:{type:"object",properties:{scope:{type:"string",description:"Optional vault-relative glob to narrow within the lease scope (e.g. /project-x/**)."},limit:{type:"integer",minimum:1,description:"Maximum number of files to return."}},additionalProperties:!1}},search:{internal:"vaultguard_search",description:"Search the visible text files for a literal substring. Returns path, line number, and a short snippet for each match.",inputSchema:{type:"object",required:["query"],properties:{query:{type:"string",description:"Literal substring to search for (case-insensitive)."},scope:{type:"string",description:"Optional vault-relative glob to narrow within the lease scope."},limit:{type:"integer",minimum:1}},additionalProperties:!1}},read:{internal:"vaultguard_read",description:"Read a single text file from the vault as plaintext. Goes through VaultGuard's permission and at-rest decrypt path; refuses non-text files and out-of-scope paths.",inputSchema:{type:"object",required:["path"],properties:{path:{type:"string",description:"Vault-relative path (e.g. project-x/Plan.md)."},maxBytes:{type:"integer",minimum:1,description:"Truncate the response to at most this many UTF-8 bytes."}},additionalProperties:!1}},apply_patch:{internal:"vaultguard_apply_patch",description:"Apply a unified diff (with @@ hunks) to an existing text file. The hunks must match the current file exactly. Subject to writeMode (deny / confirm / allow) on the lease.",inputSchema:{type:"object",required:["path","diff"],properties:{path:{type:"string",description:"Vault-relative path of the file to patch."},diff:{type:"string",description:"Unified diff with @@ hunk headers."}},additionalProperties:!1}},create:{internal:"vaultguard_create",description:"Create a new text file with the given content. Refuses to overwrite an existing file. Subject to writeMode on the lease.",inputSchema:{type:"object",required:["path","content"],properties:{path:{type:"string",description:"Vault-relative path of the new file."},content:{type:"string",description:"File content as a UTF-8 string."}},additionalProperties:!1}}},os=30,ls=1,cs=120,ds=256*1024,us=1024*1024,hs=50,ps=200,gs=1e3,Wr=5e3,fs=1024*1024,ms=47711,jr=1,Kr="session",vs=new Set([".md",".txt",".canvas",".csv",".tsv",".json",".yaml",".yml"]),At=class{constructor(i){this.leases=new Map;this.tokenIndex=new Map;this.server=null;this.serverEndpoint=null;this.serverMcpEndpoint=null;this.persistedLoaded=!1;this.deps=i}async loadPersistedLeases(){if(this.persistedLoaded)return{restored:0,dropped:0};if(!this.deps.persistence)return{restored:0,dropped:0};let i=this.deps.getSession(),e=this.deps.getServerVaultId();if(!i||!e)return{restored:0,dropped:0};let t=null;try{let a=await this.deps.persistence.readEnvelope();if(!a)return this.persistedLoaded=!0,{restored:0,dropped:0};let n=JSON.parse(a);if(n.version!==jr||!Array.isArray(n.leases))throw new Error("Unexpected envelope shape.");t=n}catch(a){return this.deps.log(`Failed to read persisted agent leases: ${a instanceof Error?a.message:String(a)}`),this.persistedLoaded=!0,{restored:0,dropped:0}}let r=0,s=0;for(let a of t.leases){if(a.sessionUserId!==i.userId||a.sessionVaultId!==e){s++;continue}let n={leaseId:a.leaseId,agentName:a.agentName,scopes:[...a.scopes],allowRead:a.allowRead,writeMode:a.writeMode,createdAt:a.createdAt,expiresAt:Kr,expiresAtMs:Number.POSITIVE_INFINITY,persistent:!0,maxReadBytes:a.maxReadBytes,maxSearchResults:a.maxSearchResults,tools:[...Ue],token:a.token,sessionUserId:a.sessionUserId,sessionVaultId:a.sessionVaultId};this.leases.set(n.leaseId,n),this.tokenIndex.set(n.token,n.leaseId),r++}return this.persistedLoaded=!0,r>0&&this.deps.emitAudit("bridge.session_bound",null,{restored:r,dropped:s,userId:i.userId,vaultId:e}),s>0&&(this.deps.log(`Dropped ${s} persisted agent lease(s) belonging to a different user/vault.`),await this.persistLeases().catch(a=>this.deps.log(`Failed to rewrite agent lease envelope after dropping orphans: ${a instanceof Error?a.message:String(a)}`))),{restored:r,dropped:s}}async revokePersistentLeasesForSessionEnd(i){let e=this.leases.size;return this.leases.clear(),this.tokenIndex.clear(),this.persistedLoaded=!1,this.deps.persistence&&await this.deps.persistence.deleteEnvelope().catch(t=>this.deps.log(`Failed to delete persisted agent leases on session end: ${t instanceof Error?t.message:String(t)}`)),e>0&&this.deps.emitAudit("bridge.session_unbound",null,{revoked:e,reason:i}),e}getToolSurface(){return{describe:()=>this.describe(),list:(i,e)=>this.list(i,e),search:(i,e)=>this.search(i,e),read:(i,e)=>this.read(i,e),applyPatch:(i,e)=>this.applyPatch(i,e),create:(i,e)=>this.create(i,e)}}describe(){this.pruneExpiredLeases();let i=this.serverEndpoint&&this.serverMcpEndpoint?{endpoint:this.serverEndpoint,mcpEndpoint:this.serverMcpEndpoint,leaseIds:Array.from(this.leases.keys()),tools:Ue}:null;return{tools:Ue,activeLeases:Array.from(this.leases.values()).map(e=>this.summarizeLease(e)),server:i}}createLease(i={}){this.assertBridgePrereqs();let e=i.persistent===!0,t=this.normalizeScopes(i.scope??"/**"),r=i.writeMode??"deny";if(e){if(!this.deps.persistence)throw new Error("VaultGuard agent bridge cannot mint a persistent lease until at-rest encryption is initialized.");if(r==="allow")throw new Error('Persistent agent bridge leases cannot use writeMode "allow" \u2014 "confirm" still allows writes but surfaces each one to the user. Use "deny" or "confirm".')}let s=this.clampNumber(i.ttlMinutes??os,ls,cs),a=Date.now(),n=this.clampNumber(i.maxReadBytes??ds,1024,us),o=this.clampNumber(i.maxSearchResults??hs,1,ps),l=this.deps.getSession(),c=this.deps.getServerVaultId(),d={leaseId:this.randomId("agl"),agentName:this.cleanAgentName(i.agentName),scopes:t,allowRead:i.allowRead!==!1,writeMode:r,createdAt:new Date(a).toISOString(),expiresAt:e?Kr:new Date(a+s*6e4).toISOString(),expiresAtMs:e?Number.POSITIVE_INFINITY:a+s*6e4,persistent:e,maxReadBytes:n,maxSearchResults:o,tools:Ue,token:this.randomId("agt"),sessionUserId:e?l?.userId??null:null,sessionVaultId:e&&c||null};return this.leases.set(d.leaseId,d),this.tokenIndex.set(d.token,d.leaseId),e&&this.persistLeases().catch(u=>{throw this.leases.delete(d.leaseId),this.tokenIndex.delete(d.token),u}),this.deps.log(`Agent bridge lease ${d.leaseId} created for ${d.agentName} (${d.scopes.join(", ")}, ${e?"persistent":"ephemeral"})`),this.deps.emitAudit("bridge.lease_created",null,{leaseId:d.leaseId,agentName:d.agentName,scopes:d.scopes,writeMode:d.writeMode,allowRead:d.allowRead,persistent:e,ttlMinutes:e?null:s,sessionUserId:d.sessionUserId,sessionVaultId:d.sessionVaultId}),this.summarizeLeaseWithSecret(d)}revokeLease(i){let e=this.leases.get(i);return e?(this.leases.delete(i),this.tokenIndex.delete(e.token),e.persistent&&this.persistLeases().catch(t=>this.deps.log(`Failed to persist lease envelope after revoke: ${t instanceof Error?t.message:String(t)}`)),this.deps.emitAudit("bridge.lease_revoked",null,{leaseId:i,agentName:e.agentName,persistent:e.persistent}),!0):!1}revokeAllLeases(){let i=[];for(let e of this.leases.values())e.persistent&&i.push(e.leaseId);this.leases.clear(),this.tokenIndex.clear(),i.length>0&&(this.persistLeases().catch(e=>this.deps.log(`Failed to clear lease envelope after revokeAll: ${e instanceof Error?e.message:String(e)}`)),this.deps.emitAudit("bridge.lease_revoked",null,{leaseIds:i,scope:"all"}))}rotateLeaseToken(i){let e=this.requireLease(i),t=e.token;return e.token=this.randomId("agt"),this.tokenIndex.delete(t),this.tokenIndex.set(e.token,e.leaseId),e.persistent&&this.persistLeases().catch(r=>this.deps.log(`Failed to persist lease envelope after token rotate: ${r instanceof Error?r.message:String(r)}`)),this.deps.emitAudit("bridge.lease_token_rotated",null,{leaseId:i,agentName:e.agentName,persistent:e.persistent}),this.summarizeLeaseWithSecret(e)}async persistLeases(){if(!this.deps.persistence)return;let i=Array.from(this.leases.values()).filter(t=>t.persistent);if(i.length===0){await this.deps.persistence.deleteEnvelope();return}let e={version:jr,leases:i.map(t=>({leaseId:t.leaseId,token:t.token,agentName:t.agentName,scopes:[...t.scopes],allowRead:t.allowRead,writeMode:t.writeMode,createdAt:t.createdAt,maxReadBytes:t.maxReadBytes,maxSearchResults:t.maxSearchResults,sessionUserId:t.sessionUserId??"",sessionVaultId:t.sessionVaultId??""}))};await this.deps.persistence.writeEnvelope(JSON.stringify(e))}async startHttpServer(){if(this.server&&this.serverEndpoint)return this.getServerInfo();let i=this.loadNodeHttp(),e=await this.bindServer(i),t=e.address();if(!t||typeof t=="string")throw e.close(),new Error("VaultGuard agent bridge could not determine its localhost port.");return this.server=e,this.serverEndpoint=`http://127.0.0.1:${t.port}/rpc`,this.serverMcpEndpoint=`http://127.0.0.1:${t.port}/mcp`,this.deps.log(`Agent bridge server listening on ${this.serverEndpoint} (MCP at ${this.serverMcpEndpoint})`),this.getServerInfo()}async bindServer(i){let e=r=>new Promise((s,a)=>{let n=i.createServer((l,c)=>{this.handleHttpRequest(l,c)}),o=!1;n.on("error",l=>{o||(o=!0,n.close(),a(l))}),n.listen(r,"127.0.0.1",()=>{o||(o=!0,s(n))})}),t=this.deps.preferredPort??ms;if(t===0)return e(0);try{return await e(t)}catch(r){let s=r?.code;if(s==="EADDRINUSE"||s==="EACCES")return this.deps.log(`Preferred agent bridge port ${t} unavailable (${s}); falling back to a random port.`),e(0);throw r}}async stopHttpServer(){let i=this.server;this.server=null,this.serverEndpoint=null,this.serverMcpEndpoint=null,i&&await new Promise((e,t)=>{i.close(r=>{r?t(r):e()})})}getServerInfo(){if(!this.serverEndpoint||!this.serverMcpEndpoint)throw new Error("VaultGuard agent bridge server is not running.");return this.pruneExpiredLeases(),{endpoint:this.serverEndpoint,mcpEndpoint:this.serverMcpEndpoint,leaseIds:Array.from(this.leases.keys()),tools:Ue}}async list(i,e={}){let t=this.requireLease(i);if(!t.allowRead)throw new Error("VaultGuard agent lease does not allow reads.");let r=e.scope?this.normalizeScope(e.scope):null,s=this.clampNumber(e.limit??gs,1,Wr),a=[];for(let n of this.deps.getAllFilePaths()){let o=this.normalizePath(n);if(!o||!this.isPathAgentReadable(o,t,r))continue;let l=await this.deps.getPermission(o);if(!(l<1)&&(a.push({path:o,permission:this.permissionLabel(l)}),a.length>=s))return{files:a,truncated:!0}}return a.sort((n,o)=>n.path.localeCompare(o.path)),{files:a,truncated:!1}}async search(i,e){let t=this.requireLease(i);if(!t.allowRead)throw new Error("VaultGuard agent lease does not allow reads.");let r=(e.query??"").trim();if(!r)throw new Error("vaultguard_search requires a non-empty query.");let s=this.clampNumber(e.limit??t.maxSearchResults,1,t.maxSearchResults),a=await this.list(i,{scope:e.scope,limit:Wr}),n=r.toLocaleLowerCase(),o=[];for(let l of a.files){if(!this.isTextPath(l.path))continue;let c;try{c=await this.deps.readText(l.path)}catch{continue}let d=c.split(/\r?\n/);for(let u=0;u<d.length;u++){let f=d[u].toLocaleLowerCase().indexOf(n);if(f!==-1&&(o.push({path:l.path,line:u+1,snippet:this.makeSnippet(d[u],f,r.length)}),o.length>=s))return{matches:o,truncated:!0}}}return{matches:o,truncated:a.truncated}}async read(i,e){let t=this.requireLease(i);if(!t.allowRead)throw new Error("VaultGuard agent lease does not allow reads.");let r=this.requireReadablePath(e.path,t);if(!this.isTextPath(r))throw new Error(`VaultGuard agent bridge refuses to read non-text file "${r}".`);let s=await this.deps.readText(r),a=this.utf8Bytes(s),n=this.clampNumber(e.maxBytes??t.maxReadBytes,1,t.maxReadBytes);return a<=n?{path:r,content:s,bytes:a,truncated:!1}:{path:r,content:this.truncateUtf8(s,n),bytes:a,truncated:!0}}async applyPatch(i,e){let t=this.requireLease(i),r=await this.requireWritablePath(e.path,t,"apply_patch",e.diff??""),s=e.diff??"";if(!s.trim())throw new Error("vaultguard_apply_patch requires a non-empty unified diff.");let a=await this.deps.readText(r),n=ws(a,s);return n===a?{path:r,bytes:this.utf8Bytes(n)}:(await this.deps.writeText(r,n),{path:r,bytes:this.utf8Bytes(n)})}async create(i,e){let t=this.requireLease(i),r=await this.requireWritablePath(e.path,t,"create",e.content??"");if(await this.deps.fileExists(r))throw new Error(`VaultGuard agent bridge refuses to overwrite existing file "${r}" via create.`);return await this.deps.ensureParentFolders(r),await this.deps.writeText(r,e.content??""),{path:r,bytes:this.utf8Bytes(e.content??"")}}async requireWritablePath(i,e,t,r){let s=this.requirePathInLease(i,e);if(!this.isTextPath(s))throw new Error(`VaultGuard agent bridge refuses to write non-text file "${s}".`);if(e.writeMode==="deny")throw new Error("VaultGuard agent lease is read-only.");if(await this.deps.getPermission(s)<2)throw new Error(`VaultGuard agent bridge: no WRITE permission for "${s}".`);if(e.writeMode==="confirm"&&!await this.deps.confirmWrite({lease:this.summarizeLease(e),operation:t,path:s,preview:this.makeWritePreview(r)}))throw new Error(`VaultGuard agent bridge write to "${s}" was not approved.`);return s}requireReadablePath(i,e){return this.requirePathInLease(i,e)}requirePathInLease(i,e){let t=this.normalizePath(i);if(!t)throw new Error("VaultGuard agent bridge requires a vault-relative path.");if(this.isBlockedPath(t))throw new Error(`VaultGuard agent bridge refuses access to local-only or hidden path "${t}".`);if(!this.matchesAnyScope(t,e.scopes))throw new Error(`VaultGuard agent lease does not cover "${t}".`);return t}isPathAgentReadable(i,e,t){return!(this.isBlockedPath(i)||!this.matchesAnyScope(i,e.scopes)||t&&!this.matchesScope(i,t))}isBlockedPath(i){let e=this.normalizePath(i);return!e||this.hasTraversalSegment(i)||e.split("/")[0].startsWith(".")?!0:this.deps.isPathExcluded(e)}hasTraversalSegment(i){return String(i??"").replace(/\\/g,"/").split("/").some(t=>t==="..")}assertBridgePrereqs(){if(!this.deps.getSession())throw new Error("VaultGuard agent bridge requires an active VaultGuard login.");if(!this.deps.getServerVaultId())throw new Error("VaultGuard agent bridge requires this Obsidian folder to be bound to a server vault.")}requireLease(i){this.assertBridgePrereqs(),this.pruneExpiredLeases();let e=this.leases.get(i);if(!e)throw new Error("VaultGuard agent lease is missing, expired, or revoked.");return e}pruneExpiredLeases(){let i=Date.now();for(let[e,t]of this.leases.entries())t.expiresAtMs<=i&&(this.leases.delete(e),this.tokenIndex.delete(t.token))}summarizeLease(i){let{expiresAtMs:e,token:t,sessionUserId:r,sessionVaultId:s,...a}=i;return{...a,scopes:[...a.scopes],tools:[...a.tools]}}summarizeLeaseWithSecret(i){return{...this.summarizeLease(i),token:i.token}}normalizeScopes(i){let t=(Array.isArray(i)?i:[i]).map(r=>this.normalizeScope(r));if(t.length===0)throw new Error("VaultGuard agent lease requires at least one scope.");return Array.from(new Set(t))}normalizeScope(i){let e=i.trim();if(!e)throw new Error("VaultGuard agent lease scope cannot be empty.");if(e==="/**"||e==="**")return"/**";let t=this.normalizePath(e);if(!t)throw new Error("VaultGuard agent lease scope cannot target the vault root without /**.");if(this.isBlockedPath(t))throw new Error(`VaultGuard agent lease cannot target hidden or local-only scope "${e}".`);return e.endsWith("/**")?`/${t.replace(/\/\*\*$/,"")}/**`:e.endsWith("/*")?`/${t.replace(/\/\*$/,"")}/*`:e.includes("*")?`/${t}`:`/${t}`}normalizePath(i){return String(i??"").replace(/\\/g,"/").replace(/^\/+/,"").replace(/\/+$/,"").replace(/\/\/+/g,"/")}matchesAnyScope(i,e){return e.some(t=>this.matchesScope(i,t))}matchesScope(i,e){let t=this.normalizePath(i),r=e.startsWith("/")?e.slice(1):e;if(r==="**")return!0;if(r.endsWith("/**")){let s=r.slice(0,-3);return t===s||t.startsWith(`${s}/`)}if(r.endsWith("/*")){let s=r.slice(0,-2);return t.startsWith(`${s}/`)?t.slice(s.length+1).indexOf("/")===-1:!1}return r.includes("*")?ys(r).test(t):t===r||t.startsWith(`${r}/`)}permissionLabel(i){return i>=3?"admin":i>=2?"write":"read"}isTextPath(i){let e=this.normalizePath(i).toLocaleLowerCase(),t=e.lastIndexOf("/"),r=t===-1?e:e.slice(t+1),s=r.lastIndexOf(".");return s===-1?!0:vs.has(r.slice(s))}cleanAgentName(i){return(i??"LLM agent").trim().replace(/\s+/g," ").slice(0,80)||"LLM agent"}clampNumber(i,e,t){return Number.isFinite(i)?Math.max(e,Math.min(t,Math.floor(i))):e}randomId(i){let e=new Uint8Array(16);crypto.getRandomValues(e);let t=Array.from(e,r=>r.toString(16).padStart(2,"0")).join("");return`${i}_${t}`}makeSnippet(i,e,t){let s=Math.max(0,e-100),a=Math.min(i.length,e+Math.max(t,1)+100),n=s>0?"...":"",o=a<i.length?"...":"";return`${n}${i.slice(s,a)}${o}`}makeWritePreview(i){let e=i.replace(/\r\n/g,`
`);return e.length<=2e3?e:`${e.slice(0,2e3)}
...`}utf8Bytes(i){return new TextEncoder().encode(i).byteLength}truncateUtf8(i,e){let t=new TextEncoder,r=0,s="";for(let a of i){let n=t.encode(a).byteLength;if(r+n>e)break;s+=a,r+=n}return s}loadNodeHttp(){let i=typeof window<"u"?window:{},e=globalThis,t=typeof i.require=="function"?i.require:typeof e.require=="function"?e.require:null;if(!t)throw new Error("VaultGuard agent bridge server is available only in desktop Obsidian with Node integration.");let r=t("http");if(!r||typeof r.createServer!="function")throw new Error("VaultGuard agent bridge could not load Node's http module.");return r}async handleHttpRequest(i,e){e.setHeader("Content-Type","application/json; charset=utf-8"),e.setHeader("Cache-Control","no-store");let t=i.url??"";if(i.method==="POST"&&t==="/mcp"){await this.handleMcpRequest(i,e);return}if(i.method==="POST"&&t==="/rpc"){await this.handleRpcRequest(i,e);return}this.writeJson(e,404,{ok:!1,error:{message:"Not found"}})}async handleRpcRequest(i,e){try{let t=this.resolveLeaseFromBearer(i);if(!t){this.writeJson(e,401,{ok:!1,error:{message:"Unauthorized"}});return}let r=await this.readHttpBody(i),s=JSON.parse(r),a=s.tool,n=s.args??s.arguments??{};if(!a||!Ue.includes(a)){this.writeJson(e,400,{ok:!1,error:{message:"Unknown or missing tool."}});return}if(s.leaseId&&s.leaseId!==t.leaseId){this.writeJson(e,400,{ok:!1,error:{message:"leaseId in request body does not match bearer token."}});return}let o=await this.invokeToolWithAudit(a,t,n,"rpc");this.writeJson(e,200,{ok:!0,result:o})}catch(t){this.writeJson(e,400,{ok:!1,error:{message:t instanceof Error?t.message:String(t)}})}}async handleMcpRequest(i,e){let t=this.resolveLeaseFromBearer(i);if(!t){this.writeJson(e,401,this.makeJsonRpcError(null,-32001,"Unauthorized"));return}let r=this.extractLeaseHeader(i);if(r&&r!==t.leaseId){this.writeJson(e,401,this.makeJsonRpcError(null,-32001,"X-VaultGuard-Lease header does not match bearer token."));return}let s;try{let c=await this.readHttpBody(i);s=JSON.parse(c)}catch(c){this.writeJson(e,400,this.makeJsonRpcError(null,-32700,c instanceof Error?c.message:"Parse error"));return}let a=s.id??null,n=s.method,o=s.params??{};if(a===null&&typeof n=="string"&&n.startsWith("notifications/")){e.statusCode=202,e.end();return}try{switch(n){case"initialize":this.writeJson(e,200,this.makeJsonRpcResult(a,this.handleMcpInitialize()));return;case"ping":this.writeJson(e,200,this.makeJsonRpcResult(a,{}));return;case"tools/list":this.writeJson(e,200,this.makeJsonRpcResult(a,this.handleMcpToolsList()));return;case"tools/call":{let c=await this.handleMcpToolsCall(t,o);this.writeJson(e,200,this.makeJsonRpcResult(a,c));return}default:this.writeJson(e,200,this.makeJsonRpcError(a,-32601,`Method not found: ${n??"(none)"}`));return}}catch(c){this.writeJson(e,200,this.makeJsonRpcError(a,-32603,c instanceof Error?c.message:String(c)))}}handleMcpInitialize(){return{protocolVersion:ns,capabilities:{tools:{listChanged:!1}},serverInfo:{name:"vaultguard-agent-bridge",version:"1"},instructions:"VaultGuard exposes vault files through five tools: list, search, read, apply_patch, create. All paths are vault-relative. Hidden files (.obsidian, .trash, ...) are blocked. Writes obey the lease writeMode (deny / confirm / allow). Do not ask the user for a filesystem path; use list/search to discover files first."}}handleMcpToolsList(){return{tools:Object.entries(qr).map(([i,e])=>({name:i,description:e.description,inputSchema:e.inputSchema}))}}async handleMcpToolsCall(i,e){let t=typeof e.name=="string"?e.name:"",r=e.arguments??{},s=qr[t];if(!s)return this.makeMcpToolError(`Unknown tool "${t}".`);try{let a=await this.invokeToolWithAudit(s.internal,i,r,"mcp");return{content:[{type:"text",text:JSON.stringify(a,null,2)}]}}catch(a){return this.makeMcpToolError(a instanceof Error?a.message:String(a))}}makeMcpToolError(i){return{isError:!0,content:[{type:"text",text:i}]}}makeJsonRpcResult(i,e){return{jsonrpc:"2.0",id:i,result:e}}makeJsonRpcError(i,e,t){return{jsonrpc:"2.0",id:i,error:{code:e,message:t}}}extractLeaseHeader(i){let e=i.headers["x-vaultguard-lease"],t=Array.isArray(e)?e[0]:e;return typeof t=="string"&&t.trim().length>0?t.trim():null}resolveLeaseFromBearer(i){let e=i.headers.authorization,t=Array.isArray(e)?e[0]:e;if(typeof t!="string"||!t.startsWith("Bearer "))return null;let r=t.slice(7).trim();if(!r)return null;this.pruneExpiredLeases();let s=this.tokenIndex.get(r);return s?this.leases.get(s)??null:null}async invokeToolWithAudit(i,e,t,r){let s={leaseId:e.leaseId,agentName:e.agentName,persistent:e.persistent,transport:r,tool:i};typeof t.path=="string"&&(s.path=t.path),typeof t.scope=="string"&&(s.scope=t.scope),typeof t.query=="string"&&(s.queryLength=t.query.length),typeof t.diff=="string"&&(s.diffLength=t.diff.length),typeof t.content=="string"&&(s.contentLength=t.content.length);try{let a=await this.deps.withAgentContext(e.agentName,e.leaseId,()=>this.executeTool(i,e.leaseId,t));return this.deps.emitAudit("bridge.tool_invoked",s.path??null,{...s,outcome:"success"}),a}catch(a){let n=a instanceof Error?a.message:String(a),o=n.includes("does not allow")||n.includes("refuses access")||n.includes("not approved")||n.includes("read-only")||n.includes("does not cover")||n.includes("WRITE permission");throw this.deps.emitAudit("bridge.tool_invoked",s.path??null,{...s,outcome:o?"denied":"error",error:n}),a}}async executeTool(i,e,t){switch(i){case"vaultguard_list":return this.list(e,{scope:typeof t.scope=="string"?t.scope:void 0,limit:typeof t.limit=="number"?t.limit:void 0});case"vaultguard_search":return this.search(e,{query:typeof t.query=="string"?t.query:"",scope:typeof t.scope=="string"?t.scope:void 0,limit:typeof t.limit=="number"?t.limit:void 0});case"vaultguard_read":return this.read(e,{path:typeof t.path=="string"?t.path:"",maxBytes:typeof t.maxBytes=="number"?t.maxBytes:void 0});case"vaultguard_apply_patch":return this.applyPatch(e,{path:typeof t.path=="string"?t.path:"",diff:typeof t.diff=="string"?t.diff:""});case"vaultguard_create":return this.create(e,{path:typeof t.path=="string"?t.path:"",content:typeof t.content=="string"?t.content:""})}}readHttpBody(i){return new Promise((e,t)=>{let r=0,s=[];i.on("data",a=>{let n=typeof a=="string"?a:new TextDecoder().decode(a);if(r+=n.length,r>fs){t(new Error("VaultGuard agent bridge request body is too large."));return}s.push(n)}),i.on("end",()=>e(s.join(""))),i.on("error",t)})}writeJson(i,e,t){i.statusCode=e,i.end(JSON.stringify(t))}};function ys(h){let i="^";for(let e=0;e<h.length;e++){let t=h[e];t==="*"?h[e+1]==="*"?(i+=".*",e+=1):i+="[^/]*":t==="?"?i+="[^/]":"\\.^$+{}()|[]".includes(t)?i+=`\\${t}`:i+=t}return i+="$",new RegExp(i)}function ws(h,i){let e=i.replace(/\r\n/g,`
`).split(`
`),t=[];for(let o=0;o<e.length;o++){let l=e[o],c=/^@@ -(\d+)(?:,\d+)? \+\d+(?:,\d+)? @@/.exec(l);if(!c)continue;let d=[];for(o+=1;o<e.length&&!e[o].startsWith("@@ ");){let u=e[o];if(u.startsWith("\\ No newline at end of file")){o+=1;continue}if(u===""&&o===e.length-1)break;d.push(u),o+=1}o-=1,t.push({oldStart:Number(c[1]),lines:d})}if(t.length===0)throw new Error("VaultGuard agent bridge only accepts unified diffs with @@ hunks.");let r=h.endsWith(`
`),s=h.split(`
`);r&&s.pop();let a=[],n=0;for(let o of t){let l=o.oldStart-1;if(l<n||l>s.length)throw new Error("Unified diff hunk is out of range for the current file.");a.push(...s.slice(n,l));let c=l;for(let d of o.lines){let u=d[0],p=d.slice(1);if(u===" ")ir(s[c],p),a.push(p),c+=1;else if(u==="-")ir(s[c],p),c+=1;else if(u==="+")a.push(p);else if(d==="")ir(s[c],""),a.push(""),c+=1;else throw new Error(`Unsupported unified diff line prefix "${u}".`)}n=c}return a.push(...s.slice(n)),a.join(`
`)+(r?`
`:"")}function ir(h,i){if(h!==i)throw new Error("Unified diff does not apply cleanly to the current file.")}var Jr="---\nname: vaultguard\ndescription: \"Read, search, and edit files inside an Obsidian vault that's protected by the VaultGuard plugin's at-rest encryption. Use this skill whenever the user asks you to look at notes, find something in their vault, or edit a file under an Obsidian vault path AND the on-disk files start with the bytes 'VG1' (a VaultGuard ciphertext header). Triggers on: 'find X in my notes', 'read my note about Y', 'edit Z in my vault', 'search my Obsidian vault', or any case where Read/Grep/Glob against vault paths returns binary that starts with VG1.\"\nmetadata:\n  origin: \"VaultGuard Obsidian plugin\"\n  vaultguard-managed: true\n  vaultguard-schema: 2\n---\n\n# VaultGuard agent bridge\n\nThe user is working in an Obsidian vault that the VaultGuard plugin encrypts on disk. Files in the vault folder are not plaintext \u2014 every protected file starts with the four bytes `VG1\\0` (hex `56 47 31 00`) followed by AES-256-GCM ciphertext. Standard filesystem reads return that ciphertext. To get plaintext, you must call VaultGuard's MCP tools instead of `Read`/`Glob`/`Grep`/`Edit`/`Write` against the vault directory.\n\n## When this skill applies\n\nUse this skill when **all** of these are true:\n\n1. The path the user is asking about lives inside an Obsidian vault (e.g. anything under a folder containing `.obsidian/`).\n2. Either the user has explicitly told you the vault is protected by VaultGuard, or you tried `Read` on a vault file and the first bytes were `VG1\\0` / the content looks like binary garbage.\n3. The user has registered the `vaultguard` MCP server with the agent (so `mcp__vaultguard__*` tools are available in this session).\n\nIf the MCP server is not registered, **stop** and tell the user: \"Your vault appears to be protected by VaultGuard but the `vaultguard` MCP server isn't connected. Open Obsidian \u2192 run `VaultGuard: Create Agent Bridge Lease`, paste the connection JSON into your MCP config, and restart this session.\" Do not fall back to reading the encrypted bytes.\n\n## The tools\n\nAll paths are vault-relative (no leading `/`, no absolute filesystem paths). Hidden directories like `.obsidian/`, `.trash/`, `.git/` are always blocked \u2014 do not try to read them.\n\n- **`mcp__vaultguard__list({ scope?, limit? })`** \u2014 list visible files in the vault. Use first when the user asks \"find X\" or names a file you don't have an exact path for. `scope` is an optional vault-relative glob (e.g. `project-x/**`) to narrow within the lease scope. The result includes a `permission` label per file (`read` / `write` / `admin`) \u2014 that's the user's *file-level* permission, separate from the lease.\n\n- **`mcp__vaultguard__search({ query, scope?, limit? })`** \u2014 case-insensitive substring search across visible text files. Returns `{ path, line, snippet }` per match. Always prefer this to listing every file and reading them.\n\n- **`mcp__vaultguard__read({ path, maxBytes? })`** \u2014 read a single text file as plaintext. Refuses non-text files (only `.md`, `.txt`, `.canvas`, `.csv`, `.tsv`, `.json`, `.yaml`, `.yml`). Result is `{ path, content, bytes, truncated }` \u2014 if `truncated: true`, you saw only the first `maxBytes` of UTF-8.\n\n- **`mcp__vaultguard__apply_patch({ path, diff })`** \u2014 apply a unified diff (with `@@` hunks) to an existing text file. Hunks must match the current file exactly. Subject to the permission stack below.\n\n- **`mcp__vaultguard__create({ path, content })`** \u2014 create a new text file. Refuses to overwrite existing files; use `apply_patch` for edits. Subject to the permission stack below.\n\n## Permission stack (READ THIS BEFORE SUGGESTING FIXES)\n\nA write attempt can be rejected at three independent layers. The error message tells you *which* layer rejected \u2014 read it carefully and only suggest the matching fix. **Do not blanket-suggest \"ask the user to mint a writeMode: allow lease\".** That's almost never the right answer, and `allow` mode isn't even available for persistent leases.\n\nThe three layers, evaluated in order:\n\n### Layer 1 \u2014 Lease scope (path coverage)\n\nEvery lease has one or more glob scopes (e.g. `/project-x/**`). A path outside every scope is rejected before any permission check.\n\n- **Error:** `VaultGuard agent lease does not cover \"X\"`\n- **Fix:** The lease was minted for a narrower set of paths than the user wants to touch. Tell them the current scope and the requested path, and ask whether they want to mint a *new* lease with broader scope (or work within the current one). Do not suggest changing the lease's writeMode \u2014 scope is a different gate.\n\n### Layer 2 \u2014 Lease writeMode (bridge-side write gate)\n\nEach lease has a `writeMode`: `deny` (read-only), `confirm` (every write pops an in-Obsidian prompt), or `allow` (writes proceed silently \u2014 only available for ephemeral leases, never persistent ones).\n\n- **Error:** `VaultGuard agent lease is read-only` \u2192 the lease was minted as `writeMode: deny`. Ask the user to mint a new lease with `writeMode: confirm`. Do **not** ask for `writeMode: allow` \u2014 `confirm` already works (the user just sees a per-file prompt) and `allow` is rejected for persistent leases.\n- **Error:** `VaultGuard agent lease does not allow reads` \u2192 the lease has `allowRead: false`. Same fix shape: ask for a new lease with reads enabled.\n- **Error:** `VaultGuard agent bridge write to \"X\" was not approved` \u2192 the lease is `writeMode: confirm` and the user clicked \"deny\" on the confirmation prompt. They saw the write and rejected it. Don't retry \u2014 ask whether they intended to deny, and surface what was about to be written so they can decide.\n\n### Layer 3 \u2014 File-level VaultGuard permission\n\nIndependent of the lease, VaultGuard enforces per-file permissions (NONE / READ / WRITE / ADMIN) for the logged-in user. Even with `writeMode: allow` on the lease, a write to a file the user doesn't have WRITE permission on still fails.\n\n- **Error:** `VaultGuard agent bridge: no WRITE permission for \"X\"` \u2192 the user's *vault-side* permissions deny WRITE on this specific file. **This is not a lease problem; minting a new lease will not fix it.** Tell the user: \"You don't have WRITE permission on `X` according to VaultGuard's vault-side permission rules \u2014 that's separate from the agent lease. To grant WRITE, open the file in Obsidian and check the permission header (or ask a vault admin). If you only need to read this file, I can do that instead.\"\n\n### Quick diagnostic table\n\n| Error contains | Layer | Right fix |\n|---|---|---|\n| `does not cover` | scope | New lease with wider scope (or work within current scope) |\n| `is read-only` | writeMode | New lease with `writeMode: confirm` (not `allow`) |\n| `does not allow reads` | writeMode | New lease with reads enabled |\n| `was not approved` | writeMode (user denied) | Don't retry; ask the user what they intended |\n| `no WRITE permission for` | file-level | User changes vault permissions; new lease won't help |\n| `refuses access to local-only or hidden path` | excluded paths | Stop \u2014 `.obsidian/`, `.trash/`, etc. are out of scope by design |\n| `is missing, expired, or revoked` | lease lifecycle | User mints a new lease (TTL ran out / they logged out / they revoked it) |\n| `refuses to overwrite existing file` | tool semantics | Use `apply_patch` instead of `create` |\n| `refuses to read non-text file` | tool semantics | The file isn't `.md`/`.txt`/`.canvas`/etc.; can't be read through this surface |\n\n## Workflow\n\n1. **Always discover before reading.** If the user says \"look at my notes about X\", call `mcp__vaultguard__search({ query: \"X\" })` first. Only call `read` once you have an exact path.\n\n2. **Never call `Read`, `Glob`, `Grep`, `Edit`, `Write`, or shell commands against the vault directory.** Even if the path looks innocent, the file is ciphertext. Use the MCP tools.\n\n3. **Don't mix transports for the same vault.** If you read a file via `mcp__vaultguard__read`, edit it via `mcp__vaultguard__apply_patch` \u2014 not via the built-in `Edit` tool. Otherwise the at-rest encryption layer breaks: built-in `Edit` would write the new content as plaintext, and the next time the Obsidian plugin opens the file it would see plaintext where ciphertext is expected.\n\n4. **Check the `permission` label from `list` before attempting a write.** When you call `mcp__vaultguard__list`, each entry includes a `permission` label. If it's `\"read\"`, don't even try `apply_patch` / `create` \u2014 you'll hit a Layer-3 error and waste the round-trip. Tell the user up front: \"I see you have read-only access to `X` according to VaultGuard. I can read it but can't edit it without a permission change.\"\n\n5. **Patch carefully.** `apply_patch` expects a strict unified diff. Read the file first, compute the diff against that exact content, then patch. If `apply_patch` returns \"does not apply cleanly\", re-read the file (it may have changed) and recompute.\n\n6. **Never recommend `writeMode: allow` reflexively.** It's the riskiest mode (writes happen silently with no per-file confirmation), it's *rejected* for persistent leases, and `confirm` already works for any \"I want to allow writes\" use case. The user gets one prompt per write \u2014 that's the safety property they're paying for.\n\n## What VaultGuard's MCP tools do not do\n\n- **No filesystem walks outside the vault.** You cannot use these tools to read anything outside the bound vault folder.\n- **No binary file content.** Images, PDFs, audio, etc. are blocked at the bridge \u2014 VaultGuard's text-only tool surface is intentional.\n- **No raw key material.** The bridge never returns the local at-rest key, the cloud key lease, or the user's Cognito tokens. Don't ask for them; they aren't reachable through this surface.\n- **No long-running operations.** Each tool call is request/response; there's no streaming and no progress indication.\n- **No vault-side permission changes.** The bridge cannot grant WRITE on a file you don't have it for. That's a separate operation done in the Obsidian permission UI.\n\nIf the user asks for something outside this surface (read a PNG, run a shell command in the vault folder, get a key, grant themselves WRITE on a file), explain that the bridge intentionally doesn't expose that, and ask them what they're actually trying to accomplish.\n";var sr="vaultguard",Yr=2,xs=/vaultguard-managed:\s*true[\s\S]{0,200}?vaultguard-schema:\s*(\d+)/m,Es=/<!--\s*vaultguard-skill:\s*managed\s+schema=(\d+)\s*-->/;function Rt(h){let i=h.path.join(h.homedir(),".claude"),e=h.path.join(i,"skills"),t=h.path.join(e,sr),r=h.path.join(t,"SKILL.md"),s=h.fs.existsSync(i)&&h.fs.existsSync(e);if(!h.fs.existsSync(r))return{claudeCodeAvailable:s,skillFilePath:r,installed:!1,managedConflict:!1,installedSchema:null};let a=h.fs.readFileSync(r,"utf-8"),n=xs.exec(a);if(n)return{claudeCodeAvailable:s,skillFilePath:r,installed:!0,managedConflict:!1,installedSchema:Number(n[1])};let o=Es.exec(a);return o?{claudeCodeAvailable:s,skillFilePath:r,installed:!0,managedConflict:!1,installedSchema:Number(o[1])}:{claudeCodeAvailable:s,skillFilePath:r,installed:!1,managedConflict:!0,installedSchema:null}}function Qr(h,i={}){let e=Rt(h);if(!e.claudeCodeAvailable&&!i.force)throw new Error("Claude Code does not appear to be installed (no ~/.claude/skills/ directory). Install Claude Code first, then re-run this command.");if(e.managedConflict&&!i.overwriteUnmanaged)throw new Error("A SKILL.md already exists at this path but wasn't installed by VaultGuard. Pass overwriteUnmanaged=true to replace it, or remove it manually first.");let t=Jr,r=h.path.join(h.homedir(),".claude","skills",sr);h.fs.existsSync(r)||h.fs.mkdirSync(r,{recursive:!0});let s;return!e.installed&&!e.managedConflict?s="created":e.managedConflict?s="overwrote-conflict":e.installedSchema===Yr?s=h.fs.readFileSync(e.skillFilePath,"utf-8")===t?"noop":"updated":s="updated",s!=="noop"?(h.fs.writeFileSync(e.skillFilePath,t,"utf-8"),h.log(`VaultGuard skill installed at ${e.skillFilePath} (action: ${s}, schema: ${Yr})`)):h.log(`VaultGuard skill already current at ${e.skillFilePath}`),{filePath:e.skillFilePath,action:s}}function Xr(h,i={}){let e=Rt(h);if(!e.installed&&!e.managedConflict)return{filePath:e.skillFilePath,removed:!1};if(e.managedConflict&&!i.force)throw new Error("SKILL.md exists but wasn't installed by VaultGuard \u2014 refusing to delete. Pass force=true to remove it anyway.");let t=h.path.join(h.homedir(),".claude","skills",sr);return h.fs.rmSync(t,{recursive:!0,force:!0}),h.log(`VaultGuard skill removed from ${e.skillFilePath}`),{filePath:e.skillFilePath,removed:!0}}var Ss='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',ti=10,ks=300*1e3,Ps=60*1e3,Cs=120*1e3,nr=5*1e3,As=5*1e3,Rs=30*1e3,or="[VaultGuard]",ri=5e3,Ls={"vaultguard-sync":["vaultguard"]},ii=".vaultguard-folder",si=9,le=class le extends b.Plugin{constructor(){super(...arguments);this.runtimeStyleEl=null;this.settings=Bt;this.serverEdition=null;this.serverFeatures=null;this.persistedSessions={};this.vaultMemberRole=null;this.derivedBindingId="";this.pluginDataSaveQueue=Promise.resolve();this.apiClient=null;this.configuredApiEndpoint="";this.resolvedApiEndpoint=null;this.apiEndpointResolutionPromise=null;this.session=null;this.orgSettings=null;this.keyLease=null;this.vaultLeaseDenied=!1;this.lastLimitedAccessNoticeAt=0;this.placeholderPaths=new Set;this.syncState={lastSync:null,pendingChanges:0,conflicts:[],status:"idle",bytesUploaded:0,bytesDownloaded:0,lastError:null};this.connectionState={status:"offline",lastConnected:null,failedAttempts:0,nextRetryAt:null,latencyMs:null};this.syncTimer=null;this.syncTimerPaused=!1;this.keyRenewalTimer=null;this.heartbeatTimer=null;this.connectionRetryTimer=null;this.offlineQueueFlushPromise=null;this.autoLockTimer=null;this.sessionResumePromise=null;this.statusBarEl=null;this.originalAdapterMethods={read:null,write:null,readBinary:null,writeBinary:null,list:null,remove:null,rename:null};this.atRestCipher=null;this.atRestFirstRunOffered=!1;this.localOnlyCatchupCompleted=!1;this.remoteInventoryRepairCompleted=!1;this.applyingRemoteWrite=!1;this.folderLifecycleListenersRegistered=!1;this.lastFocusSyncAt=0;this.lastAuthRequiredNoticeAt=null;this.lastConnectionLostNoticeAt=null;this.safeStorageUnavailableNotified=!1;this.readOnlyFallbackNoticeAt=new Map;this.cloudDecryptFallbackNoticeAt=new Map;this.cipherInitPromise=null;this.corruptedWriteNoticeAt=new Map;this.permissionWarmupInFlight=0;this.warmupCyclePromise=null;this.hasWarmedAtLeastOnce=!1;this.offlineQueue=[];this.filePermissionHeader=null;this.readOnlyGuard=null;this.fileExplorerDecorations=null;this.updateChecker=null;this.sidebarViewConfig=null;this.agentBridge=null;this.pendingChallengeSession=null;this.allowlistReconcileInFlight=null;this.obsidianSyncNotice=null}featureEnabled(e){return this.serverFeatures?this.serverFeatures[e]:Dt[e]}async onload(){this.log("Loading VaultGuard plugin..."),this.injectRuntimeStyles(),await this.loadSettings(),this.checkForObsidianSync(),this.addSettingTab(new je(this.app,this)),(0,b.addIcon)("vaultguard-shield",Ss),this.addRibbonIcon("vaultguard-shield","VaultGuard",t=>{this.showVaultGuardMenu(t)}),this.settings.showStatusBar&&(this.statusBarEl=this.addStatusBarItem(),this.updateStatusBar()),this.rebuildApiClient(),this.permissionStore=new wt({getSession:()=>this.session,getVaultMemberRole:()=>this.vaultMemberRole,isOnline:()=>this.isOnline(),log:t=>this.log(t),onOfflineDetected:()=>this.setConnectionStatus("offline"),fetchPermissionLevelFromServer:t=>this.fetchPermissionLevelFromServer(t),isNetworkError:t=>this.isNetworkError(t),app:this.app}),this.interceptVaultAdapter(),await this.initAtRestCipher(),await this.restoreSession(),this.refreshServerCapabilitiesFromConfiguredEndpoint().catch(t=>{this.logError("Server capability refresh failed",t)}),this.registerSessionActivityTracking(),this.registerFocusSyncHandlers(),this.initAgentBridge(),this.restorePersistentAgentBridgeLeases(),this.registerCommands(),this.registerInviteProtocolHandler(),this.registerShareProtocolHandler(),this.initFilePermissionHeader(),this.initReadOnlyGuard(),this.registerView(se,t=>{let r=new Ct(t);return this.sidebarViewConfig&&r.configure(this.sidebarViewConfig),r}),this.registerEvent(this.permissionStore.on("changed",()=>{this.reloadVaultGuardSidebar()}));let e=this.createSidebarViewConfig();if(e&&(this.sidebarViewConfig=e),this.initFileExplorerDecorations(),this.app.workspace.onLayoutReady(()=>{this.ensureVaultGuardSidebar()}),this.session){let t=this.resumeStoredSession().catch(r=>{this.logError("Background session restore failed",r)});this.sessionResumePromise=t,t.finally(()=>{this.sessionResumePromise===t&&(this.sessionResumePromise=null)})}if(this.settings.debugLogging){let t=`VaultGuard v${this.manifest.version} (sync-rev ${si}) loaded`;new b.Notice(t,2500)}this.updateChecker=new xt(this),this.updateChecker.start(),this.log("VaultGuard plugin loaded successfully.")}async onunload(){this.log("Unloading VaultGuard plugin..."),this.stopSyncTimer(),this.stopKeyRenewalMonitor(),this.stopHeartbeatMonitor(),this.stopConnectionRetry(),this.stopAutoLockTimer(),this.updateChecker&&(this.updateChecker.stop(),this.updateChecker=null),this.restoreVaultAdapter(),this.agentBridge&&(await this.agentBridge.stopHttpServer().catch(e=>this.logError("Stopping agent bridge server failed",e)),this.agentBridge.revokeAllLeases(),this.agentBridge=null),this.apiClient&&(this.apiClient.destroy(),this.apiClient=null),this.clearSensitiveData(),this.filePermissionHeader&&(this.filePermissionHeader.destroy(),this.filePermissionHeader=null),this.readOnlyGuard&&(this.readOnlyGuard.destroy(),this.readOnlyGuard=null),this.fileExplorerDecorations&&(this.fileExplorerDecorations.destroy(),this.fileExplorerDecorations=null),this.app.workspace.detachLeavesOfType(se),this.statusBarEl&&(this.statusBarEl.remove(),this.statusBarEl=null),this.removeRuntimeStyles(),this.log("VaultGuard plugin unloaded.")}injectRuntimeStyles(){if(typeof document>"u")return;let e="vaultguard-runtime-styles",t=document.getElementById(e);if(t instanceof HTMLStyleElement){t.textContent=Mt,this.runtimeStyleEl=t;return}let r=document.createElement("style");r.id=e,r.textContent=Mt,document.head.appendChild(r),this.runtimeStyleEl=r}removeRuntimeStyles(){this.runtimeStyleEl?.remove(),this.runtimeStyleEl=null}registerInviteProtocolHandler(){let e=this;if(typeof e.registerObsidianProtocolHandler!="function"){this.log("Obsidian protocol handlers are not available in this Obsidian version; invite links can still be pasted in settings.");return}e.registerObsidianProtocolHandler("vaultguard-invite",async t=>{try{await this.redeemInvite(t)}catch(r){this.logError("Invite redemption failed",r)}})}registerShareProtocolHandler(){let e=this;typeof e.registerObsidianProtocolHandler=="function"&&e.registerObsidianProtocolHandler("vaultguard-share",async t=>{try{await this.handleShareLink(t)}catch(r){this.logError("Share link handling failed",r)}})}async handleShareLink(e){let t=(e.token??"").trim(),r=(e.vaultId??"").trim();if(!t){new b.Notice("VaultGuard Sync: Share link is missing its token.");return}if(!this.session||!this.apiClient){new b.Notice("VaultGuard Sync: Log in first, then click the share link again.");return}let s=this.settings.serverVaultId;if(!s){new b.Notice("VaultGuard Sync: This Obsidian vault isn't connected to a VaultGuard vault yet.");return}if(r&&r!==s){new b.Notice("VaultGuard Sync: This share link points to a different VaultGuard vault. Switch to the Obsidian vault bound to that VaultGuard vault and click the link again.",8e3);return}let a;try{a=await this.apiClient.resolveShare(s,t)}catch(o){let l=o instanceof Error?o.message:String(o);new b.Notice(`VaultGuard Sync: Couldn't open share link \u2014 ${l}`,8e3);return}let n=this.app.vault.getAbstractFileByPath((0,b.normalizePath)(a.relPath));if(!(n instanceof b.TFile)){new b.Notice(`VaultGuard Sync: "${a.relPath}" isn't available in this vault \u2014 it may not be synced yet, or the source file was renamed or deleted.`,8e3);return}try{await this.app.workspace.getLeaf(!1).openFile(n)}catch(o){let l=o instanceof Error?o.message:String(o);new b.Notice(`VaultGuard Sync: Couldn't open "${a.relPath}" \u2014 ${l}`,8e3)}}initAgentBridge(){this.agentBridge=new At({getSession:()=>this.session,getServerVaultId:()=>this.settings.serverVaultId,getAllFilePaths:()=>this.app.vault.getFiles().map(e=>this.normalizeVaultPath(e.path)),fileExists:async e=>this.app.vault.adapter.exists(e),ensureParentFolders:e=>this.ensureParentFoldersForPath(e),isPathExcluded:e=>this.isPathExcluded(e),getPermission:e=>this.getEffectivePermission(e),readText:e=>this.interceptedRead(e),writeText:(e,t)=>this.interceptedWrite(e,t),confirmWrite:e=>this.confirmAgentBridgeWrite(e),log:e=>this.log(e),emitAudit:(e,t,r)=>this.emitAuditEvent(e,t,r),withAgentContext:(e,t,r)=>this.apiClient?this.apiClient.withAgentContext(e,t,r):r(),persistence:this.makeAgentBridgePersistenceAdapter()})}makeAgentBridgePersistenceAdapter(){let t=`.obsidian/plugins/${this.manifest?.id??"vaultguard-sync"}/agent-leases.envelope`;return{readEnvelope:async()=>{if(!this.atRestCipher?.isReady())return null;let r=this.originalAdapterMethods.readBinary;if(!r)return null;try{if(!await this.app.vault.adapter.exists(t))return null;let a=await r(t);return await this.atRestCipher.decryptString(a)}catch(s){return this.logError("Failed to read agent bridge lease envelope",s),null}},writeEnvelope:async r=>{if(!this.atRestCipher?.isReady())throw new Error("VaultGuard Sync at-rest encryption is not ready; cannot persist agent bridge leases.");let s=this.originalAdapterMethods.writeBinary;if(!s)throw new Error("Vault adapter is not initialized; cannot persist agent bridge leases.");await this.ensureParentFoldersForPath(t);let a=await this.atRestCipher.encryptString(r);await s(t,a)},deleteEnvelope:async()=>{try{if(!await this.app.vault.adapter.exists(t))return;await this.app.vault.adapter.remove(t)}catch(r){this.logError("Failed to delete agent bridge lease envelope",r)}}}}ensureAgentBridge(){return this.agentBridge||this.initAgentBridge(),this.agentBridge}getAgentBridge(){return this.ensureAgentBridge().getToolSurface()}async createAgentBridgeLease(e={}){return this.ensureAgentBridge().createLease(e)}rotateAgentBridgeLeaseToken(e){return this.ensureAgentBridge().rotateLeaseToken(e)}async loadPersistedAgentBridgeLeases(){return this.ensureAgentBridge().loadPersistedLeases()}async restorePersistentAgentBridgeLeases(){if(!(!this.session||!this.settings.serverVaultId)&&this.atRestCipher?.isReady())try{let{restored:e}=await this.loadPersistedAgentBridgeLeases();if(e>0){let t=await this.startAgentBridgeServer();new b.Notice(`VaultGuard Sync: ${e} persistent agent bridge ${e===1?"lease is":"leases are"} active. Endpoint: ${t.endpoint}.`,8e3)}}catch(e){this.logError("Failed to restore persistent agent bridge leases",e)}}async revokeAgentBridgeLeasesForSessionEnd(e){return this.agentBridge?this.agentBridge.revokePersistentLeasesForSessionEnd(e):0}getSkillInstallerDeps(){let e=typeof window<"u"?window:{},t=globalThis,r=typeof e.require=="function"?e.require:typeof t.require=="function"?t.require:null;if(!r)return null;try{let s=r("fs"),a=r("path"),n=r("os");return{fs:s,path:a,homedir:()=>n.homedir(),log:o=>this.log(o)}}catch(s){return this.logError("Could not load Node FS modules for skill installer",s),null}}getAgentBridgeSkillStatus(){let e=this.getSkillInstallerDeps();return e?{...Rt(e),available:!0}:{available:!1}}async installAgentBridgeSkill(e={}){let t=this.getSkillInstallerDeps();if(!t)throw new Error("Skill install requires Node filesystem access (desktop Obsidian). Skipping on this device.");let r=Qr(t,e);return await this.emitAuditEvent("bridge.skill_installed",r.filePath,{action:r.action,overwriteUnmanaged:e.overwriteUnmanaged===!0}),r}async uninstallAgentBridgeSkill(e={}){let t=this.getSkillInstallerDeps();if(!t)throw new Error("Skill uninstall requires Node filesystem access (desktop Obsidian).");let r=Xr(t,e);return r.removed&&await this.emitAuditEvent("bridge.skill_uninstalled",r.filePath,{force:e.force===!0}),r}revokeAgentBridgeLease(e){return this.ensureAgentBridge().revokeLease(e)}revokeAllAgentBridgeLeases(){this.ensureAgentBridge().revokeAllLeases()}async startAgentBridgeServer(){return this.ensureAgentBridge().startHttpServer()}async stopAgentBridgeServer(){await this.ensureAgentBridge().stopHttpServer()}async confirmAgentBridgeWrite(e){let t=e.operation==="create"?"create":"patch",r=`VaultGuard Sync: Agent "${e.lease.agentName}" wants to ${t} "${e.path}".

Scope: ${e.lease.scopes.join(", ")}
Lease expires: ${e.lease.expiresAt}

Preview:
${e.preview}

Allow this write?`;return typeof window<"u"&&typeof window.confirm=="function"?window.confirm(r):!1}openAgentBridgeLeaseModal(){new Pe(this).open()}async loadSettings(){let e=await this.loadData()??{};this.persistedSessions=this.normalizePersistedSessions(e.storedSessions);let{storedSessions:t,...r}=e;this.settings=Object.assign({},Bt,r),this.settings.excludedPaths=this.withRequiredExcludedPaths(this.settings.excludedPaths),this.settings.apiEndpoint=Q(this.settings.apiEndpoint),this.configuredApiEndpoint=this.settings.apiEndpoint,this.serverEdition=this.normalizeServerEdition(this.settings.serverEdition),this.serverFeatures=this.normalizeServerFeatures(this.settings.serverFeatures),this.derivedBindingId=await this.computeDerivedVaultBindingId()}normalizeServerEdition(e){return e==="community"||e==="pro"?e:null}normalizeServerFeatures(e){if(!e||typeof e!="object")return null;let t=e;return{shareLinks:!!t.shareLinks,advancedAudit:!!t.advancedAudit,billing:!!t.billing,webAdmin:!!t.webAdmin}}communityServerFeatures(){return{shareLinks:!1,advancedAudit:!1,billing:!1,webAdmin:!1}}cacheServerCapabilities(e){let t=this.normalizeServerEdition(e.edition)??"pro",r=this.normalizeServerFeatures(e.features)??(t==="community"?this.communityServerFeatures():{...Dt}),s=this.serverEdition!==t||!this.serverFeatures||this.serverFeatures.shareLinks!==r.shareLinks||this.serverFeatures.advancedAudit!==r.advancedAudit||this.serverFeatures.billing!==r.billing||this.serverFeatures.webAdmin!==r.webAdmin;return this.serverEdition=t,this.serverFeatures={...r},this.settings.serverEdition=t,this.settings.serverFeatures={...r},this.settings.serverFeaturesResolvedAt=new Date().toISOString(),s}async refreshServerCapabilitiesFromConfiguredEndpoint(){let e=this.getEffectiveConfig(),t=Q(e.apiEndpoint),r=Array.from(new Set([this.settings.orgSlug,e.organizationId].map(a=>(a??"").trim()).filter(a=>a.length>0)));if(!t||r.length===0)return!1;let s=null;for(let a of r){let n=`${t}/orgs/${encodeURIComponent(a)}/config`;try{let o=await(0,b.requestUrl)({url:n,method:"GET",throw:!1});if(o.status===404)continue;if(o.status===401||o.status===403)return!1;if(o.status<200||o.status>=300){s=new Error(`Server returned ${o.status}`);continue}if(!o.json||typeof o.json!="object"){s=new Error("Invalid config response from server");continue}let l=o.json;typeof l.orgSlug=="string"&&l.orgSlug&&(this.settings.orgSlug=l.orgSlug);let c=this.cacheServerCapabilities(l);return await this.saveSettings(),c}catch(o){s=o instanceof Error?o:new Error(String(o))}}return s&&this.logError("Server capability discovery failed",s),!1}withRequiredExcludedPaths(e){let t=[],r=new Set,s=a=>{let n=a.trim().replace(/^\/+/,"").replace(/\/+$/,"");!n||r.has(n)||(r.add(n),t.push(n))};for(let a of e??[])s(a);for(let a of Vt)s(a);return t}async saveSettings(){let e=Q(this.settings.apiEndpoint),t=e!==this.configuredApiEndpoint;this.settings.apiEndpoint=e,await this.savePluginData(),t&&(this.configuredApiEndpoint=e,this.resetResolvedApiEndpoint(),this.rebuildApiClient())}clearResolvedConnectionFields(){this.settings.orgSlug="",this.settings.apiEndpoint="",this.settings.organizationId="",this.settings.cognitoUserPoolId="",this.settings.cognitoClientId="",this.settings.serverEdition=void 0,this.settings.serverFeatures=void 0,this.settings.serverFeaturesResolvedAt=void 0,this.serverEdition=null,this.serverFeatures=null}async resetCloudConnectionDefaults(){this.session&&await this.forceLogout("VaultGuard Sync: Logged out because the connection target changed."),this.settings.manualConfig=!1,this.clearResolvedConnectionFields(),await this.saveSettings()}async setManualConfigurationMode(e){(this.settings.manualConfig??!1)!==e&&(this.session&&await this.forceLogout("VaultGuard Sync: Logged out because the connection mode changed."),this.settings.manualConfig=e,this.clearResolvedConnectionFields(),await this.saveSettings())}getConnectionTargetLabel(){let t=this.getEffectiveConfig().apiEndpoint||"not configured",r=this.settings.manualConfig?"manual/self-hosted":"VaultGuard Cloud",s=this.settings.orgSlug||this.settings.organizationId||(this.settings.manualConfig?"":"not connected");return s?`${r}: ${t} (${s})`:`${r}: ${t}`}readConfigString(e,t){let r=e[t];return typeof r=="string"?r.trim():""}applyResolvedConnectionConfig(e,t,r=""){let s=this.readConfigString(e,"cognitoUserPoolId"),a=this.readConfigString(e,"cognitoClientId");if(!s||!a)throw new Error("Invalid config response from server");let n=Q(this.readConfigString(e,"apiEndpoint")||t);if(!n)throw new Error("Invalid config response from server: missing API endpoint");let o=this.readConfigString(e,"orgSlug")||r,l=this.readConfigString(e,"orgId")||this.readConfigString(e,"organizationId");o&&(this.settings.orgSlug=o),this.settings.apiEndpoint=n,this.settings.organizationId=l,this.settings.cognitoUserPoolId=s,this.settings.cognitoClientId=a,this.cacheServerCapabilities(e)}assertHttpsOrLocalhostUrl(e,t){let r;try{r=new URL(e.trim())}catch{throw new Error(`Enter a valid ${t}.`)}let s=r.hostname.toLowerCase(),a=s==="localhost"||s==="127.0.0.1"||s==="::1"||s==="[::1]";if(r.protocol!=="https:"&&!(r.protocol==="http:"&&a))throw new Error(`${t} must use HTTPS, except localhost during development.`);return r}normalizeManualServerConfigUrl(e){return this.assertHttpsOrLocalhostUrl(e,"server config URL").toString()}async applyManualServerConfigUrl(e){let t=this.normalizeManualServerConfigUrl(e),r=new URL(t),s=await Promise.race([(0,b.requestUrl)({url:t,method:"GET",throw:!1}),new Promise((o,l)=>setTimeout(()=>l(new Error("Server config request timed out after 10 seconds.")),le.MANUAL_CONFIG_TIMEOUT_MS))]);if(s.status<200||s.status>=300)throw new Error(`Server returned ${s.status}`);if((s.text??"").length>le.MANUAL_CONFIG_MAX_BYTES)throw new Error("Server config response is unexpectedly large; rejecting to prevent memory exhaustion.");if(!s.json||typeof s.json!="object"||Array.isArray(s.json))throw new Error("Invalid config response from server: expected a JSON object");let n=s.json;this.validateWellKnownConfig(n,r),this.session&&await this.forceLogout("VaultGuard Sync: Logged out because the connection target changed."),this.settings.manualConfig=!0,this.applyResolvedConnectionConfig(n,r.origin,this.settings.orgSlug),await this.saveSettings(),this.rebuildApiClient()}validateWellKnownConfig(e,t){let r=this.readConfigString(e,"cognitoUserPoolId"),s=this.readConfigString(e,"cognitoClientId");if(!r||!s)throw new Error("Invalid config response from server: missing Cognito identifiers");if(!/^[a-z]{2}-[a-z]+-\d+_[A-Za-z0-9]{6,}$/.test(r))throw new Error("Invalid config response from server: cognitoUserPoolId is not a valid Cognito pool identifier");if(!/^[a-z0-9]{20,26}$/.test(s))throw new Error("Invalid config response from server: cognitoClientId is not a valid Cognito app client identifier");let a=this.readConfigString(e,"orgSlug");if(a&&!/^[a-z0-9][a-z0-9-]{0,46}[a-z0-9]$/.test(a))throw new Error("Invalid config response from server: orgSlug is not a valid identifier");let n=this.readConfigString(e,"apiEndpoint");if(n){let o;try{o=new URL(n)}catch{throw new Error("Invalid config response from server: apiEndpoint is not a parseable URL")}if(this.assertHttpsOrLocalhostUrl(n,"API endpoint"),o.hostname.toLowerCase()!==t.hostname.toLowerCase())throw new Error(`Invalid config response from server: apiEndpoint host (${o.hostname}) does not match the pasted URL host (${t.hostname}). To use a separate API host, paste that host's /.well-known/vaultguard.json URL directly.`)}}getEffectiveConfig(){return this.settings.manualConfig?{apiEndpoint:this.settings.apiEndpoint,cognitoUserPoolId:this.settings.cognitoUserPoolId,cognitoClientId:this.settings.cognitoClientId,organizationId:this.settings.organizationId}:{apiEndpoint:this.settings.apiEndpoint||te.apiEndpoint,cognitoUserPoolId:this.settings.cognitoUserPoolId||te.cognitoUserPoolId,cognitoClientId:this.settings.cognitoClientId||te.cognitoClientId,organizationId:this.settings.organizationId}}rebuildApiClient(){this.apiClient&&(this.apiClient.destroy(),this.apiClient=null);let e=this.getEffectiveConfig();e.apiEndpoint&&(this.apiClient=new ct({baseUrl:e.apiEndpoint,orgId:e.organizationId,vaultId:this.settings.serverVaultId,getAuthTokens:async(t=!1)=>{if(!this.session)return null;let r=new Date(this.session.tokenExpiresAt).getTime();return(t||r-Date.now()<=6e4)&&!(await this.refreshAccessToken(this.session)).ok||!this.session?null:{accessToken:this.session.accessToken,refreshToken:this.session.refreshToken,idToken:this.session.idToken,expiresAt:new Date(this.session.tokenExpiresAt).getTime()}},getSessionId:()=>this.session?.sessionId??null}),this.session&&this.initializeApiClientFromSession(this.session))}resetResolvedApiEndpoint(){this.resolvedApiEndpoint=null,this.apiEndpointResolutionPromise=null}async getResolvedApiEndpoint(e,t){let r=Q(this.getEffectiveConfig().apiEndpoint);if(!r)return"";if(this.resolvedApiEndpoint)return this.resolvedApiEndpoint;if(!e)return r;if(this.apiEndpointResolutionPromise)return await this.apiEndpointResolutionPromise;let s=ot(r,e,t);this.apiEndpointResolutionPromise=s;try{return this.resolvedApiEndpoint=await s,this.resolvedApiEndpoint}finally{this.apiEndpointResolutionPromise===s&&(this.apiEndpointResolutionPromise=null)}}registerCommands(){this.addCommand({id:"login",name:"Login",callback:()=>this.handleLogin()}),this.addCommand({id:"logout",name:"Logout",checkCallback:e=>{if(e)return!!this.session;this.forceLogout()}}),this.addCommand({id:"sync-now",name:"Sync Now",callback:()=>this.performSync({userInitiated:!0,forceCatchup:!0})}),this.addCommand({id:"manage-share-links",name:"Manage share links",checkCallback:e=>{let t=!!this.session&&!!this.apiClient&&!!this.settings.serverVaultId;if(e)return t;t&&(this.featureEnabled("shareLinks")?this.openShareManagementModal():new ve(this.app,"shareLinks").open())}}),this.addCommand({id:"status",name:"Status",callback:()=>this.showStatusNotice()}),this.addCommand({id:"open-menu",name:"Open VaultGuard Sync Menu",callback:()=>this.showVaultGuardMenu()}),this.addCommand({id:"open-audit-log",name:"Open Audit Log",checkCallback:e=>{let t=this.session?.role==="admin"||this.session?.role==="owner",r=!!this.session&&t&&!!this.apiClient;if(e)return r;r&&this.openAuditLog()}}),this.addCommand({id:"open-web-admin",name:"Open Web Admin Panel",checkCallback:e=>{let t=!!this.session;if(e)return t;t&&this.openWebAdminPanel()}}),this.addCommand({id:"open-settings",name:"Open VaultGuard Sync Settings",callback:()=>this.openVaultGuardSettings()}),this.addCommand({id:"view-permissions",name:"View Permissions",callback:()=>this.showPermissionsModal()}),this.addCommand({id:"files-panel",name:"Open VaultGuard Sync Files Panel",callback:()=>this.activateVaultGuardSidebar()}),this.addCommand({id:"create-agent-bridge-lease",name:"Create Agent Bridge Lease",checkCallback:e=>{if(b.Platform.isMobileApp)return!1;let t=!!this.session&&!!this.settings.serverVaultId;if(e)return t;this.openAgentBridgeLeaseModal()}}),this.addCommand({id:"revoke-agent-bridge-leases",name:"Revoke Agent Bridge Leases",checkCallback:e=>{if(b.Platform.isMobileApp)return!1;if(e)return!0;this.revokeAllAgentBridgeLeases(),this.stopAgentBridgeServer().catch(t=>this.logError("Stopping agent bridge server failed",t)),new b.Notice("VaultGuard Sync: Agent bridge leases revoked.")}}),this.addCommand({id:"vaultguard-agent-bridge-info",name:"VaultGuard: Agent bridge (desktop only)",callback:()=>{if(b.Platform.isMobileApp){new b.Notice("Agent bridge requires Obsidian desktop. This feature is unavailable on mobile.",6e3);return}if(!this.session||!this.settings.serverVaultId){new b.Notice("Agent bridge requires Obsidian desktop. Sign in and pick a vault to mint a lease.",6e3);return}this.openAgentBridgeLeaseModal()}}),this.addCommand({id:"check-for-updates",name:"Check for plugin updates",callback:async()=>{if(!this.updateChecker){new b.Notice("VaultGuard Sync: update checker is not initialized.");return}new b.Notice("VaultGuard Sync: checking for updates\u2026");let e=await this.updateChecker.checkNow();if(e.latest===null){new b.Notice(this.settings.disableUpdateChecks?"VaultGuard Sync: update checks are disabled in settings.":"VaultGuard Sync: couldn't reach the release feed. Try again later.",6e3);return}e.isNewer||new b.Notice(`VaultGuard Sync: you're on the latest version (${this.manifest.version}).`,5e3)}}),this.addCommand({id:"encrypt-vault-at-rest",name:"Encrypt vault at rest (full pass)",callback:()=>{this.encryptVaultAtRest()}}),this.addCommand({id:"decrypt-vault-at-rest",name:"Decrypt vault at rest (back to plaintext)",callback:()=>{this.decryptVaultAtRest()}}),this.addCommand({id:"pick-vault",name:"Pick or Switch Server Vault",checkCallback:e=>{if(e)return!!this.session&&!!this.apiClient;this.switchServerVault()}}),this.addCommand({id:"admin",name:"Manage Organization",checkCallback:e=>{let t=this.session?.role==="admin"||this.session?.role==="owner";if(e)return t;t&&this.showAdminPanel()}}),this.registerEvent(this.app.workspace.on("file-menu",(e,t)=>{if(!this.session||!this.apiClient)return;let r=this.isEffectiveAdmin(),s=t.path,a=t instanceof b.TFolder,n=a?"folder":"file";e.addItem(o=>{o.setTitle(`VaultGuard Sync: View ${n} permissions`).setIcon("shield").onClick(()=>{this.showPathPermissionsModal(s,a)})}),a||e.addItem(o=>{o.setTitle("VaultGuard Sync: Copy share link").setIcon("link").onClick(()=>{if(!this.featureEnabled("shareLinks")){new ve(this.app,"shareLinks").open();return}this.copyShareLinkForPath(s)})}),r&&e.addItem(o=>{o.setTitle(`VaultGuard Sync: Set permissions on ${n}`).setIcon("lock").onClick(()=>{this.showAddPermissionForPath(s,a)})})}))}openShareManagementModal(){!this.apiClient||!this.session||new Ye(this.app,this.apiClient).open()}async copyShareLinkForPath(e){if(!this.session||!this.apiClient||!this.settings.serverVaultId){new b.Notice("VaultGuard Sync: Log in and bind this vault before sharing.");return}let t;try{t=await this.apiClient.createShare({relPath:e})}catch(r){let s=r instanceof Error?r.message:String(r);new b.Notice(`VaultGuard Sync: Couldn't create share link \u2014 ${s}`,8e3);return}try{await navigator.clipboard.writeText(t.url),new b.Notice(`VaultGuard Sync: Share link copied \u2014 ${t.url}`,6e3)}catch{new b.Notice(`VaultGuard Sync: Share link: ${t.url}`,12e3)}}async restoreSession(){let e=this.loadSessionFromStore();if(e&&this.log("Session restored via safe-storage path"),e||(e=await this.loadAtRestSessionFromStore(),e&&this.log("Session restored via at-rest-cipher path")),!e){this.log("No stored session found."),b.Platform.isMobileApp&&this.settings.debugLogging&&new b.Notice("VaultGuard diag: no stored session \u2014 login required",5e3);return}let t=this.decodeJwtPayload(e.idToken);if(this.syncSettingsFromTokenPayload(t,e.roles)&&(this.rebuildApiClient(),this.saveSettings().catch(s=>{this.logError("Failed to persist session-derived settings",s)})),this.session=e,this.initializeApiClientFromSession(e),this.log(`Session restored for user: ${e.displayName}`),this.updateStatusBar(),b.Platform.isMobileApp&&this.settings.debugLogging){let s=(e.userId??"").slice(0,6)||"\u2014",a=this.settings.serverVaultId??"",n=a.length>0?a.slice(0,6):"\u2014";new b.Notice(`VaultGuard diag: session restored (user=${s}, vault=${n})`,5e3)}this.runPermissionWarmup().then(()=>this.permissionStore.sweepLeavesAfterWarm()).catch(s=>{this.logError("Permission store warm-up failed (non-blocking)",s)})}handleLogin(e){let t=this.settings.manualConfig===!0,r=!!te.cognitoUserPoolId&&!!te.cognitoClientId,s=e?.requireOrgSlug??(!t&&!r);new Ke(this.app,async n=>{if(t){let l=this.getEffectiveConfig();if(!l.apiEndpoint||!l.organizationId||!l.cognitoUserPoolId||!l.cognitoClientId)throw new Error("Manual configuration requires API endpoint, organization ID, Cognito User Pool ID, and Cognito Client ID.");await this.refreshServerCapabilitiesFromConfiguredEndpoint()}else{let l=n.orgSlug;l&&(l!==this.settings.orgSlug||!this.serverFeatures)&&await this.resolveOrgConfig(l)}let o=this.getEffectiveConfig();if(!o.cognitoUserPoolId||!o.cognitoClientId)throw new Error("Organization configuration could not be resolved. Check the slug and try again.");await this.performLogin(n)},"server-managed",!1,this.settings.orgSlug,async n=>{let o=this.getEffectiveConfig();if(!o.cognitoUserPoolId||!o.cognitoClientId)throw new Error("Organization configuration not resolved. Please enter your org slug and try logging in first.");await yr(o.cognitoUserPoolId,o.cognitoClientId,n)},async(n,o,l)=>{let c=this.getEffectiveConfig();if(!c.cognitoUserPoolId||!c.cognitoClientId)throw new Error("Organization configuration not resolved. Please enter your org slug and try logging in first.");await wr(c.cognitoUserPoolId,c.cognitoClientId,n,o,l)},e?.prefillEmail??"",e?.firstTimeSetup??!1,s,async(n,o)=>{let l=this.getEffectiveConfig();if(!l.apiEndpoint)throw new Error("API endpoint not configured. Enter your org slug or API endpoint first.");await br(l.apiEndpoint,n,o),this.pendingChallengeSession=null}).open()}async redeemInvite(e){let t=(e.org??e.slug??"").trim().toLowerCase();if(!t)throw new b.Notice("VaultGuard Sync invite link is missing the org slug."),new Error("Missing org slug in invite link.");if(e.api){if(!this.settings.manualConfig)throw new Error("Invite links cannot override the VaultGuard Cloud API endpoint. Switch to manual configuration for self-hosted invite links.");let s=Q(e.api);s&&(this.settings.apiEndpoint=s,await this.saveSettings())}new b.Notice(`VaultGuard Sync: Connecting to "${t}"...`);try{await this.resolveOrgConfig(t)}catch(s){let a=s instanceof Error?s.message:String(s);throw new b.Notice(`VaultGuard Sync: Failed to resolve organization "${t}". ${a}`),s}if(this.session){new b.Notice(`VaultGuard Sync: Already signed in as ${this.session.email}. Logout first to redeem this invite.`);return}let r=(e.email??"").trim();this.handleLogin({prefillEmail:r,firstTimeSetup:!0,requireOrgSlug:!1})}async performLogin(e){let t=this.getEffectiveConfig();if(!t.cognitoUserPoolId||!t.cognitoClientId)throw new Error("Cognito User Pool ID and Client ID must be configured in settings.");let r;if(this.pendingChallengeSession&&e.mfaCode?(r=await Ot(t.cognitoUserPoolId,t.cognitoClientId,"SOFTWARE_TOKEN_MFA",this.pendingChallengeSession,{USERNAME:e.email,SOFTWARE_TOKEN_MFA_CODE:e.mfaCode}),this.pendingChallengeSession=null):r=await $t(t.cognitoUserPoolId,t.cognitoClientId,e.email,e.password),r.challengeName){if(this.pendingChallengeSession=r.session??null,r.challengeName==="SOFTWARE_TOKEN_MFA"||r.challengeName==="SMS_MFA")throw new Error("MFA code required");if(r.challengeName==="MFA_SETUP"){await this.handleMfaSetup(r.session??"",e);return}throw r.challengeName==="NEW_PASSWORD_REQUIRED"?new Error("Password change required. Please contact your administrator."):new Error(`Authentication challenge: ${r.challengeName}`)}await this.completeLogin(r,e.email)}async handleMfaSetup(e,t){let r=this.getEffectiveConfig(),s=await fr(r.cognitoUserPoolId,e);return new Promise((a,n)=>{new Xe(this.app,{secretCode:s.secretCode,email:t.email,session:s.session,onVerify:async(l,c)=>mr(r.cognitoUserPoolId,c,l),onComplete:async l=>{try{let c=await Ot(r.cognitoUserPoolId,r.cognitoClientId,"MFA_SETUP",l.session,{USERNAME:t.email});if(c.challengeName==="SOFTWARE_TOKEN_MFA"){this.pendingChallengeSession=c.session??null,new b.Notice("VaultGuard Sync: MFA enabled! Please log in again with your authenticator code."),a();return}c.tokens.idToken&&(await this.completeLogin(c,t.email),await this.storeRecoveryCodes(t.email,l.recoveryCodes,c.tokens.idToken),new b.Notice("VaultGuard Sync: MFA enabled and logged in successfully.")),a()}catch{new b.Notice("VaultGuard Sync: MFA enabled! Please log in again with your authenticator code."),a()}}}).open()})}async storeRecoveryCodes(e,t,r){let s=[];for(let a of t){let n=a.replace(/[^a-z0-9]/gi,"").toLowerCase();s.push(await this.computeHash(n))}try{let a=await this.apiRequest("POST","/auth/recovery-codes",{codes:s},r);a.success||(this.log(`Recovery codes not stored: ${a.error?.message??"unknown"}`),new b.Notice("VaultGuard Sync: Couldn't save recovery codes to the server. Keep the codes you wrote down \u2014 you can regenerate from settings later."))}catch(a){this.log(`Failed to store recovery codes: ${a.message}`),new b.Notice("VaultGuard Sync: Couldn't save recovery codes to the server. Keep the codes you wrote down \u2014 you can regenerate from settings later.")}}async completeLogin(e,t){let r=this.decodeJwtPayload(e.tokens.idToken),s=new Date(Date.now()+e.tokens.expiresIn*1e3),a=await this.openServerSession(e.tokens.idToken),n=a.roles??[],o=n.length>0?n:this.deriveFallbackRoles(r),l=Ze(r,o);if(this.session={sessionId:a.sessionId,userId:a.userId||r.sub||"",organizationId:l.organizationId||this.getEffectiveConfig().organizationId,displayName:r.name||a.email||r.email||t,email:a.email||r.email||t,accessToken:e.tokens.accessToken,idToken:e.tokens.idToken,refreshToken:e.tokens.refreshToken,tokenExpiresAt:s.toISOString(),role:this.derivePrimaryRole(r,n),roles:o,createdAt:new Date().toISOString()},this.keyLease=null,this.applyOrgSettings(a.orgSettings??this.orgSettings),this.syncSettingsFromTokenPayload(r,o)&&await this.saveSettings(),!this.settings.manualConfig&&this.session.organizationId)try{await this.resolveOrgConfig(this.session.organizationId,{silent:!0})}catch(d){this.logError("Cloud org config refresh after login failed",d)}if(this.rebuildApiClient(),this.initializeApiClientFromSession(this.session),await this.persistSession(this.session),this.startKeyRenewalMonitor(),this.startHeartbeatMonitor(),new b.Notice(`VaultGuard Sync: Logged in as ${this.session.displayName}`),this.settings.serverVaultId||(this.setConnectionStatus("online"),await this.promptVaultBinding()),this.settings.serverVaultId){if(await this.refreshVaultMemberRole(),await this.ensureVaultScopedKeyLease()==="logged-out"||!this.session)return;this.setConnectionStatus("online"),this.initializeSyncEngine().catch(u=>{this.logError("Sync engine init failed (non-blocking)",u)})}else this.log("Vault binding skipped \u2014 sync engine deferred until a vault is picked.")}async promptVaultBinding(){if(!this.apiClient)return this.log("promptVaultBinding: no apiClient, skipping."),!1;let e=this.app.vault.getName()||"My Vault",t=this.session?.role==="admin"||this.session?.role==="owner",r=!1,{VaultPickerModal:s}=await Promise.resolve().then(()=>(ei(),Zr));return await new Promise(a=>{let n=new s(this.app,this.apiClient,{suggestedName:e,canCreateVaults:t},async o=>{r=await this.applyVaultBinding(o)});n.onClose=()=>{n.contentEl.empty(),a()},n.open()}),r}async applyVaultBinding(e){let t=this.settings.serverVaultId!==e.vaultId;return t&&(this.keyLease=null),this.settings.serverVaultId=e.vaultId,this.settings.serverVaultName=e.name,this.settings.serverVaultSlug=e.slug,t&&(delete this.settings.bindingReconciledVaultId,delete this.settings.lastSyncTimestamp,this.syncState.lastSync=null,this.permissionStore.emit("changed",{serverConfirmed:!0}),this.localOnlyCatchupCompleted=!1,this.stopSyncTimer()),await this.saveSettings(),this.rebuildApiClient(),this.session&&this.initializeApiClientFromSession(this.session),t&&(this.vaultMemberRole=null,await this.refreshVaultMemberRole(),await this.ensureVaultScopedKeyLease()),t}decodeJwtPayload(e){try{let t=e.split(".")[1],r=atob(t.replace(/-/g,"+").replace(/_/g,"/"));return JSON.parse(r)}catch{return{}}}deriveFallbackRoles(e){let t=e["cognito:groups"];if(Array.isArray(t))return t.filter(s=>typeof s=="string");let r=[e["custom:orgRole"],e["custom:role"]].filter(s=>typeof s=="string"&&s.length>0);return r.length>0?r:["member"]}derivePrimaryRole(e,t){let r=[...t,...this.deriveFallbackRoles(e)].map(s=>s.trim().toLowerCase());return r.includes("owner")?"owner":r.includes("admin")||r.includes("vault-admin")?"admin":r.includes("editor")||r.includes("write")?"editor":"member"}getEffectiveUiRole(){return this.session?this.session.role==="owner"||this.session.role==="admin"?this.session.role:this.vaultMemberRole?this.vaultMemberRole:this.session.role:"member"}isEffectiveAdmin(){let e=this.getEffectiveUiRole();return e==="admin"||e==="owner"}async refreshVaultMemberRole(){if(!this.session||!this.settings.serverVaultId||!this.apiClient){this.vaultMemberRole=null,this.applyEffectiveRoleToUi();return}try{let e=await this.getCurrentVaultMemberRole();this.vaultMemberRole=e}catch(e){this.logError("Failed to refresh vault membership role",e),this.vaultMemberRole=null}this.applyEffectiveRoleToUi(),this.permissionStore.emit("changed",{serverConfirmed:!0}),this.runPermissionWarmup().catch(e=>{this.logError("Permission cache warm-up failed (non-blocking)",e)})}async collectRulesForWarmup(){if(!this.session||!this.apiClient)return[];if(this.session.role==="admin"||this.session.role==="owner")return[];try{return this.isEffectiveAdmin()?await this.apiClient.getPermissions():await this.apiClient.getUserPermissions(this.session.userId)}catch(e){return this.log(`Permission warm-up: rules fetch failed: ${e.message}`),[]}}async runPermissionWarmup(){if(!this.session||!this.apiClient||!this.settings.serverVaultId)return;this.permissionWarmupInFlight=this.permissionWarmupInFlight+1,this.updateStatusBar();let e=(async()=>{try{let t=await this.collectRulesForWarmup();await this.permissionStore.warm(t,this.vaultMemberRole),this.hasWarmedAtLeastOnce=!0}finally{this.permissionWarmupInFlight=Math.max(0,this.permissionWarmupInFlight-1),this.updateStatusBar()}})();return this.warmupCyclePromise=e,e.finally(()=>{this.warmupCyclePromise===e&&(this.warmupCyclePromise=null)}),e}async awaitPermissionWarmup(){let e=this.warmupCyclePromise??this.permissionStore.inFlightWarmup;if(!e)return;let t=null,r=new Promise(s=>{t=setTimeout(s,5e3)});try{await Promise.race([e.catch(()=>{}),r])}finally{t&&clearTimeout(t)}}async awaitPermissionReadiness(){let e=null,t=new Promise(r=>{e=setTimeout(r,5e3)});try{this.sessionResumePromise&&await Promise.race([this.sessionResumePromise,t])}finally{e&&clearTimeout(e)}await this.awaitPermissionWarmup()}applyEffectiveRoleToUi(){let e=this.getEffectiveUiRole(),t=this.session?.userId??"",r=this.isEffectiveAdmin();this.filePermissionHeader?.setContext({currentUserId:t,currentUserEmail:this.session?.email??"",currentUserRole:e,isAdmin:r}),this.filePermissionHeader?.invalidateCache(),this.filePermissionHeader?.update({force:!0}),this.fileExplorerDecorations?.setConfig({currentUserId:t,currentUserRole:e}),this.syncFileExplorerDecorationsState();let s=this.createSidebarViewConfig();if(s){this.sidebarViewConfig=s;let a=this.app.workspace.getLeavesOfType(se);for(let n of a){let o=n.view;o?.configure&&o.configure(s),o?.reload&&o.reload()}}}normalizeKeyLease(e){if(!e.key||!e.expiresAt||!e.refreshToken||!e.leaseId)throw new Error("VaultGuard Sync: Server did not return a usable encryption key lease.");return{key:e.key,expiresAt:e.expiresAt,refreshToken:e.refreshToken,leaseId:e.leaseId,algorithm:e.algorithm??"AES-256-GCM",offlineCapable:e.offlineCapable??!0,encryptedDataKey:e.encryptedDataKey,scope:e.scope??"/**",vaultId:e.vaultId}}async openServerSession(e){let t=await this.apiRequest("POST","/auth/session",void 0,e);if(!t.success||!t.data)throw new Error(t.error?.message??"VaultGuard Sync: Failed to create a server session.");return t.data}async resumeStoredSession(){if(!this.session)return;let e=this.session;if(this.isSessionTokenExpiring(e)){let t=await this.refreshAccessToken(e);if(!t.ok){this.log(`Stored session token refresh deferred: ${t.message}`);return}if(!this.session)return;e=this.session}await this.restoreServerSession(e)}async restoreServerSession(e){let t=null;if(e.sessionId&&this.settings.serverVaultId){let r=new URLSearchParams({sessionId:e.sessionId,vaultId:this.settings.serverVaultId});t=await this.apiRequest("GET",`/auth/key-lease?${r.toString()}`,void 0,e.idToken)}if(t?.success&&t.data)this.session=e,this.keyLease=this.normalizeKeyLease(t.data.keyLease),this.applyOrgSettings(t.data.orgSettings??this.orgSettings);else{let r=await this.openServerSession(e.idToken);this.session={...e,sessionId:r.sessionId,userId:r.userId||e.userId,email:r.email||e.email,role:this.derivePrimaryRole({},r.roles??e.roles),roles:r.roles?.length?r.roles:e.roles},this.keyLease=null,this.applyOrgSettings(r.orgSettings??this.orgSettings)}if(this.session&&(this.initializeApiClientFromSession(this.session),await this.persistSession(this.session)),this.startKeyRenewalMonitor(),this.startHeartbeatMonitor(),this.settings.serverVaultId){if(await this.refreshVaultMemberRole(),!this.keyLease&&(await this.ensureVaultScopedKeyLease()==="logged-out"||!this.session))return;this.vaultLeaseDenied&&await this.sweepPlaceholderPaths()}this.setConnectionStatus("online"),this.syncTimer||this.initializeSyncEngine().catch(r=>{this.logError("Sync engine init failed (non-blocking)",r)})}async refreshAccessToken(e){let t=this.getEffectiveConfig();if(!t.cognitoUserPoolId||!t.cognitoClientId||!e.refreshToken){let r="missing Cognito config or refresh token";return this.log(`Cannot refresh: ${r}, keeping session.`),this.session=e,{ok:!1,message:r}}try{let r=await vr(t.cognitoUserPoolId,t.cognitoClientId,e.refreshToken),s=new Date(Date.now()+r.expiresIn*1e3),a=this.decodeJwtPayload(r.idToken),n=this.syncSettingsFromTokenPayload(a,e.roles);return this.session={...e,accessToken:r.accessToken,idToken:r.idToken,refreshToken:r.refreshToken,tokenExpiresAt:s.toISOString(),organizationId:Ze(a,e.roles).organizationId||e.organizationId},n&&await this.saveSettings(),this.rebuildApiClient(),this.initializeApiClientFromSession(this.session),await this.persistSession(this.session),this.log("Cognito tokens refreshed successfully."),{ok:!0}}catch(r){return this.logError("Cognito token refresh failed, keeping session",r),this.session=e,{ok:!1,message:r instanceof Error?r.message:"Token refresh failed",error:r}}}isSessionTokenExpiring(e,t=6e4){let r=new Date(e.tokenExpiresAt).getTime();return!Number.isFinite(r)||r-Date.now()<=t}getSession(){return this.session}getAtRestStatus(){return this.atRestCipher?.getStatus()??{kind:"uninitialized"}}async tallyAtRestState(){let e=this.atRestCipher,t=this.originalAdapterMethods.readBinary,r=this.app.vault.getFiles(),s=0,a=0,n=0,o=0;if(!e||!t)return{plaintext:0,encrypted:0,excluded:0,failed:0,total:r.length};for(let l of r){if(this.isAtRestExcluded(l.path)){n+=1;continue}try{let c=await t(l.path);e.isEncrypted(c)?a+=1:s+=1}catch{o+=1}}return{plaintext:s,encrypted:a,excluded:n,failed:o,total:r.length}}async verifyAccountPassword(e){if(!this.session?.email)throw new Error("VaultGuard Sync: no active session to verify against.");let t=this.getEffectiveConfig();if(!t.cognitoUserPoolId||!t.cognitoClientId)throw new Error("VaultGuard Sync: Cognito is not configured for this vault.");try{let r=await $t(t.cognitoUserPoolId,t.cognitoClientId,this.session.email,e);return!!r.tokens?.accessToken||!!r.challengeName}catch(r){if((r instanceof Error?r.message.toLowerCase():"").includes("invalid email or password"))return!1;throw r}}async migrateVaultToAtRest(){return this.encryptVaultAtRest()}async revertVaultFromAtRest(){return this.decryptVaultAtRest()}async exportAtRestRecoveryCode(){if(!this.atRestCipher)throw new Error("VaultGuard Sync: at-rest cipher not initialised.");return this.atRestCipher.exportRecoveryCode()}async restoreAtRestFromRecoveryCode(e){return this.atRestCipher||await this.initAtRestCipher(),this.atRestCipher?this.atRestCipher.restoreFromRecoveryCode(e):!1}triggerLogin(){this.handleLogin()}openVaultGuardSettings(){let e=this.app,t=this.manifest?.id??"vaultguard";try{if(e.setting?.open&&e.setting?.openTabById){e.setting.open(),e.setting.openTabById(t);return}}catch(r){this.logError("Could not open VaultGuard settings",r)}new b.Notice("VaultGuard Sync: Open Settings \u2192 Community plugins \u2192 VaultGuard Sync.")}showVaultGuardMenu(e){let t=new b.Menu,r=!!this.session,s=this.session?.role==="admin"||this.session?.role==="owner",a=this.settings.serverVaultName||this.settings.serverVaultSlug||this.settings.serverVaultId||"No server vault bound";if(t.addItem(n=>n.setTitle(r?`${this.session.email} \xB7 ${a}`:"VaultGuard").setIcon("vaultguard-shield").setDisabled(!0)),t.addSeparator(),t.addItem(n=>n.setTitle("Vault settings").setIcon("settings").onClick(()=>this.openVaultGuardSettings())),!r){t.addItem(n=>n.setTitle("Login").setIcon("log-in").onClick(()=>this.handleLogin())),this.showMenu(t,e);return}t.addItem(n=>n.setTitle("Pick or switch server vault").setIcon("database").setDisabled(!this.apiClient).onClick(()=>{this.switchServerVault()})),t.addItem(n=>n.setTitle("Open files panel").setIcon("panel-right").onClick(()=>{this.activateVaultGuardSidebar()})),t.addItem(n=>n.setTitle("View my permissions").setIcon("shield-check").onClick(()=>this.showPermissionsModal())),s&&t.addItem(n=>n.setTitle("Audit log").setIcon("file-text").setDisabled(!this.apiClient).onClick(()=>this.openAuditLog())),t.addItem(n=>n.setTitle("Web admin panel").setIcon("external-link").onClick(()=>this.openWebAdminPanel())),t.addItem(n=>n.setTitle("Sync now").setIcon("refresh-cw").onClick(()=>{this.performSync({userInitiated:!0,forceCatchup:!0})})),s&&(t.addSeparator(),t.addItem(n=>n.setTitle("Manage organization").setIcon("users").onClick(()=>this.showAdminPanel()))),t.addSeparator(),t.addItem(n=>n.setTitle("Logout").setIcon("log-out").onClick(()=>{this.forceLogout()})),this.showMenu(t,e)}showMenu(e,t){if(t){e.showAtMouseEvent(t);return}let r=typeof window>"u"?{x:0,y:0}:{x:Math.max(16,Math.round(window.innerWidth/2)),y:Math.max(64,Math.round(window.innerHeight/3))};e.showAtPosition(r)}showLoginRequiredNotice(e,t){let r=t?this.normalizeVaultPath(t):"",s=r?`"${r}"`:"protected files",n=`VaultGuard Sync: Login required to ${this.loginRequiredActionText(e,s)}.`,o=Date.now();return(this.lastAuthRequiredNoticeAt===null||o-this.lastAuthRequiredNoticeAt>=As)&&(new b.Notice(`${n}
Log in from the VaultGuard Sync shield menu or run "VaultGuard Sync: Login" from the command palette.`,9e3),this.lastAuthRequiredNoticeAt=o),n}loginRequiredActionText(e,t){switch(e){case"open":return`open ${t}`;case"browse":return"show protected files";case"edit":return`edit ${t}`;case"delete":return`delete ${t}`;case"sync":return"sync this vault";case"view permissions":return"view permissions"}}createSidebarViewConfig(){return!this.session||!this.apiClient?null:{apiClient:this.apiClient,currentUserId:this.session.userId,currentUserRole:this.getEffectiveUiRole(),getPermissionLevel:e=>this.getEffectivePermission(e),onOpenMenu:e=>this.showVaultGuardMenu(e),onOpenSettings:()=>this.openVaultGuardSettings()}}async switchServerVault(){let e=await this.promptVaultBinding();return e&&this.settings.serverVaultId&&this.session&&this.initializeSyncEngine().catch(t=>{this.logError("Sync engine init failed after vault switch",t)}),e}async bindServerVault(e){let t=await this.applyVaultBinding(e);return t&&this.settings.serverVaultId&&this.session&&this.initializeSyncEngine().catch(r=>{this.logError("Sync engine init failed after vault binding update",r)}),t}async listServerVaults(){if(!this.apiClient)throw new Error("Not connected");return this.apiClient.listVaults()}async createServerVault(e){if(!this.apiClient)throw new Error("Not connected");return this.apiClient.createVault(e)}async getCurrentVaultRecord(){if(!this.settings.serverVaultId)return null;if(!this.apiClient)throw new Error("Not connected");let e=await this.apiClient.getVaultRecord(this.settings.serverVaultId);return await this.cacheCurrentVaultRecord(e),e}async getCurrentVaultMemberRole(){if(!this.session||!this.settings.serverVaultId)return null;if(!this.apiClient)throw new Error("Not connected");return(await this.apiClient.listVaultMembers(this.settings.serverVaultId)).find(t=>t.userId===this.session.userId)?.role??null}async updateCurrentVault(e){if(!this.settings.serverVaultId)throw new Error("No server vault is bound to this Obsidian folder.");if(!this.apiClient)throw new Error("Not connected");let t=await this.apiClient.updateVault(this.settings.serverVaultId,e);return await this.cacheCurrentVaultRecord(t),t}async listCurrentVaultMembers(){if(!this.settings.serverVaultId)throw new Error("No server vault is bound to this Obsidian folder.");if(!this.apiClient)throw new Error("Not connected");return this.apiClient.listVaultMembers(this.settings.serverVaultId)}async listOrganizationUsers(){if(!this.apiClient)throw new Error("Not connected");return this.apiClient.listUsers()}async addCurrentVaultMember(e,t){if(!this.settings.serverVaultId)throw new Error("No server vault is bound to this Obsidian folder.");if(!this.apiClient)throw new Error("Not connected");let r=await this.apiClient.addVaultMember(this.settings.serverVaultId,e,t);return this.refreshPermissionUiAfterMembershipChange(),r}async updateCurrentVaultMember(e,t){if(!this.settings.serverVaultId)throw new Error("No server vault is bound to this Obsidian folder.");if(!this.apiClient)throw new Error("Not connected");let r=await this.apiClient.updateVaultMember(this.settings.serverVaultId,e,t);return this.refreshPermissionUiAfterMembershipChange(),r}async removeCurrentVaultMember(e){if(!this.settings.serverVaultId)throw new Error("No server vault is bound to this Obsidian folder.");if(!this.apiClient)throw new Error("Not connected");await this.apiClient.removeVaultMember(this.settings.serverVaultId,e),this.refreshPermissionUiAfterMembershipChange()}refreshPermissionUiAfterMembershipChange(){this.permissionStore.emit("changed",{serverConfirmed:!0}),this.filePermissionHeader?.update({force:!0})}async cacheCurrentVaultRecord(e){if(this.settings.serverVaultId!==e.vaultId)return;let t=e.excludedPaths??[],r=e.pluginAllowlist??[],s=this.settings.serverExcludedPaths??[],a=this.settings.serverPluginAllowlist??[],n=this.settings.serverVaultName!==e.name||this.settings.serverVaultSlug!==e.slug,o=t.length!==s.length||t.some((c,d)=>c!==s[d]),l=JSON.stringify(r)!==JSON.stringify(a);this.settings.serverVaultName=e.name,this.settings.serverVaultSlug=e.slug,this.settings.serverExcludedPaths=t,this.settings.serverPluginAllowlist=r,(n||o||l)&&await this.saveSettings(),l&&this.reconcilePluginAllowlist().catch(c=>this.logError("Plugin allowlist reconciliation failed",c))}async runPluginAllowlistReconciliation(){return this.reconcilePluginAllowlist()}async reconcilePluginAllowlist(){if(this.allowlistReconcileInFlight)return this.allowlistReconcileInFlight;this.allowlistReconcileInFlight=this.runAllowlistReconcileInternal();try{await this.allowlistReconcileInFlight}finally{this.allowlistReconcileInFlight=null}}async runAllowlistReconcileInternal(){let e=this.settings.serverPluginAllowlist??[];if(e.length===0)return;let t=new Set(this.settings.pluginAllowlistIgnored??[]),r=this.app.vault.adapter,s=this.app.plugins;for(let a of e){if(t.has(a.pluginId))continue;let n=s?.enabledPlugins;if(n instanceof Set&&n.has(a.pluginId))continue;let o=`.obsidian/plugins/${a.pluginId}`,l=`${o}/main.js`,c=`${o}/manifest.json`,d="unsigned",u,p=null;try{let[m,v]=await Promise.all([r.exists(l),r.exists(c)]);!m||!v?d="missing":this.originalAdapterMethods.read&&(p=await this.originalAdapterMethods.read(l),a.bundleSha256?(u=await this.computeHash(p),d=u===a.bundleSha256.toLowerCase()?"verified":"mismatch"):d="unsigned")}catch(m){this.logError(`Allowlist: failed to inspect "${a.pluginId}"`,m),d="missing"}let f=await this.promptPluginAllowlistDecision({pluginId:a.pluginId,displayName:a.displayName,version:a.version,note:a.note,addedBy:a.addedBy,hashStatus:d,localHash:u,expectedHash:a.bundleSha256});if(f==="ignore"){let m=new Set(this.settings.pluginAllowlistIgnored??[]);m.add(a.pluginId),this.settings.pluginAllowlistIgnored=[...m],await this.saveSettings(),await this.emitAuditEvent("plugin.allowlist_skip",a.pluginId,{permanent:!0});continue}if(f==="skip"){await this.emitAuditEvent("plugin.allowlist_skip",a.pluginId);continue}if(d!=="verified"&&d!=="unsigned"){new b.Notice(`VaultGuard Sync: Cannot install "${a.displayName}" \u2014 ${d}.`);continue}try{s?.loadManifests&&await s.loadManifests(),typeof s?.enablePluginAndSave=="function"?(await s.enablePluginAndSave(a.pluginId),new b.Notice(`VaultGuard Sync: Enabled "${a.displayName}".`),await this.emitAuditEvent("plugin.allowlist_install",a.pluginId,{verified:d==="verified",version:a.version})):new b.Notice(`VaultGuard Sync: Could not auto-enable "${a.displayName}" \u2014 please enable it manually in Settings \u2192 Community plugins.`)}catch(m){this.logError(`Allowlist: enable "${a.pluginId}" failed`,m),new b.Notice(`VaultGuard Sync: Failed to enable "${a.displayName}" \u2014 ${m instanceof Error?m.message:"unknown error"}.`)}}}promptPluginAllowlistDecision(e){return new Promise(t=>{new Qe(this.app,e,t).open()})}async updateUserProfile(e,t){if(!this.apiClient)throw new Error("Not connected");await this.apiClient.updateUserProfile(e,{displayName:t}),this.session&&this.session.userId===e&&(this.session={...this.session,displayName:t},await this.persistSession(this.session))}async resolveOrgConfig(e,t={}){let r=Array.from(new Set([e.trim().toLowerCase(),e.trim().toLowerCase().replace(/^org-/,"")].filter(o=>o.length>0))),s=this.settings.manualConfig?[]:[te.fallbackApiUrl],a=Array.from(new Set([this.getEffectiveConfig().apiEndpoint,...s].filter(Boolean)));if(a.length===0)throw new Error("No API endpoint configured. Enter an API endpoint manually or ask your admin for the org slug.");let n=null;for(let o of a){let l=Q(o);for(let c of r){let d=`${l}/orgs/${encodeURIComponent(c)}/config`;try{let u=await(0,b.requestUrl)({url:d,method:"GET",throw:!1});if(u.status===404)throw new Error(`Organization "${e}" not found. Check the slug and try again.`);if(u.status<200||u.status>=300)throw new Error(`Server returned ${u.status}`);let p=u.json;if(!p||typeof p!="object")throw new Error("Invalid config response from server");if(this.applyResolvedConnectionConfig(p,l,c),await this.saveSettings(),this.rebuildApiClient(),this.log(`Org config resolved for "${this.settings.orgSlug}": API=${this.settings.apiEndpoint}`),!t.silent){let f=this.readConfigString(p,"orgName");new b.Notice(`VaultGuard Sync: Connected to ${f||this.settings.orgSlug}`)}return}catch(u){n=u instanceof Error?u:new Error(String(u))}}}throw n??new Error("Failed to resolve org configuration")}syncSettingsFromTokenPayload(e,t=[]){let r=Ze(e,t),s=!1;return r.organizationId&&r.organizationId!==this.settings.organizationId&&(this.settings.organizationId=r.organizationId,s=!0),r.orgSlug&&r.orgSlug!==this.settings.orgSlug&&(this.settings.orgSlug=r.orgSlug,s=!0),r.cognitoUserPoolId&&r.cognitoUserPoolId!==this.settings.cognitoUserPoolId&&(this.settings.cognitoUserPoolId=r.cognitoUserPoolId,s=!0),r.cognitoClientId&&r.cognitoClientId!==this.settings.cognitoClientId&&(this.settings.cognitoClientId=r.cognitoClientId,s=!0),s}getOrgPolicySettings(){return this.orgSettings}applyOrgSettings(e){this.orgSettings=e??null,this.filePermissionHeader?.setContext({allowAdminPerFileRestrictions:this.orgSettings?.allowAdminPerFileRestrictions===!0}),this.session?(this.restartSyncTimer(),this.scheduleAutoLockTimer()):this.stopAutoLockTimer()}getEffectiveSyncMode(){return this.orgSettings?.syncMode??"periodic"}getEffectiveSyncIntervalSeconds(){if(!this.orgSettings)return this.settings.syncInterval;switch(this.orgSettings.syncMode){case"realtime":return ti;case"periodic":return this.orgSettings.syncIntervalMinutes*60;default:return 0}}shouldUploadChangesImmediately(){return this.getEffectiveSyncMode()!=="manual"}registerSessionActivityTracking(){let e=()=>this.noteSessionActivity();this.registerDomEvent(document,"mousedown",e),this.registerDomEvent(document,"keydown",e),this.registerDomEvent(document,"touchstart",e),this.registerDomEvent(window,"focus",e)}noteSessionActivity(){this.session&&this.scheduleAutoLockTimer()}scheduleAutoLockTimer(){this.stopAutoLockTimer();let e=this.orgSettings?.autoLockMinutes??0;!this.session||e<=0||(this.autoLockTimer=setTimeout(()=>{this.lockSessionForInactivity(e)},e*60*1e3))}stopAutoLockTimer(){this.autoLockTimer&&(clearTimeout(this.autoLockTimer),this.autoLockTimer=null)}async lockSessionForInactivity(e){this.session&&(this.log(`Auto-lock triggered after ${e} minutes of inactivity.`),await this.forceLogout(`VaultGuard Sync: Session locked after ${e} minutes of inactivity.`))}async forceLogout(e="VaultGuard Sync: Logged out successfully."){try{this.session&&await this.apiRequest("POST","/auth/logout",{sessionId:this.session.sessionId})}catch{}await this.revokeAgentBridgeLeasesForSessionEnd("logout").catch(()=>{}),this.agentBridge&&await this.agentBridge.stopHttpServer().catch(()=>{}),this.session=null,this.keyLease=null,this.vaultLeaseDenied=!1,this.lastLimitedAccessNoticeAt=0,this.orgSettings=null,this.stopSyncTimer(),this.stopKeyRenewalMonitor(),this.stopHeartbeatMonitor(),this.stopAutoLockTimer(),this.stopConnectionRetry(),this.clearSensitiveData(),await this.clearStoredSession(),this.setConnectionStatus("offline"),this.syncFileExplorerDecorationsState(),this.permissionStore.emit("changed",{serverConfirmed:!0}),new b.Notice(e)}initializeApiClientFromSession(e){this.apiClient&&e.accessToken&&this.apiClient.initialize({accessToken:e.accessToken,refreshToken:e.refreshToken,idToken:e.idToken,expiresAt:new Date(e.tokenExpiresAt).getTime()})}checkForObsidianSync(){this.renderObsidianSyncNotice(),this.registerObsidianSyncListener()}renderObsidianSyncNotice(){try{let t=this.app.internalPlugins?.getPluginById?.("sync"),r=!!(t&&(t.enabled??t._loaded??!1));r&&!this.obsidianSyncNotice?(console.warn(`${or} Obsidian Sync is active. VaultGuard handles all sync and backup \u2014 running both will cause file conflicts. Please disable Obsidian Sync.`),this.obsidianSyncNotice=new b.Notice(`VaultGuard Sync: Obsidian Sync is enabled. VaultGuard Sync handles all sync and backup for this vault \u2014 please disable Obsidian Sync to prevent file conflicts.

Settings \u2192 Core plugins \u2192 Sync \u2192 Disable`,0)):!r&&this.obsidianSyncNotice&&(this.obsidianSyncNotice.hide(),this.obsidianSyncNotice=null)}catch{}}registerObsidianSyncListener(){try{let r=this.app.internalPlugins?.on?.("change",()=>this.renderObsidianSyncNotice());if(r){this.registerEvent(r);return}this.registerInterval(window.setInterval(()=>this.renderObsidianSyncNotice(),6e4))}catch{}}async initAtRestCipher(){let e=this.manifest?.id??"vaultguard-sync",t=`.obsidian/plugins/${e}/lak.envelope`,r=this.app.vault.adapter,s=null;try{if(!await r.exists(t)){let o=Ls[e]??[];for(let l of o){let c=`.obsidian/plugins/${l}/lak.envelope`;try{if(!await r.exists(c))continue;let d=await r.read(c);if(!d||d.trim().length===0)continue;try{await r.write(t,d),this.log(`[at-rest] Migrated LAK envelope from ${l} -> ${e}`);break}catch(u){s=`Found an at-rest envelope under the previous plugin id (${l}) but could not copy it into the current plugin folder (${e}): ${u instanceof Error?u.message:String(u)}. Your encrypted files have NOT been overwritten \u2014 close Obsidian, copy ".obsidian/plugins/${l}/lak.envelope" to ".obsidian/plugins/${e}/lak.envelope" manually, and reopen.`;break}}catch(d){this.logError(`[at-rest] Probing prior envelope at ${c} failed`,d)}}}}catch(n){this.logError(`[at-rest] Probing current envelope at ${t} failed`,n)}let a={loadWrappedLak:async()=>{try{if(!await r.exists(t))return null;let n=await r.read(t);return n.trim().length>0?n:null}catch(n){return this.logError(`Reading at-rest envelope at ${t} failed`,n),null}},saveWrappedLak:async n=>{await r.write(t,n)},clearWrappedLak:async()=>{try{await r.exists(t)&&await r.remove(t)}catch(n){this.logError(`Removing at-rest envelope at ${t} failed`,n)}}};if(this.atRestCipher=new St(a),s!==null){let n=s;this.app.workspace.onLayoutReady(()=>this.showAtRestRecoveryBanner(n)),this.logError("AtRestCipher init aborted: envelope migration failed",new Error(n));return}try{let n=this.atRestCipher.init();this.cipherInitPromise=n;let o=await n.catch(()=>!1);this.cipherInitPromise===n&&(this.cipherInitPromise=null);let l=this.atRestCipher.getStatus();if(!o){if(l.kind==="needs-recovery")this.app.workspace.onLayoutReady(()=>this.showAtRestRecoveryBanner(l.reason));else{let d=l.kind==="disabled"?l.reason:"unknown";new b.Notice(`VaultGuard Sync: local at-rest encryption disabled. ${d}`,1e4)}this.logError("AtRestCipher init failed",new Error(l.kind==="needs-recovery"||l.kind==="disabled"?l.reason:"unknown"));return}let c=l.kind==="unlocked"?l.method:"unknown";if(this.log(`AtRestCipher ready (${c}).`),b.Platform.isMobileApp&&this.settings.debugLogging){let d=l.kind==="unlocked";new b.Notice(`VaultGuard diag: at-rest method=${c}, ready=${d}`,5e3)}c==="localstorage-fallback"&&!b.Platform.isMobileApp&&new b.Notice("VaultGuard Sync: at-rest encryption is using the localStorage fallback (OS keychain unavailable). Files in Finder are encrypted, but a full Electron-profile theft can recover the key. See docs/AT-REST-ENCRYPTION.md.",1e4),this.app.workspace.onLayoutReady(()=>{this.maybeOfferFirstRunMigration()})}catch(n){this.logError("AtRestCipher init threw",n)}}async maybeOfferFirstRunMigration(){if(!this.atRestFirstRunOffered&&(this.atRestFirstRunOffered=!0,!this.settings.atRestFirstRunDismissed&&this.atRestCipher?.isReady()))try{let e=await this.tallyAtRestState();if(e.plaintext===0)return;let t=new b.Notice("",0),r=document.createDocumentFragment();r.createEl("strong").setText("VaultGuard Sync: at-rest encryption ready. "),r.appendText(`${e.plaintext} file${e.plaintext===1?"":"s"} in this vault still on disk as plaintext. `),r.createEl("a",{text:"Encrypt them now \u2192",cls:"vaultguard-notice-link"}).addEventListener("click",()=>{t.hide(),this.openVaultGuardSettings()}),r.createEl("a",{text:"  Dismiss",cls:"vaultguard-notice-dismiss"}).addEventListener("click",()=>{this.settings.atRestFirstRunDismissed=!0,this.saveSettings(),t.hide()}),t.setMessage(r)}catch(e){this.logError("First-run at-rest tally failed",e)}}showAtRestRecoveryBanner(e){let t=new b.Notice("",0),r=document.createDocumentFragment();r.createEl("strong").setText("VaultGuard Sync: cannot read encrypted files on this device. "),r.appendText(e+" "),r.createEl("a",{text:"Open settings to restore \u2192",cls:"vaultguard-notice-link"}).addEventListener("click",()=>{t.hide(),this.openVaultGuardSettings()}),t.setMessage(r)}async encryptVaultAtRest(){if(!this.atRestCipher?.isReady()||!this.originalAdapterMethods.readBinary||!this.originalAdapterMethods.writeBinary){new b.Notice("VaultGuard Sync: at-rest cipher not initialised \u2014 cannot run migration.");return}let e=this.atRestCipher,t=this.originalAdapterMethods.readBinary,r=this.originalAdapterMethods.writeBinary,s=this.app.vault.getFiles(),a=0,n=0,o=0;new b.Notice(`VaultGuard Sync: encrypting ${s.length} files at rest\u2026`,3e3);for(let l of s){if(this.isAtRestExcluded(l.path)){n+=1;continue}try{let c=await t(l.path);if(e.isEncrypted(c)){n+=1;continue}let d=await e.encryptBinary(c);await r(l.path,d),a+=1}catch(c){o+=1,this.logError(`At-rest encrypt: failed for "${l.path}"`,c)}}new b.Notice(`VaultGuard Sync: at-rest encryption pass complete. ${a} encrypted, ${n} already-encrypted/excluded, ${o} failed.`,8e3)}async decryptVaultAtRest(){if(!this.atRestCipher?.isReady()||!this.originalAdapterMethods.readBinary||!this.originalAdapterMethods.writeBinary){new b.Notice("VaultGuard Sync: at-rest cipher not initialised \u2014 cannot decrypt.");return}let e=this.atRestCipher,t=this.originalAdapterMethods.readBinary,r=this.originalAdapterMethods.writeBinary,s=this.app.vault.getFiles(),a=0,n=0,o=0;new b.Notice(`VaultGuard Sync: decrypting ${s.length} files at rest\u2026`,3e3);for(let l of s){if(this.isAtRestExcluded(l.path)){n+=1;continue}try{let c=await t(l.path);if(!e.isEncrypted(c)){n+=1;continue}let d=await e.decryptBinary(c);await r(l.path,d),a+=1}catch(c){o+=1,this.logError(`At-rest decrypt: failed for "${l.path}"`,c)}}new b.Notice(`VaultGuard Sync: at-rest decryption pass complete. ${a} decrypted, ${n} already-plaintext/excluded, ${o} failed.`,8e3)}interceptVaultAdapter(){let e=this.app.vault.adapter;this.originalAdapterMethods.read=e.read.bind(e),this.originalAdapterMethods.write=e.write.bind(e),this.originalAdapterMethods.list=e.list.bind(e),this.originalAdapterMethods.remove=e.remove.bind(e),typeof e.readBinary=="function"&&(this.originalAdapterMethods.readBinary=e.readBinary.bind(e)),typeof e.writeBinary=="function"&&(this.originalAdapterMethods.writeBinary=e.writeBinary.bind(e)),typeof e.rename=="function"&&(this.originalAdapterMethods.rename=e.rename.bind(e)),e.read=async t=>this.interceptedRead(t),e.write=async(t,r)=>this.interceptedWrite(t,r),this.originalAdapterMethods.readBinary&&(e.readBinary=async t=>this.interceptedReadBinary(t)),this.originalAdapterMethods.writeBinary&&(e.writeBinary=async(t,r)=>this.interceptedWriteBinary(t,r)),e.list=async t=>this.interceptedList(t),e.remove=async t=>this.interceptedDelete(t),this.originalAdapterMethods.rename&&(e.rename=async(t,r)=>this.interceptedRename(t,r)),this.log("Vault adapter methods intercepted.")}restoreVaultAdapter(){let e=this.app.vault.adapter;this.originalAdapterMethods.read&&(e.read=this.originalAdapterMethods.read),this.originalAdapterMethods.write&&(e.write=this.originalAdapterMethods.write),this.originalAdapterMethods.readBinary&&(e.readBinary=this.originalAdapterMethods.readBinary),this.originalAdapterMethods.writeBinary&&(e.writeBinary=this.originalAdapterMethods.writeBinary),this.originalAdapterMethods.list&&(e.list=this.originalAdapterMethods.list),this.originalAdapterMethods.remove&&(e.remove=this.originalAdapterMethods.remove),this.originalAdapterMethods.rename&&(e.rename=this.originalAdapterMethods.rename),this.originalAdapterMethods={read:null,write:null,readBinary:null,writeBinary:null,list:null,remove:null,rename:null},this.log("Vault adapter methods restored.")}async interceptedRead(e){if(this.isPathExcluded(e)){if(!this.originalAdapterMethods.read)throw new Error("VaultGuard Sync: vault adapter read method unavailable.");return this.originalAdapterMethods.read(e)}if(!this.session)throw new Error(this.showLoginRequiredNotice("open",e));if(await this.awaitPermissionReadiness(),await this.getEffectivePermission(e)<1)return await this.emitAuditEvent("file.read",e,{outcome:"denied",reason:"permission-denied-read-fail-open"}),this.log(`Permission denied for "${e}" (read fail-open).`),this.readPlainFromDisk(e);if(this.vaultLeaseDenied&&this.placeholderPaths.has(e)){let r=await this.readFileDecrypted(e);if(r.success&&r.data?.decrypted===!0){let s=this.decodeBase64Utf8(r.data.content);return await this.writePlainToDisk(e,s),this.placeholderPaths.delete(e),await this.emitAuditEvent("file.read",e),s}if(r.error?.statusCode===404)return this.placeholderPaths.delete(e),await this.emitAuditEvent("file.read",e,{outcome:"denied",reason:"limited-access-placeholder-404-fail-open"}),this.log(`Limited-access decrypt 404 for "${e}" (read fail-open).`),this.readPlainFromDisk(e)}try{if(this.isOnline()){let s=await this.fetchRemoteFileContent(e);if(s.success&&s.data)try{let a=await this.decodeRemoteFileContent(e,s.data);return await this.emitAuditEvent("file.read",e),a}catch(a){return this.logError(`Cloud copy of "${e}" could not be decrypted with the current key lease \u2014 using local copy.`,a),this.notifyCloudDecryptFallback(e),await this.emitAuditEvent("file.read",e,{source:"cache",reason:"decrypt-failed"}),this.readPlainFromDisk(e)}if(s.error?.statusCode===401||s.error?.statusCode===403)throw new Error(s.error.message)}let r=await this.readPlainFromDisk(e);if(r===""&&this.vaultLeaseDenied)try{let s=await this.readFileDecrypted(e);if(s.success&&s.data?.decrypted===!0){let a=this.decodeBase64Utf8(s.data.content);return await this.writePlainToDisk(e,a),this.placeholderPaths.delete(e),await this.emitAuditEvent("file.read",e),a}if(s.error?.statusCode===404)return this.placeholderPaths.delete(e),await this.emitAuditEvent("file.read",e,{outcome:"denied",reason:"limited-access-empty-content-404-fail-open"}),this.log(`Limited-access decrypt 404 for "${e}" (read fail-open).`),r}catch(s){if(!this.isNetworkError(s))throw s}return await this.emitAuditEvent("file.read",e,{source:"cache"}),r}catch(r){if(this.isNetworkError(r))return this.setConnectionStatus("offline"),this.readPlainFromDisk(e);throw r}}notifyDeniedLocalWipe(e){let t=Date.now(),r=this.readOnlyFallbackNoticeAt.get(e)??0;t-r<6e4||(this.readOnlyFallbackNoticeAt.set(e,t),new b.Notice(`VaultGuard Sync: You don't have access to "${e}". Local cached content was wiped.`,5e3))}notifyCloudDecryptFallback(e){let t=Date.now(),r=this.cloudDecryptFallbackNoticeAt.get(e)??0;t-r<6e4||(this.cloudDecryptFallbackNoticeAt.set(e,t),new b.Notice(`VaultGuard Sync: Couldn't decrypt the cloud copy of "${e}" \u2014 showing local copy.`,6e3))}looksLikeCiphertext(e){return e.length>=4&&e.charCodeAt(0)===86&&e.charCodeAt(1)===71&&e.charCodeAt(2)===49&&e.charCodeAt(3)===0}looksLikeCiphertextBytes(e){if(this.atRestCipher)return this.atRestCipher.isEncrypted(e);let t=e instanceof Uint8Array?e:new Uint8Array(e);return t.length<5?!1:t[0]===86&&t[1]===71&&t[2]===49&&t[3]===0&&t[4]===1}notifyCorruptedWrite(e){let t=Date.now(),r=this.corruptedWriteNoticeAt.get(e)??0;t-r<6e4||(this.corruptedWriteNoticeAt.set(e,t),new b.Notice(`VaultGuard Sync: refusing to save "${e}" \u2014 it looks like the editor has VaultGuard ciphertext as its content (likely a corrupted-read cascade). The write was BLOCKED to protect the file. Close the file WITHOUT saving and reload it.`,1e4))}async interceptedWrite(e,t){if(this.looksLikeCiphertext(t))throw this.notifyCorruptedWrite(e),this.logError(`Refusing to write ciphertext-as-plaintext to ${e}`,new Error("blocked: VG1 magic in plaintext write")),this.emitAuditEvent("file.write",e,{outcome:"denied",reason:"ciphertext-as-plaintext-write-blocked"}),new Error(`VaultGuard Sync: refusing to write "${e}" \u2014 content looks like at-rest ciphertext (corrupted-read cascade). File preserved.`);if(this.applyingRemoteWrite){await this.writePlainToDisk(e,t);return}if(this.isPathExcluded(e)){this.originalAdapterMethods.write&&await this.originalAdapterMethods.write(e,t);return}if(!this.session)throw new Error(this.showLoginRequiredNotice("edit",e));if(await this.awaitPermissionReadiness(),await this.getEffectivePermission(e)<2)throw await this.emitAuditEvent("file.write",e,{outcome:"denied"}),new Error(`VaultGuard Sync: Access denied. You do not have write permission for "${e}".`);try{if(this.shouldUploadChangesImmediately()&&this.isOnline()&&this.keyLease){let s=await this.encryptContent(t),a=await this.apiRequest("PUT",this.vaultPath(`/files/${encodeURIComponent(e)}`),{content:s,hash:await this.computeHash(t)});if(!a.success){if(a.error?.statusCode===401||a.error?.statusCode===403)throw new Error(a.error.message);if(a.error?.statusCode===0)this.setConnectionStatus("offline"),this.queueOfflineOperation("write",e,t);else throw new Error(a.error?.message??"Remote write failed.")}await this.writePlainToDisk(e,t)}else await this.writePlainToDisk(e,t),this.queueOfflineOperation("write",e,t);await this.emitAuditEvent("file.write",e),this.syncState.pendingChanges++,this.updateStatusBar()}catch(s){if(this.isNetworkError(s))this.setConnectionStatus("offline"),await this.writePlainToDisk(e,t),this.queueOfflineOperation("write",e,t);else throw s}}isAtRestExcluded(e){let t=e.replace(/^\/+/,"");return t?t===".obsidian"||t.startsWith(".obsidian/")||t===".trash"||t.startsWith(".trash/")?!0:this.isPathExcluded(e):!1}async readPlainFromDisk(e){if(this.isAtRestExcluded(e)){if(!this.originalAdapterMethods.read)throw new Error("VaultGuard Sync: vault adapter read method unavailable.");return this.originalAdapterMethods.read(e)}if(this.originalAdapterMethods.readBinary){let r=await this.originalAdapterMethods.readBinary(e);if(this.atRestCipher?.isEncrypted(r)){if(this.atRestCipher.isReady()||await this.waitForCipherInit(1e4),!this.atRestCipher.isReady())throw new Error(`VaultGuard Sync: cannot read "${e}" \u2014 local at-rest encryption is not ready. Try again in a moment.`);return this.atRestCipher.decryptString(r)}return new TextDecoder().decode(r)}if(!this.originalAdapterMethods.read)throw new Error("VaultGuard Sync: vault adapter read method unavailable.");let t=await this.originalAdapterMethods.read(e);if(t.length>=4){let r=new TextEncoder().encode(t.slice(0,4));if(r.length>=4&&r[0]===86&&r[1]===71&&r[2]===49&&r[3]===0)throw new Error(`VaultGuard Sync: cannot read "${e}" \u2014 local at-rest encryption is not ready. Try again in a moment.`)}return t}async waitForCipherInit(e){let t=this.cipherInitPromise;if(!t)return!1;let r=new Promise(s=>setTimeout(()=>s(!1),e));return await Promise.race([t.then(()=>!0).catch(()=>!0),r]),!0}async writePlainToDisk(e,t){if(this.looksLikeCiphertext(t))throw new Error(`VaultGuard Sync: writePlainToDisk refused for "${e}" \u2014 content has VG1 magic header (corrupted-read cascade).`);if(this.isAtRestExcluded(e)){if(!this.originalAdapterMethods.write)return;await this.originalAdapterMethods.write(e,t);return}if(!this.atRestCipher?.isReady())throw new Error(`VaultGuard Sync: refusing to write "${e}" because local at-rest encryption is unavailable.`);let r=await this.atRestCipher.encryptString(t);if(this.originalAdapterMethods.writeBinary){await this.originalAdapterMethods.writeBinary(e,r);return}if(this.originalAdapterMethods.write){let s=new Uint8Array(r),a="";for(let n=0;n<s.length;n++)a+=String.fromCharCode(s[n]);await this.originalAdapterMethods.write(e,a)}}async readPlainBinaryFromDisk(e){if(!this.originalAdapterMethods.readBinary)throw new Error("VaultGuard Sync: vault adapter readBinary unavailable.");if(this.isAtRestExcluded(e))return this.originalAdapterMethods.readBinary(e);let t=await this.originalAdapterMethods.readBinary(e);if(this.atRestCipher?.isEncrypted(t)){if(this.atRestCipher.isReady()||await this.waitForCipherInit(1e4),!this.atRestCipher.isReady())throw new Error(`VaultGuard Sync: cannot read "${e}" \u2014 local at-rest encryption is not ready. Try again in a moment.`);return this.atRestCipher.decryptBinary(t)}return t}async writePlainBinaryToDisk(e,t){if(this.looksLikeCiphertextBytes(t))throw new Error(`VaultGuard Sync: writePlainBinaryToDisk refused for "${e}" \u2014 content has VG1 magic header (corrupted-read cascade).`);if(this.isAtRestExcluded(e)){if(!this.originalAdapterMethods.writeBinary)return;await this.originalAdapterMethods.writeBinary(e,t);return}if(!this.atRestCipher?.isReady())throw new Error(`VaultGuard Sync: refusing to write "${e}" because local at-rest encryption is unavailable.`);let r=await this.atRestCipher.encryptBinary(t);this.originalAdapterMethods.writeBinary&&await this.originalAdapterMethods.writeBinary(e,r)}shouldDeferDenialWipe(e){return!(this.hasWarmedAtLeastOnce||this.permissionStore.getCachedPermission(e)!==void 0)}async interceptedReadBinary(e){if(!this.originalAdapterMethods.readBinary)throw new Error("VaultGuard Sync: vault adapter readBinary unavailable.");if(this.isPathExcluded(e))return this.originalAdapterMethods.readBinary(e);if(!this.session)throw new Error(this.showLoginRequiredNotice("open",e));return await this.awaitPermissionReadiness(),await this.getEffectivePermission(e)<1?(await this.emitAuditEvent("file.read",e,{outcome:"denied",reason:"permission-denied-read-fail-open"}),this.log(`Permission denied for binary "${e}" (read fail-open).`),this.readPlainBinaryFromDisk(e)):this.readPlainBinaryFromDisk(e)}async interceptedWriteBinary(e,t){if(!this.originalAdapterMethods.writeBinary)return;if(this.looksLikeCiphertextBytes(t))throw this.notifyCorruptedWrite(e),this.logError(`Refusing to write ciphertext-as-plaintext binary to ${e}`,new Error("blocked: VG1 magic in plaintext binary write")),this.emitAuditEvent("file.write",e,{outcome:"denied",reason:"ciphertext-as-plaintext-write-blocked"}),new Error(`VaultGuard Sync: refusing to write "${e}" \u2014 content looks like at-rest ciphertext (corrupted-read cascade). File preserved.`);if(this.applyingRemoteWrite||this.isPathExcluded(e)){await this.writePlainBinaryToDisk(e,t);return}throw this.session?(await this.awaitPermissionReadiness(),await this.getEffectivePermission(e)<2?(await this.emitAuditEvent("file.write",e,{outcome:"denied"}),new Error(`VaultGuard Sync: Access denied. You do not have write permission for "${e}".`)):(await this.emitAuditEvent("file.write",e,{outcome:"denied",reason:"binary-sync-unsupported"}),new Error(`VaultGuard Sync: Binary files are not currently supported for protected sync. "${e}" was not written.`))):new Error(this.showLoginRequiredNotice("edit",e))}async canDeletePath(e){if(!this.session)return!1;if(this.session.role==="admin"||this.session.role==="owner")return!0;if(this.isOnline()){let t=this.session.roles?.length?this.session.roles:[this.session.role],r;try{r=await this.apiRequest("POST",this.vaultPath("/permissions/check"),{userId:this.session.userId,roles:t,action:"delete",path:this.toPermissionPath(e)})}catch(s){if(this.isNetworkError(s))this.setConnectionStatus("offline");else return!1;return this.resolvePermissionFromCache(e)>=3}if(r.success)return r.data?.allowed===!0;if(r.error?.statusCode===401||r.error?.statusCode===403||r.error?.statusCode!==0)return!1}return this.resolvePermissionFromCache(e)>=3}async interceptedList(e){return this.originalAdapterMethods.list?this.originalAdapterMethods.list(e):{files:[],folders:[]}}async interceptedDelete(e){if(this.isPathExcluded(e)){this.originalAdapterMethods.remove&&await this.originalAdapterMethods.remove(e);return}if(!this.session)throw new Error(this.showLoginRequiredNotice("delete",e));if(!await this.canDeletePath(e))throw await this.emitAuditEvent("file.delete",e,{outcome:"denied"}),new Error(`VaultGuard Sync: Access denied. You do not have permission to delete "${e}".`);try{if(this.shouldUploadChangesImmediately()&&this.isOnline()){let t=await this.apiRequest("DELETE",this.vaultPath(`/files/${encodeURIComponent(e)}`));if(!t.success){if(t.error?.statusCode===401||t.error?.statusCode===403)throw new Error(t.error.message);if(t.error?.statusCode===0)this.setConnectionStatus("offline"),this.queueOfflineOperation("delete",e);else throw new Error(t.error?.message??"Remote delete failed.")}}else this.queueOfflineOperation("delete",e);this.originalAdapterMethods.remove&&await this.originalAdapterMethods.remove(e),await this.emitAuditEvent("file.delete",e),this.permissionStore.emit("changed",{path:e})}catch(t){if(this.isNetworkError(t))this.setConnectionStatus("offline"),this.queueOfflineOperation("delete",e);else throw t}}async interceptedRename(e,t){let r=this.normalizeVaultPath(e),s=this.normalizeVaultPath(t);if(this.originalAdapterMethods.rename&&await this.originalAdapterMethods.rename(e,t),!this.session||!this.settings.serverVaultId)return;if(this.isPathExcluded(r)||this.isPathExcluded(s)){this.permissionStore.emit("changed",{path:r});return}if(this.app.vault.getAbstractFileByPath(t)instanceof b.TFolder){this.permissionStore.emit("changed",{path:r});return}if(this.isFolderMarkerPath(r)||this.isFolderMarkerPath(s))return;if(await this.getEffectivePermission(s)<2){await this.emitAuditEvent("file.rename",r,{newPath:s,outcome:"denied"}),new b.Notice(`VaultGuard Sync: Renamed locally, but the server copy of "${e}" was not moved \u2014 you do not have write permission for "${t}".`);return}if(!this.shouldUploadChangesImmediately()||!this.isOnline()||!this.keyLease){try{let o=await this.readPlainFromDisk(t);this.queueOfflineOperation("write",s,o)}catch(o){this.logError(`Rename: failed to queue offline write for "${t}"`,o)}this.queueOfflineOperation("delete",r),this.permissionStore.emit("changed",{path:r});return}try{let o=await this.readPlainFromDisk(t),l=await this.encryptContent(o),c=await this.apiRequest("PUT",this.vaultPath(`/files/${encodeURIComponent(s)}`),{content:l,hash:await this.computeHash(o)});if(!c.success)throw new Error(c.error?.message??`Rename: writing "${t}" failed.`);let d=await this.apiRequest("DELETE",this.vaultPath(`/files/${encodeURIComponent(r)}`));d.success||(this.logError(`Rename: DELETE of old path "${r}" failed`,new Error(d.error?.message??"unknown")),this.queueOfflineOperation("delete",r)),this.permissionStore.emit("changed",{path:r}),await this.emitAuditEvent("file.rename",r,{newPath:s}),this.syncState.pendingChanges=this.offlineQueue.length,this.updateStatusBar()}catch(o){if(this.isNetworkError(o)){this.setConnectionStatus("offline");try{let l=await this.readPlainFromDisk(t);this.queueOfflineOperation("write",s,l)}catch(l){this.logError(`Rename: failed to queue offline write for "${t}"`,l)}this.queueOfflineOperation("delete",r),this.permissionStore.emit("changed",{path:r})}else throw o}}async getEffectivePermission(e){return this.permissionStore.getPermission(e)}async fetchPermissionLevelFromServer(e){if(!this.session)return 0;let t=this.session.roles?.length?this.session.roles:[this.session.role],r=this.toPermissionPath(e),s=[{action:"admin",level:3},{action:"write",level:2},{action:"read",level:1}],a=await Promise.all(s.map(l=>this.apiRequest("POST",this.vaultPath("/permissions/check"),{userId:this.session.userId,roles:t,action:l.action,path:r}))),n=!1,o=0;for(let l=0;l<a.length;l++){let c=a[l],d=s[l];if(!c.success&&(c.error?.statusCode===401||c.error?.statusCode===403))return 0;if(!c.success&&c.error?.statusCode===0)throw new Error(c.error.message);if(c.success&&c.data?.allowed){d.level>o&&(o=d.level);continue}c.success||(n=!0)}return o>0?o:n?(this.log(`Permission API error for "${e}", denying access until permissions can be verified`),0):0}normalizeVaultPath(e){return(0,b.normalizePath)(e.replace(/^\/+/,""))}toPermissionPath(e){return`/${this.normalizeVaultPath(e)}`}isPathExcluded(e){let t=this.normalizeVaultPath(e);if(!t)return!1;if(t.split("/")[0].startsWith("."))return!0;let s=this.settings.excludedPaths??[],a=this.settings.serverExcludedPaths??[];if(s.length===0&&a.length===0)return!1;for(let n of[...a,...s]){let o=n.trim().replace(/^\/+/,"").replace(/\/+$/,"");if(o&&(t===o||t.startsWith(o+"/")))return!0}return!1}resolvePermissionFromCache(e){let t=e.split("/");for(let s=t.length;s>0;s--){let a=t.slice(0,s).join("/"),n=this.permissionStore.getCachedPermission(a);if(n!==void 0)return n}let r=this.permissionStore.getCachedPermission("");return r!==void 0?r:0}async initializeSyncEngine(){this.log("Initializing sync engine..."),!this.syncState.lastSync&&this.settings.lastSyncTimestamp&&(this.syncState.lastSync=this.settings.lastSyncTimestamp);let e=this.settings.serverVaultId;if(e&&this.settings.bindingReconciledVaultId!==e)try{if(!await this.performInitialReconciliation()){this.log("Initial reconciliation declined or aborted \u2014 sync engine will not start.");return}}catch(t){this.logError("Initial reconciliation failed",t),new b.Notice(`VaultGuard Sync: Couldn't reconcile this folder with the server vault: ${t instanceof Error?t.message:"Unknown error"}. Sync paused \u2014 open the sidebar to retry.`);return}this.registerFolderLifecycleListeners(),await this.performSync(),this.startSyncTimer(),this.log("Sync engine initialized.")}registerFolderLifecycleListeners(){this.folderLifecycleListenersRegistered||(this.folderLifecycleListenersRegistered=!0,this.registerEvent(this.app.vault.on("create",e=>{e instanceof b.TFolder&&(!this.settings.serverVaultId||!this.session||this.uploadFolderMarker(e.path).catch(t=>this.logError(`Folder create: marker for "${e.path}" failed`,t)))})),this.registerEvent(this.app.vault.on("delete",e=>{e instanceof b.TFolder&&(!this.settings.serverVaultId||!this.session||this.deleteFolderMarker(e.path).catch(t=>this.logError(`Folder delete: marker for "${e.path}" failed`,t)))})),this.registerEvent(this.app.vault.on("rename",(e,t)=>{e instanceof b.TFolder&&(!this.settings.serverVaultId||!this.session||t!==e.path&&(async()=>{try{await this.deleteFolderMarker(t),await this.uploadFolderMarker(e.path)}catch(r){this.logError(`Folder rename: marker move "${t}" \u2192 "${e.path}" failed`,r)}})())})),this.registerEvent(this.app.vault.on("rename",(e,t)=>{e instanceof b.TFile&&(!this.settings.serverVaultId||!this.session||t!==e.path&&this.syncFileRenameToServer(t,e.path).catch(r=>this.logError(`File rename via vault event "${t}" \u2192 "${e.path}" failed`,r)))})),this.registerEvent(this.app.vault.on("delete",e=>{e instanceof b.TFile&&(!this.settings.serverVaultId||!this.session||this.syncFileDeleteToServer(e.path).catch(t=>this.logError(`File delete via vault event "${e.path}" failed`,t)))})),this.log("Folder lifecycle listeners registered."))}async syncFileRenameToServer(e,t){if(!this.isOnline()||!this.keyLease||!this.originalAdapterMethods.read)return;let r=this.normalizeVaultPath(e),s=this.normalizeVaultPath(t);if(this.isFolderMarkerPath(r)||this.isFolderMarkerPath(s)||await this.getEffectivePermission(s)<2)return;let n;try{n=await this.readPlainFromDisk(t)}catch(d){this.log(`Rename sync: cannot read "${t}" (${d}); skipping server move.`);return}let o=await this.encryptContent(n),l=await this.apiRequest("PUT",this.vaultPath(`/files/${encodeURIComponent(s)}`),{content:o,hash:await this.computeHash(n)});l.success||this.logError(`Rename sync: PUT "${s}" failed`,new Error(l.error?.message??"unknown"));let c=await this.apiRequest("DELETE",this.vaultPath(`/files/${encodeURIComponent(r)}`));!c.success&&c.error?.statusCode!==404&&this.logError(`Rename sync: DELETE "${r}" failed`,new Error(c.error?.message??"unknown")),this.permissionStore.emit("changed",{path:r})}async syncFileDeleteToServer(e){if(!this.isOnline())return;let t=this.normalizeVaultPath(e);if(!t||this.isFolderMarkerPath(t))return;let r=await this.apiRequest("DELETE",this.vaultPath(`/files/${encodeURIComponent(t)}`));!r.success&&r.error?.statusCode!==404&&this.logError(`Delete sync: DELETE "${t}" failed`,new Error(r.error?.message??"unknown")),this.permissionStore.emit("changed",{path:t})}async performInitialReconciliation(){if(!this.session||!this.isOnline())throw new Error("Reconciliation requires an authenticated, online session.");new b.Notice("VaultGuard Sync: Comparing your folder with the server vault\u2026");let e=this.app.vault.getFiles(),t=new Map;for(let S of e)try{let L=this.normalizeVaultPath(S.path);if(this.isPathExcluded(L))continue;let B=await this.readPlainFromDisk(S.path),N=await this.computeHash(B);t.set(`/${L}`,{content:B,hash:N})}catch(L){this.logError(`Reconciliation: failed to read local file "${S.path}"`,L)}let r=await this.apiRequest("POST",this.vaultPath("/files/sync"),{lastSyncTimestamp:new Date(0).toISOString(),fileChecksums:{}});if(!r.success||!r.data)throw new Error(r.error?.message??"Could not fetch the server vault inventory.");let s=new Set,a=new Set;for(let S of r.data.deltas){if(S.action==="deleted")continue;let L=this.normalizeVaultPath(S.path);if(this.isFolderMarkerPath(L)){let B=this.folderPathFromMarkerPath(L);if(this.isPathExcluded(B))continue;a.add(B);continue}this.isPathExcluded(L)||s.add(S.path)}let n=[],o=[],l=[],c=[];for(let S of s)t.has(S)||n.push(S);for(let[S,L]of t.entries())s.has(S)?c.push({path:S,localContent:L.content,localHash:L.hash}):o.push(S);if(this.vaultLeaseDenied){for(let S of n){let L=this.normalizeVaultPath(S);this.isPathExcluded(L)||this.isFolderMarkerPath(L)||(await this.ensureParentFoldersForPath(L),await this.writePlainToDisk(L,""),this.placeholderPaths.add(L))}for(let S of a)if(S)try{await this.ensureLocalFolderPath(S)}catch(L){this.logError(`Reconciliation (limited): mkdir for "${S}" failed`,L)}return this.settings.bindingReconciledVaultId=this.settings.serverVaultId,this.syncState.lastSync=r.data.syncTimestamp,this.settings.lastSyncTimestamp=r.data.syncTimestamp,await this.saveSettings(),new b.Notice(`VaultGuard Sync: Limited-access reconciliation \u2014 ${n.length} files visible. Open one to fetch its content from the server.`,6e3),!0}let d=new Set;for(let S of c)try{let L=await this.readRemotePlaintext(S.path);await this.computeHash(L)===S.localHash?d.add(S.path):l.push(S.path)}catch(L){this.logError(`Reconciliation: comparison failed for "${S.path}"`,L),l.push(S.path)}let u={serverOnly:n,localOnly:o,conflicts:l},p=await this.askReconciliationPlan(u);if(!p.proceed)return new b.Notice("VaultGuard Sync: Binding cancelled \u2014 no files were modified."),!1;new b.Notice(`VaultGuard Sync: Reconciling \u2014 \u2193${n.length} \u2191${o.length} \u26A0${l.length}`);let f=0,m=0;for(let S of n)try{await this.applyRemoteChange({path:this.normalizeVaultPath(S),size:0}),f+=1}catch(L){this.logError(`Reconciliation: download failed for "${S}"`,L),m+=1}let v=0,A=0,k=0;for(let S of o){let L=t.get(S);if(L)try{await this.uploadReconciledFile(this.normalizeVaultPath(S),L.content)==="uploaded"?v+=1:A+=1}catch(B){this.logError(`Reconciliation: upload failed for "${S}"`,B),k+=1}}let I=0,U=0;for(let S of l)try{await this.resolveReconciliationConflict(S,p.conflictStrategy,t),I+=1}catch(L){this.logError(`Reconciliation: conflict resolution failed for "${S}"`,L),U+=1}let V=0,P=0,g=0,w=new Set(this.collectLocalFolderPaths());for(let S of a)if(!(!S||w.has(S)))try{await this.ensureLocalFolderPath(S)&&(P+=1)}catch(L){this.logError(`Reconciliation: mkdir for "${S}" failed`,L),g+=1}for(let S of w)if(!a.has(S))try{await this.uploadFolderMarker(S)&&(V+=1)}catch(L){this.logError(`Reconciliation: folder marker upload for "${S}" failed`,L),g+=1}let y=k===0&&m===0&&U===0&&g===0;y&&(this.settings.bindingReconciledVaultId=this.settings.serverVaultId),this.syncState.lastSync=r.data.syncTimestamp,this.settings.lastSyncTimestamp=r.data.syncTimestamp,await this.saveSettings();let x=[];k>0&&x.push(`${k} upload failed`),A>0&&x.push(`${A} skipped (no write permission)`),m>0&&x.push(`${m} download failed`),U>0&&x.push(`${U} conflict failed`),g>0&&x.push(`${g} folders failed`);let E=[`${f} downloaded`,`${v} uploaded`,`${I} conflicts resolved`];P>0&&E.push(`${P} folders mirrored locally`),V>0&&E.push(`${V} folders preserved`),d.size>0&&E.push(`${d.size} already in sync`),x.length>0&&E.push(x.join(", "));let R=`${E.join(", ")}.`;return y?new b.Notice(`VaultGuard Sync: Reconciliation complete. ${R}`):new b.Notice(`VaultGuard Sync: Reconciliation finished with errors \u2014 ${R} Open the sidebar to retry.`,1e4),this.log(`Reconciliation complete: ${R}`),!0}askReconciliationPlan(e){return new Promise(t=>{new Je(this.app,e,this.settings.defaultConflictResolution,s=>t(s)).open()})}async uploadReconciledFile(e,t,r={}){if(!this.hasValidKeyLease())return this.log(`Reconciliation: skipping "${e}" \u2014 no encryption key lease available.`),new b.Notice(`VaultGuard Sync: Skipped upload of "${e}" \u2014 limited access sessions can download accessible files, but need a key lease to encrypt uploads.`),"skipped";if(await this.getEffectivePermission(e)<2)return this.log(`Reconciliation: skipping "${e}" \u2014 no write permission.`),new b.Notice(r.noWriteNotice??`VaultGuard Sync: Skipped upload of "${e}" \u2014 you do not have write permission. The file stays in this folder but is not synced.`),"skipped";let a=await this.encryptContent(t),n=await this.apiRequest("PUT",this.vaultPath(`/files/${encodeURIComponent(e)}`),{content:a,hash:await this.computeHash(t)});if(!n.success)throw new Error(n.error?.message??`Upload of "${e}" failed.`);return await this.emitAuditEvent("file.write",e,{reconciliation:!0}),"uploaded"}async removeUnsyncedLocalFile(e){if(!this.originalAdapterMethods.remove)return this.log(`Catch-up: could not remove local-only "${e}" \u2014 adapter remove unavailable.`),!1;try{return await this.originalAdapterMethods.remove(e),this.permissionStore.emit("changed",{path:e}),!0}catch(t){return this.logError(`Catch-up: failed to remove local-only "${e}"`,t),!1}}async uploadLocalOnlyFiles(){if(!this.session||!this.settings.serverVaultId||!this.hasValidKeyLease()||!this.originalAdapterMethods.read)return null;let e=null;try{let p=await this.apiRequest("POST",this.vaultPath("/files/sync"),{lastSyncTimestamp:new Date(0).toISOString(),fileChecksums:{}});if(!p.success||!p.data)return this.log("Catch-up: could not fetch server inventory, skipping."),null;e=p.data.deltas}catch(p){return this.logError("Catch-up: server inventory fetch failed",p),null}let t=new Set,r=new Set;for(let p of e){if(p.action==="deleted")continue;let f=this.normalizeVaultPath(p.path);this.isFolderMarkerPath(f)?r.add(this.folderPathFromMarkerPath(f)):t.add(`/${f}`)}let s=this.app.vault.getFiles(),a=0,n=0,o=0,l=0;for(let p of s){let f=this.normalizeVaultPath(p.path);if(this.isFolderMarkerPath(f)||this.isPathExcluded(f))continue;let m=`/${f}`;if(!t.has(m))try{let v=await this.readPlainFromDisk(p.path);await this.uploadReconciledFile(f,v,{noWriteNotice:`VaultGuard Sync: Removed local-only "${f}" because this server vault does not contain it and you do not have write permission to add it.`})==="uploaded"?a+=1:(l+=1,await this.removeUnsyncedLocalFile(f)&&(n+=1))}catch(v){o+=1,this.logError(`Catch-up: upload of "${p.path}" failed`,v)}}let c=0,d=0;for(let p of this.collectLocalFolderPaths())if(!r.has(p)&&!this.isPathExcluded(p))try{await this.uploadFolderMarker(p)&&(c+=1)}catch(f){d+=1,this.logError(`Catch-up: folder marker upload for "${p}" failed`,f)}if(a+n+l+o+c+d>0){let p=[];a>0&&p.push(`${a} files uploaded`),n>0&&p.push(`${n} local-only files removed`),c>0&&p.push(`${c} folders preserved`),l>0&&p.push(`${l} skipped (no write permission)`),o>0&&p.push(`${o} files failed`),d>0&&p.push(`${d} folders failed`);let f=`VaultGuard Sync: Caught up local-only items \u2014 ${p.join(", ")}.`;this.log(f)}return{uploadedFiles:a,uploadedFolders:c,removedLocalFiles:n,skippedFiles:l,failedFiles:o,failedFolders:d}}async repairMissingRemoteItems(){if(!this.session||!this.settings.serverVaultId||!this.originalAdapterMethods.write)return null;let e=await this.apiRequest("POST",this.vaultPath("/files/sync"),{lastSyncTimestamp:new Date(0).toISOString(),fileChecksums:{}});if(!e.success||!e.data)throw new Error(e.error?.message??"Could not fetch the server vault inventory.");let t=[],r=new Set;for(let d of e.data.deltas){if(d.action==="deleted")continue;let u=this.normalizeVaultPath(d.path);if(u){if(this.isFolderMarkerPath(u)){let p=this.folderPathFromMarkerPath(u);p&&r.add(p);continue}for(let p of this.parentFolderPathsFor(u))r.add(p);t.push({path:u,size:d.size??0})}}let s=0,a=0,n=[...r].sort((d,u)=>d.split("/").length-u.split("/").length||d.localeCompare(u));for(let d of n)if(!this.isPathExcluded(d))try{await this.ensureLocalFolderPath(d)&&(s+=1)}catch(u){a+=1,this.logError(`Remote repair: mkdir for "${d}" failed`,u)}let o=0,l=0;for(let d of t)if(!this.isPathExcluded(d.path)&&!await this.localPathExists(d.path))try{await this.applyRemoteChange(d),o+=1}catch(u){l+=1,this.logError(`Remote repair: download of "${d.path}" failed`,u)}if(o+s+l+a>0){let d=[];o>0&&d.push(`${o} files downloaded`),s>0&&d.push(`${s} folders created`),l>0&&d.push(`${l} files failed`),a>0&&d.push(`${a} folders failed`),this.log(`VaultGuard Sync: Repaired missing remote items \u2014 ${d.join(", ")}.`)}return{downloadedFiles:o,downloadedFolders:s,failedFiles:l,failedFolders:a}}collectLocalFolderPaths(){let e=[],t=this.app.vault.getRoot(),r=s=>{for(let a of s.children)a instanceof b.TFolder&&(e.push(this.normalizeVaultPath(a.path)),r(a))};return r(t),e}parentFolderPathsFor(e){let t=this.normalizeVaultPath(e).split("/").filter(Boolean);t.pop();let r=[],s="";for(let a of t)s=s?`${s}/${a}`:a,r.push(s);return r}async localPathExists(e){let t=this.normalizeVaultPath(e);if(!t)return!0;try{return await this.app.vault.adapter.exists(t)}catch{return this.app.vault.getAbstractFileByPath(t)!==null}}async ensureLocalFolderPath(e){let t=this.normalizeVaultPath(e);if(!t)return!1;let r=t.split("/").filter(Boolean),s="",a=!1;for(let n of r)if(s=s?`${s}/${n}`:n,!await this.localPathExists(s)){try{await this.app.vault.createFolder(s)}catch(o){if(!await this.localPathExists(s))throw o}s===t&&(a=!0)}return a}async ensureParentFoldersForPath(e){for(let t of this.parentFolderPathsFor(e))await this.ensureLocalFolderPath(t)}async writeLocalFileFromRemote(e,t){let r=this.normalizeVaultPath(e);await this.ensureParentFoldersForPath(r),this.applyingRemoteWrite=!0;try{let s=this.app.vault.getAbstractFileByPath(r);if(s instanceof b.TFile){await this.app.vault.modify(s,t);return}try{await this.app.vault.create(r,t)}catch(a){if(!this.originalAdapterMethods.write)throw a;await this.writePlainToDisk(r,t)}}finally{this.applyingRemoteWrite=!1}}isFolderMarkerPath(e){if(!e)return!1;let t=e.split("/").filter(Boolean);return t.length>0&&t[t.length-1]===ii}folderPathFromMarkerPath(e){let t=e.split("/").filter(Boolean);return t.pop(),t.join("/")}folderMarkerPath(e){let t=this.normalizeVaultPath(e);if(!t)throw new Error("VaultGuard Sync: refused to plant a folder marker at the vault root.");return`${t}/${ii}`}buildLocalSyncManifest(){let e={},t=new Set,r=s=>{let a=this.normalizeVaultPath(s);if(!a||this.isPathExcluded(a))return;let n=`/${a}`;t.has(n)||(t.add(n),e[n]="")};for(let s of this.app.vault.getFiles())r(s.path);for(let s of this.collectLocalFolderPaths())if(!this.isPathExcluded(s))try{r(this.folderMarkerPath(s))}catch{}return e}async uploadFolderMarker(e){if(!this.session||!this.settings.serverVaultId)return!1;let t=this.normalizeVaultPath(e);if(!t)return!1;if(await this.getEffectivePermission(t)<2)return this.log(`Folder marker: skipping "${t}" \u2014 no write permission.`),!1;let s=this.folderMarkerPath(t),a=`
`,n=this.bytesToBase64(new TextEncoder().encode(a)),o=await this.apiRequest("PUT",this.vaultPath(`/files/${encodeURIComponent(s)}`),{content:n,contentType:"application/x-vaultguard-folder-marker",hash:await this.computeHash(a)});if(!o.success)throw new Error(o.error?.message??`Folder marker upload for "${t}" failed.`);return!0}async deleteFolderMarker(e){if(!this.session||!this.settings.serverVaultId)return;let t=this.normalizeVaultPath(e);if(!t)return;let r=this.folderMarkerPath(t),s=await this.apiRequest("DELETE",this.vaultPath(`/files/${encodeURIComponent(r)}`));!s.success&&s.error?.statusCode!==404&&this.logError(`Folder marker delete for "${t}" failed`,new Error(s.error?.message??"unknown"))}async resolveReconciliationConflict(e,t,r){let s=this.normalizeVaultPath(e),a=r.get(e);switch(t){case"keep_local":{if(!a)return;await this.uploadReconciledFile(s,a.content);return}case"keep_remote":{await this.applyRemoteChange({path:s,size:0});return}case"duplicate":default:{if(a&&this.originalAdapterMethods.write){let n=this.generateConflictPath(s);await this.writeLocalFileFromRemote(n,a.content)}await this.applyRemoteChange({path:s,size:0});return}}}showStatusNotice(){let e=[`VaultGuard v${this.manifest.version} (sync-rev ${si})`];e.push(this.session?`Logged in as ${this.session.email??this.session.userId}`:"Not logged in"),e.push(`Connection: ${this.connectionState.status}`),e.push(`Key lease: ${this.keyLease?"present":"missing"}`),e.push(this.settings.serverVaultId?`Vault: ${this.settings.serverVaultName||this.settings.serverVaultId}`:"Vault: not bound"),e.push(`Sync: ${this.syncState.status}${this.syncState.lastSync?` \xB7 last ${new Date(this.syncState.lastSync).toLocaleTimeString()}`:""}`),this.syncState.lastError&&e.push(`Last error: ${this.syncState.lastError}`),e.push(`Pending offline ops: ${this.offlineQueue.length}`),new b.Notice(e.join(`
`),12e3)}registerFocusSyncHandlers(){let e=()=>{if(!this.session||!this.settings.serverVaultId||this.syncState.status==="syncing")return;let t=Date.now();t-this.lastFocusSyncAt<3e3||(this.lastFocusSyncAt=t,this.performSync().catch(r=>this.logError("Focus-triggered sync failed",r)))};this.registerDomEvent(window,"focus",e),this.registerDomEvent(document,"visibilitychange",()=>{document.visibilityState==="visible"?(this.resumeSyncLoop("window visible"),e()):this.pauseSyncLoop("window hidden")}),this.registerDomEvent(window,"online",()=>{this.handleBrowserOnline()}),this.registerDomEvent(window,"offline",()=>{this.handleBrowserOffline()}),this.log("Focus-sync handlers registered.")}handleBrowserOnline(){if(this.log("Browser network online event received; probing VaultGuard API."),!this.session){this.resumeSyncLoop("network online");return}this.attemptReconnection().then(()=>{this.isOnline()&&this.resumeSyncLoop("network online")}).catch(e=>{this.logError("Network-online reconnection probe failed",e)})}handleBrowserOffline(){this.setConnectionStatus("offline",{scheduleRetry:!1}),this.pauseSyncLoop("network offline")}async purgeExcludedFromServer(){if(!this.session||!this.settings.serverVaultId)throw new Error("Not connected to a server vault.");if(!this.isOnline())throw new Error("VaultGuard Sync is offline \u2014 connect and try again.");if((this.settings.excludedPaths??[]).length===0)return{matched:0,deleted:0,failed:0};let t=await this.apiRequest("POST",this.vaultPath("/files/sync"),{lastSyncTimestamp:new Date(0).toISOString(),fileChecksums:{}});if(!t.success||!t.data)throw new Error(t.error?.message??"Failed to fetch server inventory.");let r=[];for(let n of t.data.deltas){if(n.action==="deleted")continue;let o=this.normalizeVaultPath(n.path);o&&this.isPathExcluded(o)&&r.push(o)}let s=0,a=0;for(let n of r)try{let o=await this.apiRequest("DELETE",this.vaultPath(`/files/${encodeURIComponent(n)}`));o.success||o.error?.statusCode===404?(s+=1,this.permissionStore.emit("changed",{path:n})):(a+=1,this.logError(`Purge: DELETE "${n}" failed`,new Error(o.error?.message??"unknown")))}catch(o){a+=1,this.logError(`Purge: DELETE "${n}" threw`,o)}return await this.emitAuditEvent("excluded.purge","",{matched:r.length,deleted:s,failed:a}),{matched:r.length,deleted:s,failed:a}}async performSync(e={}){let{userInitiated:t=!1,forceCatchup:r=!1}=e;if(!this.session){let p=t?this.showLoginRequiredNotice("sync"):"VaultGuard Sync: Sync skipped \u2014 not logged in.";this.log(p);return}if(!this.isOnline()){let p="VaultGuard Sync: Sync skipped \u2014 offline.";this.log(p),t&&new b.Notice(p);return}if(!this.settings.serverVaultId){let p="VaultGuard Sync: Sync skipped \u2014 this folder is not bound to a server vault yet.";this.log(p),t&&new b.Notice(p);return}if(this.syncState.status==="syncing"){let p="VaultGuard Sync: A sync is already in progress.";this.log(p),t&&new b.Notice(p);return}t&&new b.Notice("VaultGuard Sync: Syncing\u2026");let s=this.hasValidKeyLease();s||(this.log("Sync running in limited access mode \u2014 downloads only; encrypted uploads are paused until a key lease is available."),t&&new b.Notice("VaultGuard Sync: Limited access \u2014 downloading accessible server changes only."));let a=0,n=0,o=0,l=0,c=0,d=0,u=0;try{this.syncState.status="syncing",this.updateStatusBar();let p=this.offlineQueue.length;s?await this.flushOfflineQueue():p>0&&this.log(`Sync: ${p} queued operation(s) kept pending because no encryption key lease is available.`);let f=s&&p>0,m=0;if(s&&(r||!this.localOnlyCatchupCompleted)){let k=await this.uploadLocalOnlyFiles();k&&(a+=k.uploadedFiles,n+=k.uploadedFolders,o+=k.removedLocalFiles,m=k.uploadedFiles+k.uploadedFolders+k.removedLocalFiles,this.localOnlyCatchupCompleted=!0)}if(!f&&m===0&&!r&&this.syncState.lastSeenRevision!=null){let k=await this.fetchSyncCursor();if(k){let I=Date.parse(k.lastChangedAt);if(Number.isFinite(I)&&I>0&&(this.syncState.lastObservedActivityAt=I),k.revision===this.syncState.lastSeenRevision){this.syncState.status="idle",this.syncState.lastError=null,this.syncState.pendingChanges=this.offlineQueue.length,this.log(`Sync skipped \u2014 cursor unchanged (revision ${k.revision}, last change ${k.lastChangedAt}).`),t&&new b.Notice("VaultGuard Sync: Already in sync \u2014 nothing to do.");return}}}let A=await this.apiRequest("POST",this.vaultPath("/files/sync"),{lastSyncTimestamp:this.syncState.lastSync??new Date(0).toISOString(),fileChecksums:this.buildLocalSyncManifest()});if(!A.success||!A.data)throw new Error(A.error?.message??"Sync request failed.");A.data.permissionsChanged&&(this.log("Sync: permission rules changed on the server \u2014 emitting bus event."),this.permissionStore.emit("changed",{serverConfirmed:!0})),u=A.data.deltas.length;for(let k of A.data.deltas){let I=this.normalizeVaultPath(k.path);if(!this.isPathExcluded(I)){if(this.isFolderMarkerPath(I)){if(k.action!=="deleted"){let U=this.folderPathFromMarkerPath(I);if(U)try{await this.ensureLocalFolderPath(U)&&(c+=1)}catch(V){this.log(`Sync: mkdir for "${U}" no-op or failed: ${V}`)}}continue}if(k.action==="deleted"){if(this.originalAdapterMethods.remove)try{await this.originalAdapterMethods.remove(I)}catch{}continue}await this.applyRemoteChange({path:I,size:k.size})}}if(r||!this.remoteInventoryRepairCompleted){let k=await this.repairMissingRemoteItems();k&&(l+=k.downloadedFiles,c+=k.downloadedFolders,d+=k.failedFiles+k.failedFolders,this.remoteInventoryRepairCompleted=d===0)}if(this.syncState.lastSync=A.data.syncTimestamp,this.syncState.pendingChanges=this.offlineQueue.length,this.syncState.conflicts=[],this.syncState.status="idle",this.syncState.lastError=null,typeof A.data.revision=="number"&&(this.syncState.lastSeenRevision=A.data.revision),u>0&&(this.syncState.lastObservedActivityAt=Date.now()),this.settings.lastSyncTimestamp!==A.data.syncTimestamp&&(this.settings.lastSyncTimestamp=A.data.syncTimestamp,this.saveSettings().catch(k=>this.logError("Failed to persist lastSyncTimestamp",k))),t){let k=[];a>0&&k.push(`${a} files uploaded`),n>0&&k.push(`${n} folders preserved`),o>0&&k.push(`${o} local-only files removed`),l>0&&k.push(`${l} files downloaded`),c>0&&k.push(`${c} folders created`),d>0&&k.push(`${d} repair failures`),u>0&&k.push(`${u} remote changes applied`),k.length===0?new b.Notice("VaultGuard Sync: Already in sync \u2014 nothing to do."):new b.Notice(`VaultGuard Sync: Sync complete \u2014 ${k.join(", ")}.`)}}catch(p){this.syncState.status="error",this.syncState.lastError=p instanceof Error?p.message:"Unknown sync error",this.logError("Sync failed",p),t&&new b.Notice(`VaultGuard Sync: Sync failed \u2014 ${p instanceof Error?p.message:"Unknown error"}`,1e4),this.isNetworkError(p)&&this.setConnectionStatus("offline")}finally{this.updateStatusBar()}}async applyRemoteChange(e){let t=this.normalizeVaultPath(e.path);if(this.isPathExcluded(t)){this.log(`Sync: skipping excluded path "${t}".`);return}let r=await this.fetchRemoteFileContent(t);if(!r.success||!r.data)throw new Error(r.error?.message??`Failed to read ${t} from the server.`);if(!this.originalAdapterMethods.write)return;let s;try{s=await this.decodeRemoteFileContent(t,r.data)}catch(a){this.logError(`Sync: skipping "${t}" \u2014 cloud copy could not be decrypted.`,a),this.notifyCloudDecryptFallback(t);return}await this.writeLocalFileFromRemote(t,s),this.syncState.bytesDownloaded+=e.size??0}async handleConflict(e){let t=this.settings.defaultConflictResolution;switch(await this.emitAuditEvent("sync.conflict",e.path,{strategy:t,localHash:e.localHash,remoteHash:e.remoteHash}),t){case"keep_local":{let r=await this.readPlainFromDisk(e.path),s=await this.encryptContent(r);await this.apiRequest("PUT",this.vaultPath(`/files/${encodeURIComponent(e.path)}`),{content:s,hash:await this.computeHash(r),forceOverwrite:!0}),e.resolution="keep_local";break}case"keep_remote":await this.applyRemoteChange({path:e.path,size:0}),e.resolution="keep_remote";break;case"duplicate":{let r=this.generateConflictPath(e.path),s=await this.readPlainFromDisk(e.path);await this.writePlainToDisk(r,s),await this.applyRemoteChange({path:e.path,size:0}),e.resolution="duplicate";break}case"ask_user":default:new b.Notice(`VaultGuard Sync: Sync conflict detected for "${e.path}". Use View Permissions to resolve.`);break}}generateConflictPath(e){let t=new Date().toISOString().replace(/[:.]/g,"-"),r=e.lastIndexOf(".");return r>0?`${e.slice(0,r)} (conflict ${t})${e.slice(r)}`:`${e} (conflict ${t})`}async fetchSyncCursor(){if(!this.session||!this.settings.serverVaultId)return null;try{let e=await this.apiRequest("GET",this.vaultPath("/sync-cursor"));return!e.success||!e.data?null:{revision:e.data.revision,lastChangedAt:e.data.lastChangedAt}}catch(e){return this.logError("Sync cursor fetch failed",e),null}}hasValidKeyLease(){return!!this.keyLease&&!this.isKeyLeaseExpired()}async readFileDecrypted(e){let r=this.normalizeVaultPath(e).split("/").map(s=>encodeURIComponent(s)).join("/");return this.apiRequest("GET",this.vaultPath(`/files-decrypted/${r}`))}async fetchRemoteFileContent(e){let t=this.normalizeVaultPath(e);return this.hasValidKeyLease()?this.apiRequest("GET",this.vaultPath(`/files/${encodeURIComponent(t)}`)):this.readFileDecrypted(t)}decodeBase64Utf8(e){return new TextDecoder().decode(this.base64ToBytes(e))}remoteDecryptError(e,t){let r=t instanceof Error?t.message:String(t),s=new Error(`VaultGuard Sync: could not decrypt server copy of "${e}": ${r}`);return s.name="VaultGuardRemoteDecryptError",s}async decodeRemoteFileContent(e,t){let r=this.normalizeVaultPath(e);if(t.decrypted===!0)return this.decodeBase64Utf8(t.content);if(!this.hasValidKeyLease())throw this.remoteDecryptError(r,new Error("server returned encrypted bytes and no valid key lease is available"));try{return await this.decryptContent(t.content)}catch(s){throw this.remoteDecryptError(r,s)}}async readRemotePlaintext(e){let t=this.normalizeVaultPath(e),r=await this.fetchRemoteFileContent(t);if(!r.success||!r.data)throw new Error(r.error?.message??`Failed to read ${t} from the server.`);return this.decodeRemoteFileContent(t,r.data)}computeNextSyncDelayMs(){let e=Math.max(this.getEffectiveSyncIntervalSeconds(),ti)*1e3,t=this.syncState.lastObservedActivityAt;if(t==null)return e;let r=Math.max(0,Date.now()-t);return r<6e4||r<5*6e4?e:r<30*6e4?Math.min(e*2,2*6e4):Math.min(e*4,5*6e4)}startSyncTimer(){this.stopSyncTimer();let e=this.getEffectiveSyncMode();if(e==="manual"){this.log("Sync timer disabled by organization manual-sync policy.");return}if(this.syncTimerPaused){this.log("Sync timer kept paused (window hidden / offline).");return}let t=this.computeNextSyncDelayMs();this.syncTimer=setTimeout(()=>{this.syncTimer=null,this.syncState.status!=="syncing"&&this.performSync().catch(r=>this.logError("Periodic sync failed",r)),this.startSyncTimer()},t),this.log(`Sync timer scheduled in ${Math.round(t/1e3)}s (mode: ${e}).`)}stopSyncTimer(){this.syncTimer&&(clearTimeout(this.syncTimer),this.syncTimer=null)}restartSyncTimer(){this.session&&this.startSyncTimer()}pauseSyncLoop(e){this.syncTimerPaused||(this.syncTimerPaused=!0,this.stopSyncTimer(),this.log(`Sync loop paused (${e}).`))}resumeSyncLoop(e){this.syncTimerPaused&&(this.syncTimerPaused=!1,this.log(`Sync loop resumed (${e}).`),!(!this.session||!this.settings.serverVaultId)&&(this.performSync().catch(t=>this.logError("Resume-triggered sync failed",t)),this.startSyncTimer()))}async ensureVaultScopedKeyLease(){if(!this.session||!this.settings.serverVaultId)return"ok";let e=await this.apiRequest("POST","/auth/key-lease/scoped",{sessionId:this.session.sessionId,scope:"/**",vaultId:this.settings.serverVaultId});if(e.success&&e.data)return this.keyLease=this.normalizeKeyLease(e.data.keyLease),this.applyOrgSettings(e.data.orgSettings??this.orgSettings),this.vaultLeaseDenied=!1,this.log("Vault-scoped key lease: ok"),"ok";let t=e.error?.statusCode??0,r=e.error?.message??"Vault-scoped key lease request failed.";if(t===401)return this.log(`Vault-scoped key lease: logged-out (status=${t}, message=${r})`),await this.forceLogout(`VaultGuard Sync: ${r}`),"logged-out";if(t===403)return this.isUserAccessRevokedMessage(r)?(this.log(`Vault-scoped key lease: logged-out (status=${t}, message=${r})`),await this.forceLogout(`VaultGuard Sync: ${r}`),"logged-out"):(this.keyLease=null,this.vaultLeaseDenied=!0,this.log(`Vault-scoped key lease denied (limited access): status=${t}, message=${r}`),this.notifyLimitedAccess(r),"limited");throw new Error(r)}isUserAccessRevokedMessage(e){let t=e.trim().toLowerCase();return t.startsWith("access has been revoked")||t.startsWith("session has been revoked")}async sweepPlaceholderPaths(){let e=this.app.vault.adapter,t=this.originalAdapterMethods.list,r=this.originalAdapterMethods.readBinary;if(!t||!r)return;let s=0,a=!1,n=["/"];for(;n.length>0&&!a;){let o=n.shift(),l;try{l=await t(o)}catch{continue}for(let c of l.folders)this.isPathExcluded(c)||n.push(c);for(let c of l.files){if(s++,s>ri){a=!0;break}if(!this.isPathExcluded(c))try{let d=await e.stat(c);if(!d||d.size!==36)continue;let u=await r(c),p=new Uint8Array(u,0,4);p[0]===86&&p[1]===71&&p[2]===49&&p[3]===0&&this.placeholderPaths.add(c)}catch{}}}a&&console.warn(`[VaultGuard] sweepPlaceholderPaths: aborting at ${ri} entries; placeholderPaths.size=${this.placeholderPaths.size}`)}notifyLimitedAccess(e){let t=Date.now();if(t-this.lastLimitedAccessNoticeAt<6e4)return;this.lastLimitedAccessNoticeAt=t;let r=this.settings.serverVaultName?.trim()||"this vault";new b.Notice(`VaultGuard Sync: Limited access to "${r}". ${e} Cloud sync and encrypted file access are unavailable. Contact your administrator if you expected full access.`,8e3)}startHeartbeatMonitor(){this.stopHeartbeatMonitor(),this.session&&(this.heartbeatTimer=setInterval(()=>{this.checkRevocationHeartbeat()},Ps),this.checkRevocationHeartbeat())}stopHeartbeatMonitor(){this.heartbeatTimer&&(clearInterval(this.heartbeatTimer),this.heartbeatTimer=null)}async checkRevocationHeartbeat(){if(!this.session)return;let e=new URLSearchParams({sessionId:this.session.sessionId}),t=await this.apiRequest("GET",`/auth/heartbeat?${e.toString()}`);if(t.success){t.data&&t.data.active===!1&&await this.handleServerRevocation(t.data.reason??"revoked");return}let r=t.error?.statusCode??0;(r===401||r===403)&&await this.handleServerRevocation(t.error?.message??"revoked")}async handleServerRevocation(e){this.keyLease=null,this.permissionStore.invalidate(),await this.forceLogout(`VaultGuard Sync: Access revoked (${e}). Local session cleared.`)}startKeyRenewalMonitor(){this.stopKeyRenewalMonitor(),this.keyRenewalTimer=setInterval(()=>this.checkKeyLeaseRenewal(),60*1e3)}stopKeyRenewalMonitor(){this.keyRenewalTimer&&(clearInterval(this.keyRenewalTimer),this.keyRenewalTimer=null)}async checkKeyLeaseRenewal(){if(!this.session)return;if(!this.keyLease){if(this.vaultLeaseDenied&&this.settings.serverVaultId)try{await this.ensureVaultScopedKeyLease()==="ok"&&(this.log("Vault-scoped key lease recovered \u2014 full access restored."),new b.Notice("VaultGuard Sync: Full vault access restored."),this.permissionStore.emit("changed",{serverConfirmed:!0}),this.placeholderPaths.clear())}catch(s){this.logError("Limited-access lease retry failed (will retry)",s)}return}let e=new Date(this.keyLease.expiresAt).getTime(),t=Date.now();e-t<=ks&&await this.renewKeyLease()}async renewKeyLease(){if(!(!this.keyLease||!this.session))try{let e=await this.apiRequest("POST","/auth/refresh",{sessionId:this.session.sessionId,leaseId:this.keyLease.leaseId,refreshToken:this.keyLease.refreshToken});if(e.success&&e.data)this.keyLease=this.normalizeKeyLease(e.data.keyLease),this.applyOrgSettings(e.data.orgSettings??this.orgSettings),this.log("Key lease renewed successfully."),this.session&&(this.session={...this.session,sessionId:e.data.sessionId},await this.persistSession(this.session));else{if(this.logError("Key lease renewal failed",e.error),e.error?.code==="TOKEN_REFRESH_FAILED"||e.error?.code==="NETWORK_ERROR"){this.log("Key lease renewal deferred until session/network refresh succeeds.");return}if(e.error?.statusCode===401||e.error?.statusCode===403||e.error?.statusCode===410){if(await this.recoverVaultScopedKeyLeaseAfterRenewalFailure(e.error.message)||!this.session)return;new b.Notice("VaultGuard Sync: Encryption key lease expired. Please reconnect to continue accessing files.");return}new b.Notice("VaultGuard Sync: Encryption key lease expired. Please reconnect to continue accessing files.")}}catch(e){this.isNetworkError(e)?(this.setConnectionStatus("offline"),this.log("Key renewal failed due to network - using remaining lease time.")):this.logError("Key renewal error",e)}}async recoverVaultScopedKeyLeaseAfterRenewalFailure(e){if(!this.session||!this.settings.serverVaultId)return!1;this.log(`Key lease renewal failed (${e}); requesting a fresh vault-scoped lease.`),this.keyLease=null;let t=await this.ensureVaultScopedKeyLease();return t==="ok"?(this.log("Recovered by issuing a fresh vault-scoped key lease."),!0):t==="limited"?(this.log("Key lease renewal degraded to limited access without logging out."),!0):t==="logged-out"}isKeyLeaseExpired(){return this.keyLease?new Date(this.keyLease.expiresAt).getTime()<Date.now():!0}async encryptContent(e){if(!this.keyLease||this.isKeyLeaseExpired())throw new Error("VaultGuard Sync: Cannot encrypt - no valid key lease. Please reconnect.");this.assertLeaseMatchesBoundVault("encrypt");let r=new TextEncoder().encode(e),s=crypto.getRandomValues(new Uint8Array(12)),a=this.base64ToBytes(this.keyLease.key),n=await crypto.subtle.importKey("raw",a.buffer,{name:"AES-GCM"},!1,["encrypt"]),o=await crypto.subtle.encrypt({name:"AES-GCM",iv:s},n,r),l=new Uint8Array(s.length+o.byteLength);return l.set(s),l.set(new Uint8Array(o),s.length),this.bytesToBase64(l)}async decryptContent(e){if(!this.keyLease||this.isKeyLeaseExpired())throw new Error("VaultGuard Sync: Cannot decrypt - no valid key lease. Please reconnect.");this.assertLeaseMatchesBoundVault("decrypt");let t=this.base64ToBytes(e),r=t.slice(0,12),s=t.slice(12),a=this.base64ToBytes(this.keyLease.key),n=await crypto.subtle.importKey("raw",a.buffer,{name:"AES-GCM"},!1,["decrypt"]),o=await crypto.subtle.decrypt({name:"AES-GCM",iv:r},n,s);return new TextDecoder().decode(o)}assertLeaseMatchesBoundVault(e){let t=this.settings.serverVaultId;if(!t)throw new Error(`VaultGuard Sync: refusing to ${e} \u2014 no server vault is bound to this folder.`);let r=this.keyLease?.vaultId;if(r!==t)throw new Error(`VaultGuard Sync: refusing to ${e} \u2014 key lease is bound to vault "${r??"(none)"}" but this folder is bound to vault "${t}". Reload the plugin to recover.`)}setConnectionStatus(e,t={}){let{scheduleRetry:r=!0,notify:s=!0}=t,a=this.connectionState.status;this.connectionState.status=e,e==="online"?(this.connectionState.lastConnected=new Date().toISOString(),this.connectionState.failedAttempts=0,this.connectionState.nextRetryAt=null,this.stopConnectionRetry(),a!=="online"&&(this.log("Connection restored, flushing offline queue..."),this.flushOfflineQueue())):e==="offline"&&a!=="offline"&&(this.connectionState.failedAttempts++,r?this.scheduleConnectionRetry():(this.stopConnectionRetry(),this.connectionState.nextRetryAt=null),s&&this.session&&a==="online"&&this.notifyConnectionLost()),this.updateStatusBar()}notifyConnectionLost(){let e=Date.now();this.lastConnectionLostNoticeAt!==null&&e-this.lastConnectionLostNoticeAt<Rs||(this.lastConnectionLostNoticeAt=e,new b.Notice("VaultGuard Sync: Connection lost. Working offline with cached data."))}scheduleConnectionRetry(){if(this.stopConnectionRetry(),!this.session)return;let e=Math.min(nr*Math.pow(2,this.connectionState.failedAttempts-1),Cs);this.connectionState.nextRetryAt=new Date(Date.now()+e).toISOString(),this.connectionRetryTimer=setTimeout(async()=>{await this.attemptReconnection()},e),this.log(`Connection retry scheduled in ${e/1e3}s`)}async attemptReconnection(){if(!this.session){this.setConnectionStatus("offline",{scheduleRetry:!1,notify:!1});return}try{this.setConnectionStatus("reconnecting",{scheduleRetry:!1,notify:!1});let e=await this.apiRequest("GET","/vaults");e.success?(this.setConnectionStatus("online"),this.log("Reconnection successful.")):e.error?.statusCode===401||e.error?.statusCode===403?await this.forceLogout(`VaultGuard Sync: ${e.error.message||"Session expired. Please log in again."}`):this.setConnectionStatus("offline")}catch{this.setConnectionStatus("offline")}}stopConnectionRetry(){this.connectionRetryTimer&&(clearTimeout(this.connectionRetryTimer),this.connectionRetryTimer=null)}isOnline(){return this.connectionState.status==="online"}queueOfflineOperation(e,t,r){this.offlineQueue=this.offlineQueue.filter(s=>s.path!==t),this.offlineQueue.push({operation:e,path:t,data:r,timestamp:new Date().toISOString()}),this.log(`Queued offline operation: ${e} "${t}" (queue size: ${this.offlineQueue.length})`)}async flushOfflineQueue(){if(this.offlineQueueFlushPromise)return this.offlineQueueFlushPromise;let e=this.runOfflineQueueFlush();this.offlineQueueFlushPromise=e;try{await e}finally{this.offlineQueueFlushPromise===e&&(this.offlineQueueFlushPromise=null)}}async runOfflineQueueFlush(){if(this.offlineQueue.length===0)return;this.log(`Flushing ${this.offlineQueue.length} queued operations...`);let e=[...this.offlineQueue];this.offlineQueue=[];for(let t=0;t<e.length;t++){let r=e[t];if(!this.isPathExcluded(r.path))try{switch(r.operation){case"write":if(r.data){let s=await this.encryptContent(r.data),a=await this.apiRequest("PUT",this.vaultPath(`/files/${encodeURIComponent(r.path)}`),{content:s,hash:await this.computeHash(r.data)});this.assertOfflineFlushResponse(a,r)}break;case"delete":{let s=await this.apiRequest("DELETE",this.vaultPath(`/files/${encodeURIComponent(r.path)}`));this.assertOfflineFlushResponse(s,r);break}}}catch(s){this.offlineQueue.push(r,...e.slice(t+1)),this.logError(`Failed to flush operation: ${r.operation} "${r.path}"`,s),this.isNetworkError(s)&&this.setConnectionStatus("offline");break}}this.offlineQueue.length>0&&this.log(`${this.offlineQueue.length} operations remain in queue after flush.`)}assertOfflineFlushResponse(e,t){if(e.success)return;let r=e.error?.statusCode??0;if(t.operation==="delete"&&r===404)return;let s=e.error?.message??"Offline operation failed.";if(r===401||r===403){this.logError(`Dropping queued ${t.operation} for "${t.path}" after server rejection`,new Error(s));return}throw new Error(s)}vaultPath(e=""){let t=this.settings.serverVaultId;if(!t)throw new Error("VaultGuard: this Obsidian folder is not bound to a server vault yet. Open the VaultGuard sidebar to pick or create one.");return`/vaults/${encodeURIComponent(t)}${e}`}async apiRequest(e,t,r,s){if(!s&&this.session&&this.isSessionTokenExpiring(this.session)){let p=await this.refreshAccessToken(this.session);if(!p.ok)return this.setConnectionStatus("offline"),{success:!1,data:null,error:{code:"TOKEN_REFRESH_FAILED",message:`Could not refresh the VaultGuard session token: ${p.message}. The local session was kept and VaultGuard will retry.`,details:null,statusCode:0},requestId:""}}let a=s??this.session?.idToken,o=`${await this.getResolvedApiEndpoint(a)}${t}`,l={};a&&(l.Authorization=a),this.session?.sessionId&&(l["X-VaultGuard-Session-Id"]=this.session.sessionId);let c=Date.now(),d=null,u=!1;for(let p=0;p<this.settings.maxRetryAttempts;p++){try{let f=await this.requestWithTimeout((0,b.requestUrl)({url:o,method:e,headers:l,body:r?JSON.stringify(r):void 0,contentType:r?"application/json":void 0,throw:!1}));if(f.status===0){u=!0,d=new Error(this.describeNetworkFailureResponse(f)),p<this.settings.maxRetryAttempts-1&&await this.delay(nr*Math.pow(2,p));continue}let m=this.getHeaderValue(f.headers,"content-length"),v=f.status===204||m==="0"||f.text.length===0?null:f.json;if(f.status>=200&&f.status<300)return this.connectionState.latencyMs=Date.now()-c,this.setConnectionStatus("online"),{success:!0,data:v,error:null,requestId:this.getHeaderValue(f.headers,"x-request-id")??""};if(f.status===401||f.status===403)return{success:!1,data:null,error:{code:v?.code??"AUTH_ERROR",message:v?.message??"Authentication failed",details:v?.details??null,statusCode:f.status},requestId:this.getHeaderValue(f.headers,"x-request-id")??""};d=new Error(`HTTP ${f.status}: ${v?.message??"Request failed"}`)}catch(f){if(d=f instanceof Error?f:new Error("Unknown network error"),!this.isNetworkError(f))break;u=!0}p<this.settings.maxRetryAttempts-1&&await this.delay(nr*Math.pow(2,p))}return u&&this.setConnectionStatus("offline"),{success:!1,data:null,error:{code:u?"NETWORK_ERROR":"REQUEST_FAILED",message:d?.message??"Request failed after all retries",details:null,statusCode:0},requestId:""}}describeNetworkFailureResponse(e){let t=(e.text??"").trim();return t.length>0?t:"Network request failed with status 0."}async requestWithTimeout(e){let t=null;try{return await Promise.race([e,new Promise((r,s)=>{t=setTimeout(()=>{s(new Error("Request timeout"))},3e4)})])}finally{t&&clearTimeout(t)}}getHeaderValue(e,t){return Object.entries(e).find(([s])=>s.toLowerCase()===t.toLowerCase())?.[1]??null}async emitAuditEvent(e,t,r={}){if(!e.startsWith("bridge.")){this.log(`Audit event handled server-side: ${e} ${t??""}`.trim());return}if(!this.apiClient||!this.settings.serverVaultId){this.log(`Audit event skipped (no client/vault): ${e}`);return}try{await this.apiClient.postBridgeAudit(e,t,r)}catch(s){this.log(`Audit emission failed for ${e}: ${s instanceof Error?s.message:String(s)}`)}}initFilePermissionHeader(){this.apiClient&&(this.filePermissionHeader=new mt({app:this.app,apiClient:this.apiClient,currentUserId:this.session?.userId??"",currentUserEmail:this.session?.email??"",currentUserRole:this.getEffectiveUiRole(),isAdmin:this.isEffectiveAdmin(),allowAdminPerFileRestrictions:this.orgSettings?.allowAdminPerFileRestrictions===!0,getPermissionLevel:e=>this.getEffectivePermission(e),onRulesChanged:()=>{this.permissionStore.emit("changed",{serverConfirmed:!0})}}),this.registerEvent(this.app.workspace.on("active-leaf-change",()=>{this.filePermissionHeader?.update()})),this.registerEvent(this.app.workspace.on("file-open",()=>{this.filePermissionHeader?.update()})),this.registerEvent(this.permissionStore.on("changed",(...e)=>{let t=e[0]??{};this.filePermissionHeader?.invalidateCache(t.path),this.filePermissionHeader?.update()})),this.filePermissionHeader.update())}initReadOnlyGuard(){this.readOnlyGuard=new yt({app:this.app,plugin:this,getPermissionLevel:e=>this.getEffectivePermission(e),isLoggedIn:()=>this.session!==null}),this.readOnlyGuard.start(),this.registerEvent(this.permissionStore.on("changed",()=>{this.readOnlyGuard?.refreshAll()}))}initFileExplorerDecorations(){this.apiClient&&(this.fileExplorerDecorations=new Pt({app:this.app,apiClient:this.apiClient,currentUserId:this.session?.userId??"",currentUserRole:this.getEffectiveUiRole(),isReady:()=>this.isFileExplorerDecorationDataReady(),getPermissionLevel:e=>this.getEffectivePermission(e)}),setTimeout(()=>{this.syncFileExplorerDecorationsState()},1e3),this.registerEvent(this.permissionStore.on("changed",(...e)=>{let t=e[0]??{};this.fileExplorerDecorations?.invalidate(t.path)})),this.registerEvent(this.app.workspace.on("layout-change",()=>{this.syncFileExplorerDecorationsState()})),this.registerEvent(this.app.workspace.on("active-leaf-change",()=>{this.syncFileExplorerDecorationsState()})))}reloadVaultGuardSidebar(){let e=this.app.workspace.getLeavesOfType(se);for(let t of e){let r=t.view;r?.reload&&r.reload()}}isFileExplorerDecorationDataReady(){let e=this.apiClient,t=typeof e?.isAuthenticated=="function"?e.isAuthenticated():!!(this.session&&e);return!!(this.session&&t&&this.settings.serverVaultId)}syncFileExplorerDecorationsState(e=!1){let t=this.fileExplorerDecorations;if(t){if(this.settings.showPermissionIndicators&&this.isFileExplorerDecorationDataReady()){t.enable?.(),e&&t.refresh?.();return}t.disable?.()}}async ensureVaultGuardSidebar(){if(this.app.workspace.getLeavesOfType(se).length>0)return;let t=this.app.workspace.getRightLeaf(!1);t&&await t.setViewState({type:se,active:!0})}async activateVaultGuardSidebar(){let e=this.createSidebarViewConfig();e&&(this.sidebarViewConfig=e);let t=this.app.workspace.getLeavesOfType(se);if(t.length>0){this.app.workspace.revealLeaf(t[0]);let s=t[0].view;this.sidebarViewConfig&&s.configure(this.sidebarViewConfig),await s.reload();return}let r=this.app.workspace.getRightLeaf(!1);if(r){await r.setViewState({type:se,active:!0}),this.app.workspace.revealLeaf(r);let s=r.view;s?.configure&&this.sidebarViewConfig&&(s.configure(this.sidebarViewConfig),await s.reload())}}updateStatusBar(){if(!this.statusBarEl)return;if(!this.session){this.statusBarEl.setText("VaultGuard Sync: Not logged in");return}if(this.permissionWarmupInFlight>0){this.statusBarEl.setText("VaultGuard Sync \u21BB Loading permissions...");return}let e=this.connectionState.status==="online"?"\u2713":this.connectionState.status==="reconnecting"?"\u21BB":"\u2717",t=this.connectionState.status==="online"?"Connected":"Offline";this.statusBarEl.setText(`VaultGuard Sync ${e} ${t}`)}toggleStatusBar(e){e&&!this.statusBarEl?(this.statusBarEl=this.addStatusBarItem(),this.updateStatusBar()):!e&&this.statusBarEl&&(this.statusBarEl.remove(),this.statusBarEl=null)}refreshFileExplorerDecorations(){this.syncFileExplorerDecorationsState(!0)}showPermissionsModal(){if(!this.session){this.showLoginRequiredNotice("view permissions");return}if(!this.apiClient){new b.Notice("VaultGuard Sync: Please configure the API endpoint in settings first.");return}new Te(this.app,this.apiClient,"permissions",this.session.userId,this.createAdminModalContext()).open()}createAdminModalContext(){return{orgId:this.settings.organizationId,orgSlug:this.settings.orgSlug,currentUser:this.session?{id:this.session.userId,displayName:this.session.displayName,email:this.session.email,orgRole:this.session.role,roles:this.session.roles,vaultRole:this.vaultMemberRole}:void 0,features:this.serverFeatures??void 0}}showAdminPanel(){if(!this.session)return;if(!this.apiClient){new b.Notice("VaultGuard Sync: Please configure the API endpoint in settings first.");return}new Te(this.app,this.apiClient,"users",null,this.createAdminModalContext()).open()}openAuditLog(){if(this.session){if(!this.apiClient){new b.Notice("VaultGuard Sync: not connected to a server.");return}new Te(this.app,this.apiClient,"audit",null,this.createAdminModalContext()).open()}}openWebAdminPanel(){if(!this.session)return;if(!this.featureEnabled("webAdmin")){new ve(this.app,"webAdmin").open();return}let e=this.settings.orgSlug?.trim()||"",t=e?`https://admin.example.com/${encodeURIComponent(e)}`:"https://admin.example.com";window.open(t,"_blank","noopener,noreferrer")}showPathPermissionsModal(e,t){if(!this.session||!this.apiClient){this.session?new b.Notice("VaultGuard Sync: Please configure the API endpoint in settings first."):this.showLoginRequiredNotice("view permissions");return}new kt({app:this.app,apiClient:this.apiClient,path:e,isFolder:t,isAdmin:this.isEffectiveAdmin(),currentUserId:this.session.userId,currentUserRole:this.getEffectiveUiRole(),allowAdminPerFileRestrictions:this.orgSettings?.allowAdminPerFileRestrictions===!0,onRulesChanged:()=>{this.permissionStore.emit("changed",{serverConfirmed:!0})}}).open()}showAddPermissionForPath(e,t){if(!this.apiClient){new b.Notice("VaultGuard Sync: Please configure the API endpoint in settings first.");return}let r=t?e.endsWith("/")?e:e+"/":e;new ge(this.app,this.apiClient).showAddRuleForPath(r,async()=>{this.permissionStore.emit("changed",{serverConfirmed:!0})})}async clearLocalCache(){this.permissionStore.invalidate(),this.readOnlyGuard?.refreshAll(),this.offlineQueue=[],this.syncState={lastSync:null,pendingChanges:0,conflicts:[],status:"idle",bytesUploaded:0,bytesDownloaded:0,lastError:null},new b.Notice("VaultGuard Sync: Local cache cleared."),this.log("Local cache cleared.")}clearSensitiveData(){this.session=null,this.keyLease=null,this.orgSettings=null,this.vaultMemberRole=null,this.stopKeyRenewalMonitor(),this.stopHeartbeatMonitor(),this.stopAutoLockTimer(),this.permissionStore.invalidate(),this.offlineQueue=[],this.log("Sensitive data cleared from memory.")}buildPluginData(){return{...this.settings,storedSessions:this.persistedSessions}}async savePluginData(){let e=this.pluginDataSaveQueue.catch(()=>{}).then(async()=>{await this.saveData(this.buildPluginData())});this.pluginDataSaveQueue=e,await e}static generateVaultBindingId(){if(typeof crypto.randomUUID=="function")return crypto.randomUUID();let e=crypto.getRandomValues(new Uint8Array(16));e[6]=e[6]&15|64,e[8]=e[8]&63|128;let t=Array.from(e,r=>r.toString(16).padStart(2,"0"));return[t.slice(0,4).join(""),t.slice(4,6).join(""),t.slice(6,8).join(""),t.slice(8,10).join(""),t.slice(10,16).join("")].join("-")}async computeDerivedVaultBindingId(){let e=this.app?.vault,t=e?.adapter,r="";try{r=typeof t?.getBasePath=="function"?t.getBasePath()??"":t?.basePath??""}catch{r=""}let s=(this.app?.appId??"").toString(),a="";try{a=typeof e?.getName=="function"?e.getName()??"":""}catch{a=""}let n=[r,s,a].map(o=>o.trim()).filter(o=>o.length>0).join("|");return n?(await this.computeHash(`vaultguard-vault::${n}`)).slice(0,32):(this.settings.vaultBindingId||(this.settings.vaultBindingId=le.generateVaultBindingId(),await this.savePluginData()),this.settings.vaultBindingId)}getSessionBindingId(){return this.derivedBindingId?this.derivedBindingId:(this.log("Derived vault binding ID is not yet available; refusing to use shared session storage."),null)}getSessionStorageKey(e){return`${le.SESSION_STORAGE_KEY_PREFIX}${e}`}removeStoredSessionKey(e){try{localStorage.removeItem(this.getSessionStorageKey(e))}catch{}}protectSessionForStorage(e){let t=Me();if(!t)return null;try{let r=t.encryptString(JSON.stringify(e)),s=r instanceof Uint8Array?r:new Uint8Array(r);return{v:1,storage:"electron-safe-storage",ciphertext:this.bytesToBase64(s)}}catch(r){return this.logError("Failed to protect session with safeStorage",r),null}}async protectSessionWithAtRest(e){let t=this.atRestCipher;if(!t?.isReady())return null;try{let r=await t.encryptString(JSON.stringify(e)),s=new Uint8Array(r);return{v:1,storage:"at-rest-cipher",ciphertext:this.bytesToBase64(s)}}catch(r){return this.logError("Failed to protect session with AtRestCipher",r),null}}unprotectStoredSession(e){if(!e||typeof e!="object")return null;let t=e;if(t.v!==1||!this.isNonEmptyString(t.ciphertext)||t.storage!=="electron-safe-storage")return null;let r=Me();if(!r)return this.notifySafeStorageUnavailable(),null;try{let s=r.decryptString(this.base64ToBytes(t.ciphertext)),a=JSON.parse(s);return this.materializeSession(a)}catch(s){return this.logError("Failed to restore protected session",s),null}}async unprotectAtRestSession(e){if(!e||typeof e!="object")return null;let t=e;if(t.v!==1||t.storage!=="at-rest-cipher"||!this.isNonEmptyString(t.ciphertext))return null;let r=this.atRestCipher;if(!r?.isReady())return null;try{let s=this.base64ToBytes(t.ciphertext),a=await r.decryptString(s),n=JSON.parse(a);return this.materializeSession(n)}catch(s){return this.logError("Failed to restore at-rest-protected session",s),null}}loadSessionFromStore(){let e=this.getSessionBindingId();if(!e)return null;try{let t=localStorage.getItem(this.getSessionStorageKey(e));if(t){let r=this.unprotectStoredSession(JSON.parse(t));if(r)return r}}catch{}return this.unprotectStoredSession(this.persistedSessions[e])}async loadAtRestSessionFromStore(){let e=this.getSessionBindingId();if(!e)return null;try{let t=localStorage.getItem(this.getSessionStorageKey(e));if(t){let r=await this.unprotectAtRestSession(JSON.parse(t));if(r)return r}}catch{}return this.unprotectAtRestSession(this.persistedSessions[e])}async persistSession(e){let t=this.getSessionBindingId();if(!t)return;let r=this.protectSessionForStorage(e);if(r||(r=await this.protectSessionWithAtRest(e)),!r){this.notifySafeStorageUnavailable();return}this.persistedSessions[t]=r;try{localStorage.setItem(this.getSessionStorageKey(t),JSON.stringify(r))}catch(s){this.logError("Failed to persist session to localStorage",s)}try{await this.savePluginData(),this.log(`Session persisted for ${e.displayName}`)}catch(s){this.logError("Failed to persist session to Obsidian data store",s)}}async clearStoredSession(){let e=this.getSessionBindingId();if(e){delete this.persistedSessions[e],this.removeStoredSessionKey(e);try{await this.savePluginData()}catch(t){this.logError("Failed to remove persisted session from Obsidian data store",t)}this.log("Stored session cleared.")}}notifySafeStorageUnavailable(){this.safeStorageUnavailableNotified||(this.safeStorageUnavailableNotified=!0,this.log("No secure session storage available (safeStorage unreachable AND at-rest cipher unavailable) \u2014 session will not be persisted to disk."),new b.Notice("VaultGuard Sync: Your platform doesn't expose secure credential storage. You'll need to log in each time the plugin loads \u2014 we never store auth tokens in plaintext.",1e4))}normalizePersistedSessions(e){if(!e||typeof e!="object")return{};let t={};for(let[r,s]of Object.entries(e)){if(!s||typeof s!="object")continue;let a=s,n=a.storage;a.v===1&&(n==="electron-safe-storage"||n==="at-rest-cipher")&&this.isNonEmptyString(a.ciphertext)&&(t[r]=s)}return t}materializeSession(e){if(!e||typeof e!="object"||!this.isNonEmptyString(e.userId)||!this.isNonEmptyString(e.refreshToken)||!this.isNonEmptyString(e.idToken)||!this.isNonEmptyString(e.accessToken)||!this.isNonEmptyString(e.tokenExpiresAt)||!this.isNonEmptyString(e.organizationId)||!this.isNonEmptyString(e.displayName)||!this.isNonEmptyString(e.email)||!this.isValidSessionRole(e.role)||!this.isNonEmptyString(e.createdAt))return null;let t=Array.isArray(e.roles)?e.roles.filter(r=>this.isNonEmptyString(r)):[];return{sessionId:this.isNonEmptyString(e.sessionId)?e.sessionId:"",userId:e.userId,organizationId:e.organizationId,displayName:e.displayName,email:e.email,accessToken:e.accessToken,idToken:e.idToken,refreshToken:e.refreshToken,tokenExpiresAt:e.tokenExpiresAt,role:e.role,roles:t.length>0?t:[e.role],createdAt:e.createdAt}}isValidSessionRole(e){return e==="member"||e==="editor"||e==="admin"||e==="owner"}isNonEmptyString(e){return typeof e=="string"&&e.trim().length>0}async computeHash(e){let r=new TextEncoder().encode(e),s=await crypto.subtle.digest("SHA-256",r);return Array.from(new Uint8Array(s)).map(n=>n.toString(16).padStart(2,"0")).join("")}base64ToBytes(e){let t=atob(e),r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}bytesToBase64(e){let t="";for(let r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return btoa(t)}getDeviceId(){return`obsidian-${navigator.userAgent.slice(0,32).replace(/\s/g,"_")}`}isNetworkError(e){if(e&&typeof e=="object"&&"status"in e&&e.status===0)return!0;let t=this.extractErrorMessage(e);return t?t.includes("network")||t.includes("timeout")||t.includes("timed out")||t.includes("econnrefused")||t.includes("econnreset")||t.includes("econnaborted")||t.includes("enotfound")||t.includes("etimedout")||t.includes("eai_again")||t.includes("enetunreach")||t.includes("ehostunreach")||t.includes("ehostdown")||t.includes("err_name_not_resolved")||t.includes("errname")||t.includes("err_internet_disconnected")||t.includes("err_network_changed")||t.includes("connection refused")||t.includes("connection reset")||t.includes("connection closed")||t.includes("socket hang up")||t.includes("failed to fetch")||t.includes("net::err_")||t.includes("abort"):!1}extractErrorMessage(e){if(e instanceof Error)return e.message.toLowerCase();if(typeof e=="string")return e.toLowerCase();if(e&&typeof e=="object"){let t=e;if(typeof t.message=="string")return t.message.toLowerCase();if(typeof t.text=="string")return t.text.toLowerCase()}return""}delay(e){return new Promise(t=>setTimeout(t,e))}log(e){this.settings.debugLogging&&console.log(`${or} ${e}`)}logError(e,t){console.error(`${or} ${e}:`,t)}};le.MANUAL_CONFIG_MAX_BYTES=64*1024,le.MANUAL_CONFIG_TIMEOUT_MS=1e4,le.SESSION_STORAGE_KEY_PREFIX="vaultguard-session:";var Lt=le;
