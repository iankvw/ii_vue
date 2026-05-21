<script setup>
/**
 * @fileoverview Refactored System Navigator view running within the /nav context.
 * Consolidates navigation actions by removing explicit button elements:
 * 1. Table Item Text Click: Drives internal virtual memory tree depth state mutations.
 * 2. Top Header Title Click: Executes programmatic router history shifts to the active path target.
 */
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Local state tracking cursor mimicking directory traversal operations
const virtualPath = ref('/')

// Reactive state containing the dynamically detected browser server host
const currentHost = ref('localhost')

/**
 * Lifecycle hook executing browser-specific window operations.
 * Captures active server domains or local loopback parameters on client mount.
 */
onMounted(() => {
    if (typeof window !== 'undefined') {
        currentHost.value = window.location.host
    }
})

/**
 * Computed block capturing child endpoints matching exactly 1 level below the virtual pointer focus.
 */
const subRoutes = computed(() => {
    const allRoutes = router.getRoutes()
    const current = virtualPath.value

    return allRoutes.filter(r => {
        if (current === '/') {
            const segments = r.path.split('/').filter(Boolean)
            return segments.length === 1
        } else {
            if (r.path.startsWith(current) && r.path !== current) {
                const remainingPart = r.path.substring(current.length).replace(/^\//, '')
                const segments = remainingPart.split('/').filter(Boolean)
                return segments.length === 1
            }
            return false
        }
    })
})

/**
 * Commits a state jump deeper into the chosen route folder directory branch token.
 * Allows exploration entry even if child paths are absent to evaluate terminal feedback states.
 * @param {string} targetPath - Specified destination string block being investigated.
 */
const enterVirtualDirectory = (targetPath) => {
    virtualPath.value = targetPath
}

/**
 * Reverts localized navigation tracking coordinates backward exactly 1 path hierarchy segment.
 */
const goUpVirtualDirectory = () => {
    if (virtualPath.value === '/') return

    const segments = virtualPath.value.split('/').filter(Boolean)
    segments.pop()

    virtualPath.value = '/' + segments.join('/')
}

/**
 * Programmatically triggers absolute system route redirect actions.
 * Evaluates active virtual coordinates and jumps matching active history targets instantly.
 */
const redirectToActualPage = () => {
    router.push(virtualPath.value)
}
</script>

<template>
    <main style="padding: 20px; font-family: monospace;">

        <h1 @click="redirectToActualPage" style="cursor: pointer; display: inline-block; color: #222;"
            onmouseover="this.style.color='#A91D3A'" onmouseout="this.style.color='#222'">
            {{ currentHost }}{{ virtualPath }}
        </h1>
        <hr style="margin-bottom: 20px;" />

        <div style="margin-bottom: 15px;">
            <button :disabled="virtualPath === '/'" @click="goUpVirtualDirectory"
                style="padding: 5px 10px; cursor: pointer; font-weight: bold;">
                📁 상위 디렉토리
            </button>
        </div>

        <table cellpadding="8" cellspacing="0" style="width: 100%; text-align: left;">
            <tbody>
                <tr v-if="subRoutes.length === 0">
                    <td style="color: #888; text-align: center; padding: 30px; font-style: italic;">
                        하위 라우터가 존재하지 않습니다. (최하단 디렉토리)
                    </td>
                </tr>

                <tr v-for="route in subRoutes" :key="route.path">
                    <td>
                        📄
                        <span @click="enterVirtualDirectory(route.path)"
                            style="cursor: pointer; color: #0066cc; text-decoration: underline; font-weight: bold;">
                            {{ route.meta?.title || route.name || route.path }}
                        </span>
                        <span style="color: #666; font-size: 0.9em; margin-left: 10px;">({{ route.path }})</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </main>
</template>