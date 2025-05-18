/**
 * Check if the current version is the latest version
 * @param currentVersion Current version of the package
 * @returns Promise that resolves to an object with latest version and update status
 */
export const checkVersion = async (currentVersion: string): Promise<{
  latest: string;
  current: string;
  needsUpdate: boolean;
}> => {
  try {
    const response = await fetch('https://registry.npmjs.org/@yourusername/notifier/latest');
    
    if (!response.ok) {
      throw new Error('Failed to fetch latest version');
    }
    
    const data = await response.json();
    const latestVersion = data.version;
    
    return {
      latest: latestVersion,
      current: currentVersion,
      needsUpdate: compareVersions(currentVersion, latestVersion) < 0
    };
  } catch (error) {
    console.error('Error checking version:', error);
    return {
      latest: currentVersion,
      current: currentVersion,
      needsUpdate: false
    };
  }
};

/**
 * Compare two semantic versions
 * @param versionA First version
 * @param versionB Second version
 * @returns -1 if versionA < versionB, 0 if equal, 1 if versionA > versionB
 */
function compareVersions(versionA: string, versionB: string): number {
  const partsA = versionA.split('.').map(Number);
  const partsB = versionB.split('.').map(Number);
  
  for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
    const partA = partsA[i] || 0;
    const partB = partsB[i] || 0;
    
    if (partA < partB) return -1;
    if (partA > partB) return 1;
  }
  
  return 0;
}
